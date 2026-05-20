import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';

document.addEventListener('DOMContentLoaded', () => {

	const socialShareEls = document.querySelectorAll('.wp-block-bssb-social-share');

	socialShareEls.forEach(socialShareEl => {
		try {
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
		} catch (error) {
			console.error('Error hydrating B Social Share block:', error);
		} finally {
			socialShareEl.removeAttribute('data-attributes');
		}
	});

	// Modern Toast Notification for premium user feedback
	function showToast(message) {
		let toast = document.getElementById('bssb-toast-notification');
		if (!toast) {
			toast = document.createElement('div');
			toast.id = 'bssb-toast-notification';
			toast.style.position = 'fixed';
			toast.style.bottom = '40px';
			toast.style.left = '50%';
			toast.style.transform = 'translateX(-50%) translateY(20px)';
			toast.style.background = 'rgba(18, 18, 18, 0.95)';
			toast.style.backdropFilter = 'blur(10px)';
			toast.style.color = '#ffffff';
			toast.style.padding = '12px 24px';
			toast.style.borderRadius = '50px';
			toast.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
			toast.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
			toast.style.fontSize = '14px';
			toast.style.fontWeight = '600';
			toast.style.zIndex = '999999';
			toast.style.opacity = '0';
			toast.style.transition = 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
			toast.style.pointerEvents = 'none';
			toast.style.border = '1px solid rgba(255, 255, 255, 0.1)';
			toast.style.letterSpacing = '0.5px';
			document.body.appendChild(toast);
		}

		toast.textContent = message;
		// Force standard layout reflow
		toast.offsetHeight;
		toast.style.transform = 'translateX(-50%) translateY(0)';
		toast.style.opacity = '1';

		setTimeout(() => {
			toast.style.opacity = '0';
			toast.style.transform = 'translateX(-50%) translateY(20px)';
		}, 3000);
	}

	// Global delegated event listener for social share buttons
	document.addEventListener('click', (event) => {
		const shareLi = event.target.closest('.bssbSocialShare li[data-social]');
		if (!shareLi) return;

		event.preventDefault();

		const network = shareLi.getAttribute('data-social');
		const url = encodeURIComponent(window.location.href);
		const title = encodeURIComponent(document.title);

		const descMeta = document.querySelector('meta[name="description"]');
		const description = descMeta ? encodeURIComponent(descMeta.getAttribute('content')) : '';

		const imageLink = document.querySelector('link[rel="apple-touch-icon"]');
		const image = imageLink ? encodeURIComponent(imageLink.getAttribute('href')) : '';

		if (network === 'copy') {
			if (navigator.clipboard && navigator.clipboard.writeText) {
				navigator.clipboard.writeText(window.location.href).then(() => {
					showToast('Link copied to clipboard!');
				}).catch(err => {
					console.error('Could not copy link: ', err);
					showToast('Failed to copy link. Please copy it manually.');
				});
			} else {
				showToast('Clipboard API not supported. Please copy the URL manually.');
			}
			return;
		}

		let shareUrl = '';
		let target = '_blank';
		let windowFeatures = 'width=640,height=480,location=no,toolbar=no,menubar=no';

		switch (network) {
			case 'facebook':
				shareUrl = `https://facebook.com/sharer/sharer.php?u=${url}&t=${title}`;
				break;
			case 'twitter':
				shareUrl = `https://twitter.com/share?url=${url}&text=${title}`;
				break;
			case 'linkedin':
				shareUrl = `https://www.linkedin.com/shareArticle?url=${url}&text=${title}&summary=${description}&mini=true`;
				break;
			case 'pinterest':
				shareUrl = `https://www.pinterest.com/pin/create/button/?url=${url}&description=${description}&media=${image}`;
				break;
			case 'blogger':
				shareUrl = `https://www.blogger.com/blog-this.g?u=${url}&n=${title}`;
				break;
			case 'wordpress':
				shareUrl = `https://wordpress.com/wp-admin/press-this.php?u=${url}&t=${title}&s=${description}&i=${image}&v=2`;
				break;
			case 'tumblr':
				shareUrl = `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${url}&title=${title}&caption=${description}&posttype=link`;
				break;
			case 'reddit':
				shareUrl = `https://reddit.com/submit?url=${url}&title=${title}`;
				break;
			case 'digg':
				shareUrl = `https://digg.com/submit?url=${url}&title=${title}`;
				break;
			case 'livejournal':
				shareUrl = `https://livejournal.com/update.bml?event=${url}&subject=${title}`;
				break;
			case 'evernote':
				shareUrl = `https://www.evernote.com/clip.action?url=${url}&title=${title}&body=${description}`;
				break;
			case 'delicious':
				shareUrl = `https://del.icio.us/save?url=${url}&title=${title}`;
				break;
			case 'flipboard':
				shareUrl = `https://share.flipboard.com/bookmarklet/popout?ext=sharethis&title=${title}&url=${url}&v=2`;
				break;
			case 'mix':
				shareUrl = `https://mix.com/mixit?su=submit&url=${url}`;
				break;
			case 'pocket':
				shareUrl = `https://getpocket.com/save?url=${url}&title=${title}`;
				break;
			case 'buffer':
				shareUrl = `https://buffer.com/add?url=${url}&text=${title}`;
				break;
			case 'instapaper':
				shareUrl = `https://www.instapaper.com/edit?url=${url}&title=${title}`;
				break;
			case 'meneame':
				shareUrl = `https://www.meneame.net/submit?url=${url}`;
				break;
			case 'baidu':
				shareUrl = `https://cang.baidu.com/do/add?iu=${url}&it=${title}&dc=${description}&fr=ien`;
				break;
			case 'weibo':
				shareUrl = `https://service.weibo.com/share/share.php?url=${url}&title=${title}`;
				break;
			case 'xing':
				shareUrl = `https://www.xing.com/spi/shares/new?url=${url}`;
				break;
			case 'renren':
				shareUrl = `http://share.renren.com/share/buttonshare.do?url=${url}&title=${title}`;
				break;
			case 'vkontakte':
				shareUrl = `https://vk.com/share.php?url=${url}&title=${title}&image=${image}`;
				break;
			case 'odnoklassniki':
				shareUrl = `https://connect.ok.ru/offer?url=${url}&title=${title}`;
				break;
			case 'moimir':
				shareUrl = `https://connect.mail.ru/share?url=${url}&title=${title}&description=${description}&imageurl=${image}`;
				break;
			case 'surfingbird':
				shareUrl = `https://surfingbird.ru/share?url=${url}&title=${title}&description=${description}`;
				break;
			case 'liveinternet':
				shareUrl = `http://www.liveinternet.ru/journal_post.php?action=n_add&cnurl=${url}&cntitle=${title}`;
				break;
			case 'sms':
				shareUrl = `sms:?&body=${url}`;
				target = '_self';
				break;
			case 'skype':
				shareUrl = `https://web.skype.com/share?url=${url}`;
				break;
			case 'telegram':
				shareUrl = `https://t.me/share/url?url=${url}&text=${title}`;
				break;
			case 'viber':
				shareUrl = `viber://forward?text=${url}`;
				target = '_self';
				break;
			case 'whatsapp':
				shareUrl = `https://api.whatsapp.com/send?text=${title}%20${url}`;
				break;
			case 'wechat':
				shareUrl = `https://chart.apis.google.com/chart?cht=qr&chs=196x196&chld=Q%7C0&chl=${url}`;
				break;
			case 'line':
				shareUrl = `line://msg/text/${url}`;
				target = '_self';
				break;
			default:
				break;
		}

		if (shareUrl) {
			if (target === '_blank') {
				const width = 640;
				const height = 480;
				const left = Math.round(window.screen.width / 2 - width / 2);
				const top = Math.round(window.screen.height / 2 - height / 2);
				window.open(shareUrl, 'Share', `${windowFeatures},width=${width},height=${height},left=${left},top=${top}`);
			} else {
				window.location.href = shareUrl;
			}
		}
	});
});
