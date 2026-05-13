import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';

document.addEventListener('DOMContentLoaded', () => {

	const socialShareEls = document.querySelectorAll('.wp-block-bssb-social-share');

	socialShareEls.forEach(socialShareEl => {
		const attributes = JSON.parse(socialShareEl.dataset.attributes);

		const bssbStyle = socialShareEl.querySelector(`.bssbStyle`);
	
		createRoot(bssbStyle).render(
			<>
				<Style
					attributes={{ ...attributes, isBackend: false }}
					id={socialShareEl.id}
				/>

			</>
		);
		socialShareEl.removeAttribute('data-attributes');
	});
});
