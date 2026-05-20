import './shortcode.scss';

document.addEventListener('DOMContentLoaded', () => {
	const shortcodeContainers = document.querySelectorAll('.bssbAdminShortcode');

	shortcodeContainers.forEach(container => {
		const input = container.querySelector('input');
		const tooltip = container.querySelector('.tooltip');

		if (input && tooltip) {
			input.addEventListener('click', () => {
				input.select();
				const textToCopy = input.value;

				if (navigator.clipboard && navigator.clipboard.writeText) {
					navigator.clipboard.writeText(textToCopy).then(() => {
						tooltip.textContent = wp.i18n.__('Copied Successfully!', 'b-social-share');
						setTimeout(() => {
							tooltip.textContent = wp.i18n.__('Copy to Clipboard', 'b-social-share');
						}, 1500);
					}).catch(err => {
						console.error('Failed to copy shortcode: ', err);
					});
				} else {
					// Fallback to legacy execCommand for non-secure HTTP or older browsers
					try {
						input.setSelectionRange(0, 99999);
						document.execCommand('copy');
						tooltip.textContent = wp.i18n.__('Copied Successfully!', 'b-social-share');
						setTimeout(() => {
							tooltip.textContent = wp.i18n.__('Copy to Clipboard', 'b-social-share');
						}, 1500);
					} catch (err) {
						console.error('Legacy fallback copy failed: ', err);
					}
				}
			});
		}
	});
});