<?php

namespace BSS\Admin;

if ( ! defined( 'ABSPATH' ) ) { exit; }

if ( ! class_exists( __NAMESPACE__ . '\BSS_PromoBanner' ) ) {

    class BSS_PromoBanner {
        const DISMISSED_KEY   = 'bss_promo_banner_dismissed_permanent';
        const EXPIRATION_DATE = '2026-12-05 23:59:59';

        /** Target landing URL */
        const COUPON_URL      = 'https://bplugins.com/products/b-social-share/pricing/?utm_source=admin&utm_medium=dashboard&utm_campaign=bfcm2026';

        public function __construct() {
            add_action( 'admin_notices',                     [ $this, 'render' ] );
            add_action( 'admin_head',                        [ $this, 'enqueue_styles' ] );
            add_action( 'admin_footer',                      [ $this, 'enqueue_scripts' ] );
            add_action( 'wp_ajax_bss_dismiss_promo_banner', [ $this, 'ajax_dismiss' ] );
        }

        /* ------------------------------------------------------------------ */
        /*  Screen, Expiration, Dismissal & Pro Helpers                       */
        /* ------------------------------------------------------------------ */

        /**
         * Check if the current admin screen is one of the allowed B Social Share screens:
         * 1. All Social list (edit.php?post_type=social_share_cpt)
         * 2. Demo & Help dashboard (edit.php?post_type=social_share_cpt&page=social_share_Dashboard)
         * 3. Auto Post (edit.php?post_type=social_share_cpt&page=bssb_autopost)
         * 4. Display (edit.php?post_type=social_share_cpt&page=bssb_share_display)
         * 5. Analysis (edit.php?post_type=social_share_cpt&page=bssb_share_analytics)
         * Nowhere else (strictly excluded on post editor / post-new.php).
         */
        private function is_plugin_screen(): bool {
            $screen = function_exists( 'get_current_screen' ) ? get_current_screen() : null;
            // phpcs:ignore WordPress.Security.NonceVerification.Recommended
            $page   = isset( $_GET['page'] ) ? sanitize_key( wp_unslash( $_GET['page'] ) ) : '';

            // Exclude post editor or add-new
            if ( $screen && in_array( $screen->base, [ 'post', 'post-new' ], true ) ) {
                return false;
            }
            global $pagenow;
            if ( 'post.php' === $pagenow || 'post-new.php' === $pagenow ) {
                return false;
            }

            // Allowed submenu pages (4 subpages: demo, auto post, display, analysis)
            $allowed_pages = [
                'social_share_dashboard',
                'bssb_autopost',
                'bssb_share_display',
                'bssb_share_analytics',
            ];

            if ( in_array( strtolower( $page ), $allowed_pages, true ) ) {
                return true;
            }

            if ( $screen ) {
                // Check if screen ID matches any allowed subpage
                foreach ( $allowed_pages as $allowed ) {
                    if ( false !== stripos( $screen->id, $allowed ) ) {
                        return true;
                    }
                }

                // All Social list table (edit.php?post_type=social_share_cpt)
                if ( ( 'edit' === $screen->base || 'edit-social_share_cpt' === $screen->id ) && 'social_share_cpt' === $screen->post_type && empty( $page ) ) {
                    return true;
                }
            }

            // Fallback for list table
            // phpcs:ignore WordPress.Security.NonceVerification.Recommended
            $post_type = isset( $_GET['post_type'] ) ? sanitize_key( wp_unslash( $_GET['post_type'] ) ) : '';
            if ( 'edit.php' === $pagenow && 'social_share_cpt' === $post_type && empty( $page ) ) {
                return true;
            }

            return false;
        }

        /**
         * Check if current date is past December 5, 2026
         */
        private function is_expired(): bool {
            $expiry_timestamp = strtotime( self::EXPIRATION_DATE );
            $current_time     = time();
            return ( $current_time > $expiry_timestamp );
        }

        /**
         * Check if current user has permanently dismissed the banner
         */
        private function is_dismissed(): bool {
            return (bool) get_user_meta( get_current_user_id(), self::DISMISSED_KEY, true );
        }

        /**
         * Determine if the banner should be omitted
         */
        private function should_skip(): bool {
            // 1. Only show inside allowed B Social Share screens
            if ( ! $this->is_plugin_screen() ) {
                return true;
            }

            // 2. Automatically remove after Dec 5, 2026
            if ( $this->is_expired() ) {
                return true;
            }

            // 3. Never display again once dismissed by the user
            if ( $this->is_dismissed() ) {
                return true;
            }

            // 4. Hide when Pro version is active (Free version only!)
            if ( function_exists( 'bssb_fs' ) && method_exists( bssb_fs(), 'can_use_premium_code' ) && bssb_fs()->can_use_premium_code() ) {
                return true;
            }
            if ( defined( 'BSSB_PRO_ACTIVE' ) && BSSB_PRO_ACTIVE ) {
                return true;
            }
            if ( function_exists( 'is_plugin_active' ) && ( is_plugin_active( 'b-social-share-pro/plugin.php' ) || is_plugin_active( 'b-social-share-pro/index.php' ) ) ) {
                return true;
            }

            return false;
        }

        /* ------------------------------------------------------------------ */
        /*  Pro CSS Styles (Design 5)                                         */
        /* ------------------------------------------------------------------ */

        public function enqueue_styles(): void {
            if ( $this->should_skip() ) { return; }
            ?>
            <style id="bss-promo-banner-css">
            #bss-promo-banner,
            div#bss-promo-banner.notice,
            div#bss-promo-banner.bss-promo-notice,
            div#bss-promo-banner.bss-promo-banner-wrap {
                --bpl-primary:        #146ef5;
                --bpl-primary-hover:  #0d5ecc;
                --bpl-secondary:      #ff7a00;
                --bpl-dark:           #070127;
                --bpl-text:           #1b2e4b;
                --bpl-muted:          #475569;

                background: #ffffff !important;
                border: 1px solid #cbd5e1 !important;
                border-radius: 8px !important;
                box-shadow: 0 3px 12px rgba(7, 1, 39, 0.05) !important;
                display: flex !important;
                align-items: stretch !important;
                min-height: 84px !important;
                overflow: hidden !important;
                position: relative !important;
                top: auto !important;
                left: auto !important;
                width: 100% !important;
                max-width: 100% !important;
                height: auto !important;
                opacity: 1 !important;
                visibility: visible !important;
                margin: 14px 0 20px 0 !important;
                padding: 0 !important;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif !important;
                box-sizing: border-box !important;
                animation: bssBannerSlide .3s ease both;
                z-index: 99 !important;
                clear: both !important;
                flex: 0 0 100% !important;
            }
            @keyframes bssBannerSlide {
                from { opacity: 0; transform: translateY(-6px); }
                to   { opacity: 1; transform: translateY(0); }
            }

            /* Container specific widths and margins */
            #wpbody-content > #bss-promo-banner {
                width: calc(100% - 20px) !important;
                margin: 14px 20px 16px 0 !important;
            }
            .wrap > #bss-promo-banner,
            .bssbProPreview > #bss-promo-banner {
                width: 100% !important;
                margin: 14px 0 20px 0 !important;
            }

            /* Left Brand Ribbon Block */
            #bss-promo-banner .bss-brand-ribbon {
                width: 140px;
                min-width: 140px;
                background: linear-gradient(135deg, #146ef5 0%, #ff7a00 65%, var(--bpl-dark) 100%);
                color: #ffffff;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 12px 10px;
                gap: 6px;
                flex-shrink: 0;
            }
            #bss-promo-banner .bss-brand-ribbon img {
                width: 40px;
                height: 40px;
                object-fit: contain;
                filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.35));
            }
            #bss-promo-banner .bss-brand-ribbon .bss-ribbon-title {
                font-size: 10.5px;
                font-weight: 800;
                letter-spacing: .7px;
                text-transform: uppercase;
                color: #ffffff;
                text-align: center;
                line-height: 1.2;
            }

            /* Main Content Zone */
            #bss-promo-banner .bss-content-zone {
                flex: 1;
                padding: 14px 22px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;
                flex-wrap: wrap;
                background: #ffffff;
            }

            /* Left Stack: Texts & Highlights */
            #bss-promo-banner .bss-text-stack {
                display: flex;
                flex-direction: column;
                gap: 5px;
                flex: 1;
                min-width: 290px;
            }

            /* Headline */
            #bss-promo-banner .bss-headline {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 10px;
                font-size: 16px;
                font-weight: 800;
                color: var(--bpl-dark);
                line-height: 1.25;
            }

            /* Subheadline */
            #bss-promo-banner .bss-subheadline {
                font-size: 12.5px;
                color: var(--bpl-muted);
                line-height: 1.45;
                max-width: 820px;
            }

            /* Micro Feature Chips */
            #bss-promo-banner .bss-feature-chips {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 12px;
                margin-top: 4px;
            }
            #bss-promo-banner .bss-feature-chips span {
                display: inline-flex;
                align-items: center;
                gap: 4px;
                font-size: 11.5px;
                font-weight: 600;
                color: #334155;
            }
            #bss-promo-banner .bss-feature-chips .check-icon {
                color: #10b981;
                font-weight: 800;
            }

            /* Right Action Zone: CTA Button */
            #bss-promo-banner .bss-btn-cta {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                padding: 10px 22px;
                background: var(--bpl-primary);
                color: #ffffff !important;
                font-size: 13px;
                font-weight: 700;
                text-decoration: none !important;
                border-radius: 6px;
                white-space: nowrap;
                transition: all .2s ease;
                box-shadow: 0 2px 6px rgba(20, 110, 245, 0.25);
                flex-shrink: 0;
            }
            #bss-promo-banner .bss-btn-cta:hover {
                background: var(--bpl-primary-hover);
                transform: translateY(-1px);
                box-shadow: 0 4px 10px rgba(20, 110, 245, 0.35);
            }

            /* Dismiss Close Button */
            #bss-promo-banner .bss-banner-dismiss-btn {
                position: absolute;
                top: 8px;
                right: 8px;
                background: transparent;
                border: none;
                color: #94a3b8;
                cursor: pointer;
                font-size: 18px;
                line-height: 1;
                padding: 4px 6px;
                border-radius: 4px;
                transition: color .15s ease;
                z-index: 10;
            }
            #bss-promo-banner .bss-banner-dismiss-btn:hover {
                color: var(--bpl-dark);
            }

            /* Responsive */
            @media (max-width: 960px) {
                #bss-promo-banner .bss-brand-ribbon {
                    width: 110px;
                    min-width: 110px;
                }
            }
            @media (max-width: 782px) {
                #bss-promo-banner {
                    flex-direction: column;
                    align-items: stretch;
                }
                #bss-promo-banner .bss-brand-ribbon {
                    width: 100%;
                    flex-direction: row;
                    justify-content: flex-start;
                    padding: 8px 16px;
                }
                #bss-promo-banner .bss-content-zone {
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 14px 16px;
                }
            }
            </style>
            <?php
        }

        /* ------------------------------------------------------------------ */
        /*  Permanent Dismiss Script (AJAX + Animation)                       */
        /* ------------------------------------------------------------------ */

        public function enqueue_scripts(): void {
            if ( $this->should_skip() ) { return; }
            $dismiss_nonce = wp_create_nonce( 'bss_dismiss_promo' );
            $ajax_url      = admin_url( 'admin-ajax.php' );
            ?>
            <script id="bss-promo-banner-js">
            (function () {
                // Ensure banner is always placed at the very top of the content container
                function bssPositionBannerTop() {
                    var banner = document.getElementById('bss-promo-banner');
                    if (!banner) return;
                    var wrap = document.querySelector('.bssbProPreview') || document.querySelector('.wrap') || document.getElementById('wpbody-content');
                    if (wrap && wrap.firstChild !== banner) {
                        wrap.insertBefore(banner, wrap.firstChild);
                    }
                }
                bssPositionBannerTop();
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', bssPositionBannerTop);
                }
                window.addEventListener('load', bssPositionBannerTop);
                setTimeout(bssPositionBannerTop, 100);
                setTimeout(bssPositionBannerTop, 500);

                var btn = document.getElementById('bss-banner-close');
                if (!btn) return;
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    var banner = document.getElementById('bss-promo-banner');
                    if (banner) {
                        banner.style.transition = 'opacity .25s ease, transform .25s ease';
                        banner.style.opacity    = '0';
                        banner.style.transform  = 'translateY(-6px)';
                        setTimeout(function() { banner.remove(); }, 260);
                    }
                    var fd = new FormData();
                    fd.append('action', 'bss_dismiss_promo_banner');
                    fd.append('nonce',  '<?php echo esc_js( $dismiss_nonce ); ?>');
                    fetch('<?php echo esc_url( $ajax_url ); ?>', {
                        method: 'POST',
                        credentials: 'same-origin',
                        body: fd
                    });
                });
            })();
            </script>
            <?php
        }

        /* ------------------------------------------------------------------ */
        /*  Render Single Banner (Design 5)                                   */
        /* ------------------------------------------------------------------ */

        public function render(): void {
            if ( $this->should_skip() ) { return; }

            $coupon_url = esc_url( self::COUPON_URL );
            $icon_url   = esc_url( BSSB_DIR_URL . 'assets/images/pomo-icon.svg' );
            ?>
            <div id="bss-promo-banner" class="notice bss-promo-notice bss-promo-banner-wrap">

                <!-- Left Asymmetric Brand Ribbon -->
                <div class="bss-brand-ribbon">
                    <img src="<?php echo esc_url( $icon_url ); ?>" alt="<?php esc_attr_e( 'B Social Share', 'b-social-share' ); ?>" />
                    <span class="bss-ribbon-title">Social Share</span>
                </div>

                <!-- Main Content Zone -->
                <div class="bss-content-zone">
                    <div class="bss-text-stack">
                        <div class="bss-headline">
                            <span><?php esc_html_e( 'Social Share Block Biggest Black Friday Sale is Live – Up to 45% OFF!', 'b-social-share' ); ?></span>
                        </div>
                        <div class="bss-subheadline">
                            <span><?php esc_html_e( 'Upgrade to Social Share Block Pro at an exclusive Black Friday price! Unlock automated social posting, advanced share analytics, floating & popup displays, and 40+ stylish share buttons!', 'b-social-share' ); ?></span>
                        </div>
                        <div class="bss-feature-chips">
                            <span><strong class="check-icon">✓</strong> <?php esc_html_e( 'Auto Post to 9+ Social Networks', 'b-social-share' ); ?></span>
                            <span><strong class="check-icon">✓</strong> <?php esc_html_e( 'Click & Share Analytics', 'b-social-share' ); ?></span>
                            <span><strong class="check-icon">✓</strong> <?php esc_html_e( 'Floating, Inline & Popup Display', 'b-social-share' ); ?></span>
                            <span><strong class="check-icon">✓</strong> <?php esc_html_e( '40+ Social Networks & Messengers', 'b-social-share' ); ?></span>
                            <span><strong class="check-icon">✓</strong> <?php esc_html_e( 'Custom Colors, Shapes & Counter', 'b-social-share' ); ?></span>
                        </div>
                    </div>

                    <!-- CTA Button -->
                    <a href="<?php echo esc_url( $coupon_url ); ?>" target="_blank" rel="noopener noreferrer" class="bss-btn-cta">
                        <?php esc_html_e( 'Unlock PRO Features →', 'b-social-share' ); ?>
                    </a>
                </div>

                <!-- Dismiss Button -->
                <button id="bss-banner-close"
                        class="bss-banner-dismiss-btn"
                        title="<?php esc_attr_e( 'Dismiss', 'b-social-share' ); ?>"
                        aria-label="<?php esc_attr_e( 'Dismiss banner', 'b-social-share' ); ?>">
                    &times;
                </button>

            </div>
            <?php
        }

        /* ------------------------------------------------------------------ */
        /*  AJAX Handler: Permanent Dismissal                                 */
        /* ------------------------------------------------------------------ */

        public function ajax_dismiss(): void {
            check_ajax_referer( 'bss_dismiss_promo', 'nonce' );
            update_user_meta( get_current_user_id(), self::DISMISSED_KEY, 1 );
            wp_send_json_success();
        }
    }

    new BSS_PromoBanner();
}
