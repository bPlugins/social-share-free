<?php
/**
 * Promotional Link in Installed Plugins List
 *
 * This file handles the promotional / discount link shown under the plugin name
 * in the WordPress "Installed Plugins" list (wp-admin/plugins.php).
 *
 * To update for future campaigns (e.g. BFCM, New Year, Summer Sale):
 * - Change EXPIRATION_DATE (e.g. '2026-12-05 23:59:59')
 * - Change PROMO_URL (campaign landing page)
 * - Change PROMO_TEXT (discount text)
 * - Change PROMO_COLOR (text color)
 * - Set ENABLED to false to turn off anytime
 *
 * @package B_Social_Share
 */

namespace BSS\Admin;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( __NAMESPACE__ . '\BSS_PromoLink' ) ) {

	class BSS_PromoLink {

		/**
		 * ==============================================================
		 * CAMPAIGN CONFIGURATION (Easily edit here for future campaigns)
		 * ==============================================================
		 */

		/** Set to false to disable this promo link anytime */
		const ENABLED = true;

		/** Expiration date: Link will automatically stop showing after this date & time */
		const EXPIRATION_DATE = '2026-12-05 23:59:59';

		/** Landing page link with campaign parameters */
		const PROMO_URL = 'https://bplugins.com/products/b-social-share/pricing/?utm_source=admin&utm_medium=plugins&utm_campaign=bfcm2026';

		/** Promotional link text */
		const PROMO_TEXT = 'Black Friday Sale – Up to 45% OFF!';

		/** Highlight color matching promotional style */
		const PROMO_COLOR = '#ff7a00';

		/** Basename of this free plugin */
		private string $plugin_basename = '';

		public function __construct() {
			// 1. Hook specifically into this plugin's action links
			$this->plugin_basename = defined( 'BSSB_PLUGIN_BASENAME' )
				? BSSB_PLUGIN_BASENAME
				: plugin_basename( dirname( __DIR__ ) . '/plugin.php' );

			$normalized_basename = function_exists( 'wp_normalize_path' )
				? wp_normalize_path( $this->plugin_basename )
				: str_replace( '\\', '/', $this->plugin_basename );

			add_filter( 'plugin_action_links_' . $this->plugin_basename, [ $this, 'add_promo_action_link' ], 99 );
			add_filter( 'network_admin_plugin_action_links_' . $this->plugin_basename, [ $this, 'add_promo_action_link' ], 99 );

			if ( $normalized_basename !== $this->plugin_basename ) {
				add_filter( 'plugin_action_links_' . $normalized_basename, [ $this, 'add_promo_action_link' ], 99 );
				add_filter( 'network_admin_plugin_action_links_' . $normalized_basename, [ $this, 'add_promo_action_link' ], 99 );
			}

			// 2. Generic fallback hook to guarantee it matches this free plugin
			add_filter( 'plugin_action_links', [ $this, 'filter_generic_action_links' ], 99, 4 );
			add_filter( 'network_admin_plugin_action_links', [ $this, 'filter_generic_action_links' ], 99, 4 );
		}

		/**
		 * Check if promotion is currently active
		 *
		 * @return bool
		 */
		public function is_promo_active(): bool {
			if ( ! self::ENABLED ) {
				return false;
			}

			// Hide when Pro is active (Free version only!)
			if ( function_exists( 'bssb_fs' ) && method_exists( bssb_fs(), 'can_use_premium_code' ) && bssb_fs()->can_use_premium_code() ) {
				return false;
			}
			if ( defined( 'BSSB_PRO_ACTIVE' ) && BSSB_PRO_ACTIVE ) {
				return false;
			}
			if ( function_exists( 'is_plugin_active' ) && ( is_plugin_active( 'b-social-share-pro/plugin.php' ) || is_plugin_active( 'b-social-share-pro/index.php' ) ) ) {
				return false;
			}

			// Expiration check: Automatically stops showing after December 5, 2026
			if ( ! empty( self::EXPIRATION_DATE ) ) {
				$expiry_timestamp = strtotime( self::EXPIRATION_DATE );
				$current_time     = time();
				if ( $expiry_timestamp && $current_time > $expiry_timestamp ) {
					return false;
				}
			}

			return true;
		}

		/**
		 * Generate HTML markup for the promo link
		 *
		 * @return string
		 */
		private function get_promo_html(): string {
			return sprintf(
				'<a href="%s" target="_blank" rel="noopener noreferrer" style="color: %s; font-weight: bold;">%s</a>',
				esc_url( self::PROMO_URL ),
				esc_attr( self::PROMO_COLOR ),
				esc_html__( 'Black Friday Sale – Up to 45% OFF!', 'b-social-share' )
			);
		}

		/**
		 * Add promotional link to the specific plugin action links row
		 *
		 * @param array $links Existing plugin row action links.
		 * @return array
		 */
		public function add_promo_action_link( $links ): array {
			if ( ! is_array( $links ) ) {
				$links = [];
			}

			if ( ! $this->is_promo_active() ) {
				return $links;
			}

			if ( ! isset( $links['bss_bfcm_promo'] ) ) {
				$links['bss_bfcm_promo'] = $this->get_promo_html();
			}

			return $links;
		}

		/**
		 * Fallback filter: Inspects plugin rows and appends promo link ONLY for this Free plugin
		 *
		 * @param array  $actions     Current action links.
		 * @param string $plugin_file Plugin basename path.
		 * @param array  $plugin_data Plugin metadata header array.
		 * @param string $context     Context ('all', 'active', etc.).
		 * @return array
		 */
		public function filter_generic_action_links( $actions, $plugin_file, $plugin_data = null, $context = null ): array {
			if ( ! is_array( $actions ) ) {
				$actions = [];
			}

			if ( ! $this->is_promo_active() ) {
				return $actions;
			}

			if ( isset( $actions['bss_bfcm_promo'] ) ) {
				return $actions;
			}

			$normalized_current = function_exists( 'wp_normalize_path' )
				? wp_normalize_path( $plugin_file )
				: str_replace( '\\', '/', $plugin_file );

			$normalized_target = function_exists( 'wp_normalize_path' )
				? wp_normalize_path( $this->plugin_basename )
				: str_replace( '\\', '/', $this->plugin_basename );

			// Strictly exclude Pro plugin row
			if ( false !== stripos( $normalized_current, '-pro/' ) || false !== stripos( $normalized_current, '_pro/' ) || false !== stripos( $normalized_current, '-premium' ) ) {
				return $actions;
			}

			// Check direct match
			$is_match = ( $normalized_current === $normalized_target );

			// Check folder match for free social share plugin
			if ( ! $is_match && ( 'b-social-share-free/plugin.php' === $normalized_current || 'b-social-share-free/index.php' === $normalized_current || 'b-social-share/plugin.php' === $normalized_current ) ) {
				$is_match = true;
			}

			// Inspect metadata title / TextDomain as fallback
			if ( ! $is_match && is_array( $plugin_data ) ) {
				$text_domain = $plugin_data['TextDomain'] ?? '';
				$name        = $plugin_data['Name'] ?? '';
				if ( 'b-social-share' === $text_domain && false === stripos( $name, 'Pro' ) ) {
					$is_match = true;
				}
			}

			if ( $is_match ) {
				$actions['bss_bfcm_promo'] = $this->get_promo_html();
			}

			return $actions;
		}
	}

	new BSS_PromoLink();
}
