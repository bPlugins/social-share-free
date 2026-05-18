<?php
if (!defined('ABSPATH')) exit;
if (!class_exists('BSSB_Admin')) {
    class BSSB_Admin
    {
        public function __construct()
        {
            add_action('init', [$this, 'bssb_social_share_block_post_type']);
            add_action('admin_menu', [$this, 'bssb_social_share_sub_menu']);
            add_filter('manage_social_share_cpt_posts_columns', [$this, 'bssb_set_custom_column_edit']);
            add_action('manage_social_share_cpt_posts_custom_column', [$this, 'bssb_manage_custom_column'], 10, 2);
        }

        /**
         * Registers the custom post type for social share templates.
         *
         * Note: 'template_lock' => 'all' is combined with 'show_in_rest' => true
         * to enable layout composition and lock down template structure in the
         * Gutenberg block editor, while 'publicly_queryable' => false restricts 
         * public frontend single page queries.
         */
        public function bssb_social_share_block_post_type(){
            register_post_type('social_share_cpt', [
                'label' => __('B Social Share', 'social-share'),
                'description' => __('This is a Social Share and SEO-friendly card', 'social-share'),
                'labels' => [
                    'name' => __('B Social Share', 'social-share'),
                    'singular_name' => __('Social Share', 'social-share'),
                    'add_new' => __('Add New', 'social-share'),
                    'add_new_item' => __('Add New Social Share', 'social-share'),
                    'edit_item' => __('Edit Social Share', 'social-share'),
                    'new_item' => __('New Social Share', 'social-share'),
                    'view_item' => __('View Social Share', 'social-share'),
                    'search_items' => __('Search Social Share', 'social-share'),
                    'not_found' => __('Sorry, we couldn\'t find the ShortCode you are looking for.', 'social-share')
                ],
                'public' => false,
                'publicly_queryable' => false,
                'show_ui' => true,
                'capability_type' => 'post',
                'map_meta_cap' => true,
                'show_in_rest' => true,
                'rest_base' => 'social_share_cpt',
                'rest_namespace' => 'bssb/v1',
                'menu_position' => 20,
                'menu_icon' => 'dashicons-share',
                'template' => [['bssb/social-share']],
                'template_lock' => 'all',

            ]);
        }
        public function bssb_social_share_sub_menu(){
            add_submenu_page(
                'edit.php?post_type=social_share_cpt',
                __('Demo & Help', 'social-share'),
                __('Demo & Help', 'social-share'),
                'edit_posts', 
                'social_share_Dashboard',
                [$this, 'bssb_social_share_Dashboard_page']
            );

        }

        public function bssb_social_share_Dashboard_page() {
            ?>
            <div id="bssbDashboard" data-info="<?php echo esc_attr(wp_json_encode([
                'version' => BSSB_PLUGIN_VERSION, 
            ])); ?>">
                <noscript>
                    <div class="notice notice-error">
                        <p><?php esc_html_e('JavaScript is required to load the B Social Share Dashboard.', 'social-share'); ?></p>
                    </div>
                </noscript>
                <p class="bssb-loading-placeholder"><?php esc_html_e('Loading Dashboard...', 'social-share'); ?></p>
            </div>
            <?php
        }

        public function bssb_set_custom_column_edit($column) {
            unset($column['date']);
            $column['shortcode'] = __('Shortcode', 'social-share');
            $column['date'] = __('Date', 'social-share');
            return $column;
        }
        public function bssb_manage_custom_column($column_name, $post_id) {
            if ($column_name == 'shortcode') {
                printf(
                    '<div class="bssbAdminShortcode" id="bssbAdminShortcode-%1$s">
                        <input value="[social-share id=%1$s]" readonly>
                        <span class="tooltip">%2$s</span>
                    </div>',
                    esc_attr($post_id),
                    esc_html__('Copy to Clipboard', 'social-share')
                );
            } 
        }
    }
}
