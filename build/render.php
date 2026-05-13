<?php
if (!defined('ABSPATH')) exit;
$bssb_id = wp_unique_id('bssbSocialShare-');
extract($attributes);

if (isset($icon['class']) && !empty($icon['class'])) {
	wp_enqueue_style('font-awesome-7');
}

wp_enqueue_script('goodshare');
wp_set_script_translations(
	'bssb-social-share-view-script',
	'social-share',
	BSSB_DIR_PATH . 'languages'
);
$bssb_allowed_attributes = $attributes;
$bssb_pro_attributes = ['transform', 'positionOption', 'positionType', 'hoverIconColor', 'hoverBackground', 'hoverBorder', 'isCounter', 'counterText', 'counterNumber', 'counterTypo', 'counterColor', 'label'];
foreach ($bssb_pro_attributes as $bssb_attr) {
    if (isset($bssb_allowed_attributes[$bssb_attr])) {
        unset($bssb_allowed_attributes[$bssb_attr]);
    }
}
?>

<div <?php echo wp_kses_data(get_block_wrapper_attributes()); ?> id="<?php echo esc_attr($bssb_id); ?>" data-attributes="<?php echo esc_attr(wp_json_encode($bssb_allowed_attributes)); ?>">
	<div class="bssbStyle"></div>

	<ul class="bssbSocialShare">
		<?php foreach ($socials as $bssb_index => $bssb_social) {

			$bssb_network = $bssb_social['network'] ?? '';
			$bssb_isUpIcon = $bssb_social['isUpIcon'] ?? false;
			$bssb_upIcon = $bssb_social['upIcon'] ?? [];
			$bssb_icon = $bssb_social['icon'] ?? [];

			$bssb_upIconUrl = $bssb_upIcon['url'] ?? '';
			$bssb_upIconAlt = $bssb_upIcon['alt'] ?? '';
			$bssb_iconClass = $bssb_icon['class'] ?? '';

			$bssb_upIconEl = $bssb_upIconUrl ? '<img src="' . esc_url($bssb_upIconUrl) . '" alt="' . esc_attr($bssb_upIconAlt) . '" />' : '';
			$bssb_iconEl = $bssb_iconClass ? '<i class="' . esc_attr($bssb_iconClass) . '"></i>' : '';

			$bssb_filterIconEl = $bssb_isUpIcon ? $bssb_upIconEl : $bssb_iconEl;
			// classes
			$bssb_li_classes = [
				'icon',
				'icon-' . $bssb_index,
			];

			?>

			<li class="<?php echo esc_attr(implode(' ', $bssb_li_classes)); ?>" data-social="<?php echo esc_attr($bssb_network); ?>" 	<?php if ($bssb_network === 'copy'): ?> data-copy="true" <?php endif; ?>>
				<?php echo wp_kses_post($bssb_filterIconEl); ?>

			</li>

		<?php } ?>

	</ul>
</div>