<?php
if (!defined('ABSPATH'))
    exit;
if (!class_exists('BSSB_Admin')) {
    class BSSB_Admin
    {
        public function __construct()
        {
            add_action('admin_menu', [$this, 'bssb_social_share_sub_menu']);
            add_filter('manage_social_share_cpt_posts_columns', [$this, 'bssb_set_custom_column_edit']);
            add_action('manage_social_share_cpt_posts_custom_column', [$this, 'bssb_manage_custom_column'], 10, 2);
            add_action('admin_enqueue_scripts', [$this, 'bssb_admin_enqueue_scripts']);
        }
        /**
         * Pro-only screens shown in the free plugin as locked previews.
         * Slugs match the Pro plugin, so links keep working after upgrading.
         */
        private static function pro_pages()
        {
            return [
                'bssb_share_analytics' => [
                    'menu'  => __('Share Analytics', 'b-social-share'),
                    'title' => __('Share Analytics', 'b-social-share'),
                    'image' => 'share-analytics.jpg',
                    'desc'  => __('See how often visitors click your share buttons, which networks they prefer and which posts get shared the most.', 'b-social-share'),
                    'list'  => [
                        __('Today / 7 / 15 / 30 day share trends', 'b-social-share'),
                        __('Top networks and top shared content', 'b-social-share'),
                        __('Privacy-friendly: no personal data stored', 'b-social-share'),
                    ],
                ],
                'bssb_autopost' => [
                    'menu'  => __('Auto Post', 'b-social-share'),
                    'title' => __('B Social Share Auto Post', 'b-social-share'),
                    'image' => 'auto-post.jpg',
                    'desc'  => __('Share every new post automatically to your social accounts — no copying links.', 'b-social-share'),
                    'list'  => [
                        __('Facebook, LinkedIn, X, Threads, Pinterest, Telegram, Discord, Bluesky & Mastodon', 'b-social-share'),
                        __('Rules, schedules and delivery logs', 'b-social-share'),
                        __('Share templates with smart tags', 'b-social-share'),
                    ],
                ],
                'bssb_share_display' => [
                    'menu'  => __('Share Display', 'b-social-share'),
                    'title' => __('Share Display', 'b-social-share'),
                    'image' => 'share-display.jpg',
                    'desc'  => __('Show share buttons across your whole site from one screen — inline, in a popup or in a fly-in.', 'b-social-share'),
                    'list'  => [
                        __('Auto-insert buttons on posts, pages and WooCommerce products', 'b-social-share'),
                        __('Share popup on scroll, time delay or exit-intent', 'b-social-share'),
                        __('Animated fly-in at the bottom left or right', 'b-social-share'),
                    ],
                ],
            ];
        }

        public static function pricing_url()
        {
            return admin_url('edit.php?post_type=social_share_cpt&page=social_share_Dashboard#/pricing');
        }

        public function bssb_social_share_sub_menu()
        {
            foreach (self::pro_pages() as $slug => $page) {
                add_submenu_page(
                    'edit.php?post_type=social_share_cpt',
                    $page['title'],
                    esc_html($page['menu']) . ' <span class="bssb-menu-badge">' . esc_html__('Pro', 'b-social-share') . '</span>',
                    'manage_options',
                    $slug,
                    [$this, 'bssb_pro_preview_page']
                );
            }

            add_submenu_page(
                'edit.php?post_type=social_share_cpt',
                __('Demo & Help', 'b-social-share'),
                __('Demo & Help', 'b-social-share'),
                'manage_options',
                'social_share_Dashboard',
                [$this, 'bssb_social_share_Dashboard_page']
            );

        }

        public function bssb_social_share_Dashboard_page()
        {
            ?>
            <div id="bssbDashboard" data-info="<?php echo esc_attr(wp_json_encode([
                'version' => BSSB_PLUGIN_VERSION,
                'isPremium' => bssb_fs()->is_premium(),
                'adminUrl' => admin_url(),
                'nonce' => wp_create_nonce('wp_ajax'),
                'licenseActiveNonce' => wp_create_nonce('bssb_license_nonce'),
            ])); ?>">
                <noscript>
                    <div class="notice notice-error">
                        <p><?php esc_html_e('JavaScript is required to load the B Social Share Dashboard.', 'b-social-share'); ?>
                        </p>
                    </div>
                </noscript>
                <p class="bssb-loading-placeholder"><?php esc_html_e('Loading Dashboard...', 'b-social-share'); ?></p>
            </div>
            <?php
        }

        /** Locked preview: screenshot of the Pro screen under an overlay with an upgrade card. */
        public function bssb_pro_preview_page()
        {
            $pages = self::pro_pages();
            $slug  = isset($_GET['page']) ? sanitize_key(wp_unslash($_GET['page'])) : ''; // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- read-only screen selection.
            if (!isset($pages[$slug])) {
                return;
            }
            $page = $pages[$slug];
            ?>
            <div class="wrap bssbProPreview">
                <h1 class="screen-reader-text"><?php echo esc_html($page['title']); ?></h1>
                <div class="bssbProPreview__stage">
                    <img class="bssbProPreview__image" src="<?php echo esc_url(BSSB_DIR_URL . 'assets/images/pro/' . $page['image']); ?>" alt="" aria-hidden="true">
                    <div class="bssbProPreview__overlay">
                        <div class="bssbProPreview__card" role="region" aria-labelledby="bssbProPreviewTitle">
                            <span class="bssbProPreview__badge">
                                <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false"><path fill="currentColor" d="M2 19h20v2H2v-2Zm1-2L2 7l5.5 4L12 4l4.5 7L22 7l-1 10H3Z"/></svg>
                                <?php esc_html_e('Pro Feature', 'b-social-share'); ?>
                            </span>
                            <h2 id="bssbProPreviewTitle" class="bssbProPreview__title"><?php echo esc_html($page['title']); ?></h2>
                            <p class="bssbProPreview__desc"><?php echo esc_html($page['desc']); ?></p>
                            <ul class="bssbProPreview__list">
                                <?php foreach ($page['list'] as $item) : ?>
                                    <li><?php echo esc_html($item); ?></li>
                                <?php endforeach; ?>
                            </ul>
                            <a class="bssbProPreview__button" href="<?php echo esc_url(self::pricing_url()); ?>"><?php esc_html_e('Buy Now', 'b-social-share'); ?></a>
                        </div>
                    </div>
                </div>
            </div>
            <?php
        }

        public function bssb_set_custom_column_edit($column)
        {
            unset($column['date']);
            $column['shortcode'] = __('Shortcode', 'b-social-share');
            $column['date'] = __('Date', 'b-social-share');
            return $column;
        }
        public function bssb_manage_custom_column($column_name, $post_id)
        {
            if ($column_name === 'shortcode') {
                printf(
                    '<div class="bssbAdminShortcode" id="bssbAdminShortcode-%1$s">
                        <input value="[social-share id=%1$s]" readonly>
                        <span class="tooltip">%2$s</span>
                    </div>',
                    esc_attr($post_id),
                    esc_html__('Copy to Clipboard', 'b-social-share')
                );
            }
        }

        public function bssb_admin_enqueue_scripts()
        {
            $screen = get_current_screen();

            // Menu badge is visible on every admin screen.
            wp_register_style('bssb-admin-menu', false, [], BSSB_PLUGIN_VERSION);
            wp_enqueue_style('bssb-admin-menu');
            wp_add_inline_style('bssb-admin-menu', '#adminmenu .bssb-menu-badge{display:inline-block;margin-left:4px;padding:1px 6px;border-radius:3px;background:#f59e0b;color:#1d2327;font-size:9px;font-weight:700;line-height:1.6;text-transform:uppercase;vertical-align:1px}');

            if ($screen) {
                foreach (array_keys(self::pro_pages()) as $slug) {
                    if ('social_share_cpt_page_' . $slug === $screen->id) {
                        wp_enqueue_style('bssb-pro-preview', BSSB_DIR_URL . 'assets/css/pro-preview.css', [], BSSB_PLUGIN_VERSION);
                        break;
                    }
                }
            }

            if ($screen && 'social_share_cpt' === $screen->post_type && in_array($screen->base, ['post', 'edit'], true)) {
                wp_enqueue_script('bssb-shortcode-js', BSSB_DIR_URL . 'build/shortcode.js', ['wp-i18n'], BSSB_PLUGIN_VERSION, true);
                wp_enqueue_style('bssb-shortcode-css', BSSB_DIR_URL . 'build/shortcode.css', [], BSSB_PLUGIN_VERSION);
                wp_set_script_translations('bssb-shortcode-js', 'b-social-share', BSSB_DIR_PATH . 'languages');
            }

            if ($screen && $screen->id === 'social_share_cpt_page_social_share_Dashboard') {
                $asset_file = BSSB_DIR_PATH . 'build/admin-dashboard.asset.php';
                $dependencies = ['wp-util'];
                if (file_exists($asset_file)) {
                    $asset = include $asset_file;
                    if (is_array($asset) && isset($asset['dependencies'])) {
                        $dependencies = array_merge($asset['dependencies'], $dependencies);
                    }
                }
                wp_enqueue_script('bssb-admin-script', BSSB_DIR_URL . 'build/admin-dashboard.js', $dependencies, BSSB_PLUGIN_VERSION, true);
                wp_enqueue_style('bssb-admin-style', BSSB_DIR_URL . 'build/admin-dashboard.css', false, BSSB_PLUGIN_VERSION);
                wp_set_script_translations('bssb-admin-script', 'b-social-share', BSSB_DIR_PATH . 'languages');
            }
        }
    }
}
