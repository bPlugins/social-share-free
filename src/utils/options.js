import { __ } from '@wordpress/i18n';
import socialShare1 from '../../assets/images/social-share-1.png';
import socialShare6 from '../../assets/images/social-share-6.png';
import socialShare2 from '../../assets/images/social-share-2.png';
import socialShare3 from '../../assets/images/social-share-3.png';


export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'b-social-share') },
	{ name: 'style', title: __('Style', 'b-social-share') }
];

export const themes = [
	{ label: __('Default', 'b-social-share'), value: 'default' },
	{ label: __('Theme 1', 'b-social-share'), value: 'theme1' },
	{ label: __('Theme 2', 'b-social-share'), value: 'theme2' },
	{ label: __('Theme 3', 'b-social-share'), value: 'theme3' }
];

export const networkTypes = [
	{ label: __('Social Networks', 'b-social-share'), value: 'socialNetworks' },
	{ label: __('Mobile Messenger', 'b-social-share'), value: 'mobileMessenger' }
];

export const socialNetworks = [
	{ label: __('Facebook', 'b-social-share'), value: 'facebook' },
	{ label: __('Twitter', 'b-social-share'), value: 'twitter' },
	{ label: __('LinkedIn', 'b-social-share'), value: 'linkedin' },
	{ label: __('Pinterest', 'b-social-share'), value: 'pinterest' },
	{ label: __('Blogger', 'b-social-share'), value: 'blogger' },
	{ label: __('WordPress', 'b-social-share'), value: 'wordpress' },
	{ label: __('Copy Link', 'b-social-share'), value: 'copy' },
	{ label: __('Tumblr', 'b-social-share'), value: 'tumblr' },
	{ label: __('Reddit', 'b-social-share'), value: 'reddit' },
	{ label: __('Digg', 'b-social-share'), value: 'digg' },
	{ label: __('LiveJournal', 'b-social-share'), value: 'livejournal' },
	{ label: __('Evernote', 'b-social-share'), value: 'evernote' },
	{ label: __('Flipboard', 'b-social-share'), value: 'flipboard' },
	{ label: __('Mix', 'b-social-share'), value: 'mix' },
	{ label: __('Pocket', 'b-social-share'), value: 'pocket' },
	{ label: __('Buffer', 'b-social-share'), value: 'buffer' },
	{ label: __('Instapaper', 'b-social-share'), value: 'instapaper' },

	{ label: __('Meneame', 'b-social-share'), value: 'meneame' },

	{ label: __('Baidu', 'b-social-share'), value: 'baidu' },
	{ label: __('Weibo', 'b-social-share'), value: 'weibo' },
	{ label: __('Xing', 'b-social-share'), value: 'xing' },
	{ label: __('RenRen', 'b-social-share'), value: 'renren' },

	{ label: __('Vkontakte (VK)', 'b-social-share'), value: 'vkontakte' },
	{ label: __('Odnoklassniki', 'b-social-share'), value: 'odnoklassniki' },
	{ label: __('My World@Mail.Ru', 'b-social-share'), value: 'moimir' },
	{ label: __('Surfingbird', 'b-social-share'), value: 'surfingbird' },
	{ label: __('LiveInternet', 'b-social-share'), value: 'liveinternet' },
];

export const mobileNetworks = [
	{ label: __('SMS', 'b-social-share'), value: 'sms' },
	{ label: __('Skype', 'b-social-share'), value: 'skype' },
	{ label: __('Telegram', 'b-social-share'), value: 'telegram' },
	{ label: __('Viber', 'b-social-share'), value: 'viber' },
	{ label: __('WhatsApp', 'b-social-share'), value: 'whatsapp' },
	{ label: __('WeChat', 'b-social-share'), value: 'wechat' },
	{ label: __('LINE', 'b-social-share'), value: 'line' },
];

export const iconClassList = [
	['facebook', 'fab fa-facebook-f'],
	['twitter', 'fab fa-twitter'],
	['linkedin', 'fab fa-linkedin-in'],
	['pinterest', 'fab fa-pinterest-p'],
	['blogger', 'fab fa-blogger-b'],
	['wordpress', 'fa-brands fa-wordpress'],
	['copy', 'fas fa-link'],
	['tumblr', 'fab fa-tumblr'],
	['reddit', 'fab fa-reddit-alien'],
	['digg', 'fab fa-digg'],
	['evernote', 'fab fa-evernote'],
	['flipboard', 'fab fa-flipboard'],
	['mix', 'fab fa-mix'],
	['buffer', 'fab fa-buffer'],
	['weibo', 'fab fa-weibo'],
	['xing', 'fab fa-xing'],
	['renren', 'fab fa-renren'],
	['odnoklassniki', 'fab fa-odnoklassniki'],

	['sms', 'fas fa-sms'],
	['skype', 'fab fa-skype'],
	['telegram', 'fab fa-telegram-plane'],
	['viber', 'fab fa-viber'],
	['whatsapp', 'fab fa-whatsapp'],
	['wechat', 'fab fa-weixin'],
	['line', 'fab fa-line']
];
export const iconColorList = [
	['facebook', '#1877f2'],
	['twitter', '#1da1f2'],
	['linkedin', '#0a66c2'],
	['pinterest', '#bd081c'],
	['blogger', '#fc4f08'],
	['wordpress', '#0073aa'],
	['copy', '#555'],
	['tumblr', '#35465d'],
	['reddit', '#ff4500'],
	['digg', '#1b1a19'],
	['evernote', '#00aa0f'],
	['flipboard', '#f52828'],
	['mix', '#ff8226'],
	['buffer', '#000'],
	['weibo', '#df152c'],
	['xing', '#00a82d'],
	['renren', '#0259a0'],
	['odnoklassniki', '#f68b25'],

	['sms', '#000'],
	['skype', '#00aff0'],
	['telegram', '#0088cc'],
	['viber', '#794f9b'],
	['whatsapp', '#25d366'],
	['wechat', '#09b83e'],
	['line', '#06c755']
];
export const isUpIconList = [
	['facebook', false],
	['twitter', false],
	['linkedin', false],
	['pinterest', false],
	['blogger', false],
	['wordpress', false],
	['copy', false],
	['tumblr', false],
	['reddit', false],
	['digg', false],
	['evernote', false],
	['flipboard', false],
	['mix', false],
	['buffer', false],
	['weibo', false],
	['xing', false],
	['renren', false],
	['odnoklassniki', false],

	['sms', false],
	['skype', false],
	['telegram', false],
	['viber', false],
	['whatsapp', false],
	['line', false],

	['livejournal', true],
	['pocket', true],
	['instapaper', true],
	['meneame', true],
	['baidu', true],
	['vkontakte', true],
	['moimir', true],
	['surfingbird', true],
	['liveinternet', true]
];


export const toolTipPresets = [
	{
		label: "Default",
		value: "default",
		img: socialShare1,
		height: "auto",
		width: "160px"
	},
	{
		label: "Theme One",
		value: "theme1",
		img: socialShare6,
		height: "auto",
		width: "160px"
	},
	{
		label: "Theme Two",
		value: "theme2",
		img: socialShare2,
		height: "auto",
		width: "160px"
	},
	{
		label: "Theme Three",
		value: "theme3",
		img: socialShare3,
		height: "auto",
		width: "160px"
	}
];
