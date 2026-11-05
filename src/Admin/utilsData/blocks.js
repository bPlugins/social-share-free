import { socialShareIcon } from '../../utils/icons';
import {
	shareCountIcon,
	shareModalIcon,
	floatingBarIcon,
	clickToShareIcon,
	followButtonsIcon,
	shareCardIcon,
	qrCodeIcon,
	highlightShareIcon,
	clickToChatIcon,
	shareLockerIcon,
	aiShareIcon
} from './icon';

const docsURL = 'https://bblockswp.com/docs/social-share-block';
const demoURL = 'https://bblockswp.com/demo/social-share-all-demo/';

// The `name` value must match how blocks are keyed in the disabled-blocks option:
// the free block uses "social-share"; each pro block uses its build/blocks folder name.
export default [
	{
		name: 'social-share',
		title: 'Social Share',
		icon: socialShareIcon,
		demo: demoURL,
		docs: docsURL,
		required: true,
		status: 'published',
	},
	{
		name: 'share-count-total',
		title: 'Share Count Total',
		icon: shareCountIcon,
		isPremium: true,
		demo: 'https://bblockswp.com/demo/social-share-share-count-total/',
		status: 'published',
	},
	{
		name: 'share-modal-trigger',
		title: 'Share Modal Trigger',
		icon: shareModalIcon,
		isPremium: true,
		status: 'published',
	},
	{
		name: 'floating-share-bar',
		title: 'Floating Share Bar',
		icon: floatingBarIcon,
		isPremium: true,
		demo: 'https://bblockswp.com/demo/social-share-floating-share-bar/',
		status: 'published',
	},
	{
		name: 'click-to-share',
		title: 'Click to Share',
		icon: clickToShareIcon,
		isPremium: true,
		demo: 'https://bblockswp.com/demo/social-share-click-to-share/',
		status: 'published',
	},
	{
		name: 'follow-buttons',
		title: 'Follow Buttons',
		icon: followButtonsIcon,
		isPremium: true,
		demo: 'https://bblockswp.com/demo/social-share-follow-buttons/',
		status: 'published',
	},
	{
		name: 'share-card',
		title: 'Share Card',
		icon: shareCardIcon,
		isPremium: true,
		demo: 'https://bblockswp.com/demo/social-share-share-card/',
		status: 'published',
	},
	{
		name: 'qr-code-share',
		title: 'QR Code Share',
		icon: qrCodeIcon,
		isPremium: true,
		demo: 'https://bblockswp.com/demo/social-share-qr-code-share/',
		status: 'published',
	},
	{
		name: 'highlight-to-share',
		title: 'Highlight to Share',
		icon: highlightShareIcon,
		isPremium: true,
		demo: 'https://bblockswp.com/demo/social-share-highlight-to-share/',
		status: 'published',
	},
	{
		name: 'click-to-chat',
		title: 'Click to Chat',
		icon: clickToChatIcon,
		isPremium: true,
		demo: 'https://bblockswp.com/demo/social-share-click-to-chat/',
		status: 'published',
	},
	{
		name: 'share-locker',
		title: 'Share Locker',
		icon: shareLockerIcon,
		isPremium: true,
		demo: 'https://bblockswp.com/demo/social-share-share-locker/',
		status: 'published',
	},
	{
		name: 'ai-social-share',
		title: 'AI Social Sharing',
		icon: aiShareIcon,
		isPremium: true,
		status: 'published',
	},
];
