<?php

if (!class_exists('bssPlugin')) {

    class bssPlugin
    {

        public function __construct()
        {
            add_action('init', [$this, 'bss_register_block']);
            add_action('plugins_loaded', [$this, 'bss_plugins_dependency']);
            add_action('enqueue_block_assets', [$this, 'bss_enqueue_block_assets']);
            add_action('admin_enqueue_scripts', [$this, 'bss_admin_enqueue_scripts']);
            add_action('enqueue_block_editor_assets', [$this, "bssbEnqueueEditorAssets"]);
            add_action('enqueue_block_assets', [$this, "bssbEnqueueFrontendAssets"]);
            add_shortcode('social-share', [$this, 'bss_shortcode_handler']);
            add_action('wp_enqueue_scripts', [$this, 'bss_frontend_enqueue_block_assets']);
        }

        public function bss_register_block()
        {
            register_block_type(BSSB_DIR_PATH . '/build');

            wp_set_script_translations('bssb-social-share-editor-script', 'social-share', BSSB_DIR_PATH . 'languages');
        }

        public function bss_plugins_dependency()
        {
            require_once BSSB_DIR_PATH . 'inc/function.php';
            require_once BSSB_DIR_PATH . 'inc/class_bssAdmin.php';
        }
        public function bssbEnqueueEditorAssets()
        {
            wp_add_inline_script(
                'bssb-social-share-editor-script',
                'const bssbIsPipeChecker = ' . wp_json_encode(bssbIsPremium()) . ';',
                'before'
            );

        }
        public function bssbEnqueueFrontendAssets()
        {
            wp_add_inline_script(
                'bssb-social-share-view-script',
                'const bssbIsPipeChecker = ' . wp_json_encode(bssbIsPremium()) . ';',
                'before'
            );
        }

        // Enqueue frontend + editor assets
        public function bss_enqueue_block_assets()
        {
            wp_enqueue_style('font-awesome-7', BSSB_DIR_URL . 'assets/css/font-awesome.min.css', [], '7.1.0');
        }
        public function bss_frontend_enqueue_block_assets()
        {
            if (!is_admin()) {
                wp_enqueue_script('goodshare', BSSB_DIR_URL . 'assets/js/goodshare.min.js', [], BSSB_PLUGIN_VERSION, true);
            }
        }

        public function bss_admin_enqueue_scripts($screen)
        {

            global $typenow;


            if ('social_share_cpt' === $typenow) {
                wp_enqueue_script('shortcode-js', BSSB_DIR_URL . '/build/shortcode.js', [], BSSB_PLUGIN_VERSION, true);
                wp_enqueue_style('shortcode-css', BSSB_DIR_URL . '/build/shortcode.css', [], BSSB_PLUGIN_VERSION);
            }

            if ('social_share_cpt_page_social_share_Dashboard' === $screen) {
                wp_enqueue_style('vgb-admin-style', BSSB_DIR_URL . '/build/admin-dashboard.css', false, BSSB_PLUGIN_VERSION);
                wp_enqueue_script('vgb-admin-script', BSSB_DIR_URL . '/build/admin-dashboard.js', ['react', 'react-dom', 'wp-data', "wp-api", "wp-util", "wp-i18n", "lodash"], BSSB_PLUGIN_VERSION, true);
            }

        }

        public function bss_shortcode_handler($atts)
        {

            if (isset($atts['id'])) {
                $post = get_post($atts['id']);

                if ($post) {
                    $blocks = parse_blocks($post->post_content);
                    if ($blocks) {
                        foreach ($blocks as $block) {
                            return render_block($block);
                        }
                    }
                } else {
                    $overlayHTML = '

                                        <style>
                                            .bcb-premium-slider-wrapper { position: relative; }
                                            .bcb-premium-overlay { top: 382px; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); display: flex; justify-content: center; align-items: center; z-index: 999; }
                                            .bcb-premium-overlay-content { text-align: center; padding: 20px 30px; border-radius: 10px; max-width: 300px; color: white; }
                                            .bcb-upgrade-btn { display: inline-block; margin-top: 10px; padding: 8px 18px; background-color: #0073aa; color: #fff; text-decoration: none; font-weight: 600; border-radius: 5px; transition: background-color 0.3s ease; }
                                            .bcb-upgrade-btn:hover { background-color: #005177; }
                                            @media (max-width: 480px) { .bcb-premium-overlay-content { padding: 15px 20px; } .bcb-upgrade-btn { padding: 6px 14px; } }
                                        </style>
                                        <div class="bcb-premium-overlay">
                                            <div class="bcb-premium-overlay-content">
                                            <p>This shortcode Theme is available in the Pro version. If you are using the Pro version, please activate your license.</p>
                                            <a href="' . esc_url(admin_url('edit.php?post_type=accordion_block&page=bab_Dashboard#/pricing')) . '" class="bcb-upgrade-btn">Upgrade to Pro</a>
                                            </div>
                                        </div>';

                    return '
                                    <div class="bcb-premium-slider-wrapper">
                                        ' . $overlayHTML . '
                                    </div>';
                }
            }

        }

    }

}