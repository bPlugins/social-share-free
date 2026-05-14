<?php
if (!defined('ABSPATH')) exit;
if (!class_exists('BSSB_Admin')) {
    class BSSB_Admin
    {
        public function __construct()
        {
            add_action('init', [$this, 'bssb_social_share_block_post_type']);
            add_action('admin_menu', [$this, 'bssb_social_share_sub_Menu']);
            add_filter('manage_social_share_cpt_posts_columns', [$this, 'bssb_setCustom_column_edit']);
            add_action('manage_social_share_cpt_posts_custom_column', [$this, 'bssb_manage_custom_column'], 10, 2);
        }

        public function bssb_social_share_block_post_type(){
            register_post_type('social_share_cpt', [
                'label' => 'B Social Share',
                'description' => 'this is Social Share and seo friendly card',
                'labels' => [
                    'name' => __('B Social Share', 'social-share'),
                    'singular_name' => __('Social Share', 'social-share'),
                    'add_new' => __('Add New ', 'social-share'),
                    'add_new_item' => __('Add New Social Share', 'social-share'),
                    'edit_item' => __('Edit Social Share', 'social-share'),
                    'new_item' => __('New Social Share', 'social-share'),
                    'view_item' => __('View Social Share', 'social-share'),
                    'search_items' => __('Search Social Share', 'social-share'),
                    'not_found' => __('Sorry, we couldn\'t find the ShortCode you are looking for.', 'social-share')
                ],
                'public' => false,
                'show_ui' => true,
                'show_in_rest' => true,
                'menu_position' => 20,
                'menu_icon' => 'dashicons-share',
                'template' => [['bssb/social-share']],
                'template_lock' => 'all',

            ]);
        }
        public function bssb_social_share_sub_Menu(){
            add_submenu_page(
                'edit.php?post_type=social_share_cpt',
                'Demo & Help',
                'Demo & Help',
                'manage_options',
                'social_share_Dashboard',
                [$this, 'bssb_social_share_Dashboard_page']
            );

        }

        public function bssb_social_share_Dashboard_page() {
            ?>
            <div id='bssbDashboard' data-info='<?php echo esc_attr(wp_json_encode([
                'version' => BSSB_PLUGIN_VERSION, 
            ])); ?>'></div>
            <?php
        }

        public function bssb_setCustom_column_edit($column) {
            unset($column['date']);
            $column['shortcode'] = 'ShortCode';
            $column['date'] = 'Date';
            return $column;
        }
        public function bssb_manage_custom_column($column_name, $post_id) {
            if ($column_name == 'shortcode') {
                echo '<div class="bssbAdminShortcode" id="bssbAdminShortcode-' . esc_attr($post_id) . '">
						<input value="[social-share id=' . esc_attr($post_id) . ']" onclick="copyBssbAdminShortcode(\'' . esc_attr($post_id) . '\')" readonly>
						<span class="tooltip">Copy To Clipboard</span>
					  </div>';
            } 
        }
    }
}
