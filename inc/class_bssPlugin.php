<?php
if (!defined('ABSPATH')) exit;
if (!class_exists('BSSB_Plugin')) {
    class BSSB_Plugin
    {
        public function __construct()
        {
            add_action('init', [$this, 'bssb_load_textdomain']);
            add_action('init', [$this, 'bssb_register_block']);
            add_action('plugins_loaded', [$this, 'bssb_plugins_dependency']);
            add_action('admin_enqueue_scripts', [$this, 'bssb_admin_enqueue_scripts']);
            add_shortcode('social-share', [$this, 'bssb_shortcode_handler']);
            add_action('enqueue_block_assets', [$this, 'bssb_enqueue_block_assets']);
        }

        public function bssb_load_textdomain()
        {
            load_plugin_textdomain(
                'social-share',
                false,
                dirname(plugin_basename(BSSB_DIR_PATH . 'b-social-share.php')) . '/languages'
            );
        }

        public function bssb_register_block()
        {
            register_block_type(BSSB_DIR_PATH . 'build');
            wp_register_style('font-awesome-free', BSSB_DIR_URL . 'assets/css/font-awesome.min.css', [], BSSB_PLUGIN_VERSION);
            wp_set_script_translations('bssb-social-share-editor-script', 'social-share', BSSB_DIR_PATH . 'languages');
            wp_set_script_translations('bssb-social-share-view-script', 'social-share', BSSB_DIR_PATH . 'languages');
        }
        
        public function bssb_enqueue_block_assets()
        {
            if (is_admin()) {
                wp_enqueue_style('font-awesome-free');
            }
        } 

        public function bssb_plugins_dependency()
        {
            require_once BSSB_DIR_PATH . 'inc/class_bssAdmin.php';
            new BSSB_Admin();
        }


        public function bssb_admin_enqueue_scripts($hook_suffix)
        {
            $screen = function_exists('get_current_screen') ? get_current_screen() : null;

            if ($screen && 'social_share_cpt' === $screen->post_type && in_array($screen->base, ['post', 'edit'], true)) {
                wp_enqueue_script('bssb-shortcode-js', BSSB_DIR_URL . 'build/shortcode.js', ['wp-i18n'], BSSB_PLUGIN_VERSION, true);
                wp_enqueue_style('bssb-shortcode-css', BSSB_DIR_URL . 'build/shortcode.css', [], BSSB_PLUGIN_VERSION);
            }

            if ($screen && false !== strpos($screen->id, 'social_share_Dashboard')) {
                $asset = include BSSB_DIR_PATH . 'build/admin-dashboard.asset.php';
                wp_enqueue_script('bssb-admin-script', BSSB_DIR_URL . 'build/admin-dashboard.js', array_merge($asset['dependencies'], ['wp-util']), BSSB_PLUGIN_VERSION, true);
                wp_enqueue_style('bssb-admin-style', BSSB_DIR_URL . 'build/admin-dashboard.css', false, BSSB_PLUGIN_VERSION);
            }
        }
        public function bssb_shortcode_handler($atts)
        {
            $atts = shortcode_atts(
                array(
                    'id' => '',
                ),
                $atts,
                'social-share'
            );

            $bssb_post_id = isset($atts['id']) ? absint($atts['id']) : 0;
            if ($bssb_post_id < 1) {
                return '<p>' . esc_html__('Please provide a valid numeric ID.', 'social-share') . '</p>';
            }

            $post = get_post($bssb_post_id);
            
            if (!$post || $post->post_type !== 'social_share_cpt' || $post->post_status !== 'publish') {
                return '';
            }

            $blocks = parse_blocks($post->post_content);
            if (!empty($blocks)) {
                foreach ($blocks as $block) {
                    if (isset($block['blockName']) && $block['blockName'] === 'bssb/social-share') {
                        return wp_kses_post(render_block($block));
                    }
                }
            }
            return '<p>' . sprintf(esc_html__('Error: Social Share block with ID %d not found.', 'social-share'), $bssb_post_id) . '</p>';
        }
    }
}
