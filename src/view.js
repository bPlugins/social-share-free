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
				<Style attributes={{ ...attributes, isBackend: false }} id={socialShareEl.id} />
				{showOverlay && (
					<div className="scd-pro-overlay">
						<div className="overlay-inner">
							<h3>🚫 Premium Theme</h3>
							<a href={siteLocation} rel="noreferrer" target="_blank" className="upgrade-btn">
								Upgrade Now
							</a>
						</div>
					</div>
				)}
			</>

		);

		socialShareEl?.removeAttribute('data-attributes');
	});
});