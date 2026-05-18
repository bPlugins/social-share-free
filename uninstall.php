<?php
/**
 * Uninstall Cleanup
 *
 * @package BSocialShare
 */

// If uninstall not called from WordPress, exit.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

// Delete custom post type posts correctly using wp_delete_post loop to trigger hooks and cleanup relations.
$bssb_posts = get_posts( [
	'post_type'        => 'social_share_cpt',
	'post_status'      => 'any',
	'numberposts'      => -1,
	'fields'           => 'ids',
	'suppress_filters' => false,
] );

if ( ! empty( $bssb_posts ) ) {
	foreach ( $bssb_posts as $bssb_post_id ) {
		wp_delete_post( $bssb_post_id, true );
	}
}
