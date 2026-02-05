import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';

document.addEventListener('DOMContentLoaded', () => {

	const socialShareEls = document.querySelectorAll('.wp-block-bssb-social-share');

	socialShareEls.forEach(socialShareEl => {
		const attributes = JSON.parse(socialShareEl.dataset.attributes);

		const bssbStyle = socialShareEl.querySelector(`.bssbStyle`);

		const isPremium = bssbIsPipeChecker;
		const activeTheme = attributes?.theme || 'default';
		const proThemes = ['theme4', 'theme5'];
		const showOverlay = !isPremium && proThemes.includes(activeTheme);

		const siteLocation = `/wp-admin/edit.php?post_type=social_share_cpt&page=social_share_Dashboard#/pricing`;

		createRoot(bssbStyle).render(
			<>
				<Style
					attributes={{ ...attributes, isBackend: false }}
					id={socialShareEl.id}
				/>

				{showOverlay && (
					<div className="scd-pro-overlay">
						<div className="overlay-inner">
							<h3>🚫 Premium Theme</h3>
							<a
								href={siteLocation}
								rel="noreferrer"
								target="_blank"
								className="upgrade-btn"
							>
								Upgrade Now
							</a>
						</div>
					</div>
				)}
			</>
		);

		if (!bssbIsPipeChecker) {
			socialShareEl.querySelectorAll('[data-copy="true"]').forEach((el) => {
				if (!bssbIsPipeChecker) {
					el.classList.add('is-disabled');
					el.setAttribute('data-tooltip', 'Pro Feature');
				} else {
					el.classList.remove('is-disabled');
					el.setAttribute('data-tooltip', 'Copy link');
				}
			});
		}

		socialShareEl.removeAttribute('data-attributes');
	});
});


document.addEventListener('click', function (e) {
	const copyEl = e.target.closest('[data-copy="true"]');
	if (!copyEl) return;

	if (!bssbIsPipeChecker) return;

	const url = window.location.href;

	if (navigator.clipboard && navigator.clipboard.writeText) {
		navigator.clipboard.writeText(url).then(() => {
			showCopied(copyEl);
		});
	} else {
		const tempInput = document.createElement('input');
		tempInput.value = url;
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand('copy');
		document.body.removeChild(tempInput);

		showCopied(copyEl);
	}
});


function showCopied(el) {
	el.setAttribute('data-tooltip', 'Copied!');
	el.classList.add('copied');

	setTimeout(() => {
		el.setAttribute('data-tooltip', 'Copy link');
		el.classList.remove('copied');
	}, 2000);
}
