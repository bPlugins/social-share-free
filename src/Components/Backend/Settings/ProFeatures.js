import { __ } from '@wordpress/i18n';

import './proFeatures.scss';

const groups = [
	{
		title: __('Share Display', 'b-social-share'),
		items: [
			__('Auto-insert buttons on posts, pages and products', 'b-social-share'),
			__('Share popup and animated fly-ins', 'b-social-share'),
		],
	},
	{
		title: __('Share Analytics', 'b-social-share'),
		items: [
			__('Share trends for 7 / 15 / 30 days', 'b-social-share'),
			__('Top networks and top shared content', 'b-social-share'),
		],
	},
	{
		title: __('Auto Post', 'b-social-share'),
		items: [
			__('Publish new posts to Facebook, LinkedIn, X, Threads, Pinterest, Telegram, Discord, Bluesky & Mastodon', 'b-social-share'),
			__('Rules, schedules, logs and share templates', 'b-social-share'),
		],
	},
];

const ProFeatures = ({ pricingUrl }) => <div className='bssbProFeatures'>
	<div className='bssbProFeatures__top'>
		<span className='bssbProFeatures__badge'>{__('Pro Features', 'b-social-share')}</span>
	</div>

	<h5 className='bssbProFeatures__heading'>{__('11 Premium Blocks', 'b-social-share')}</h5>

	{groups.map(({ title, items }) => <div className='bssbProFeatures__group' key={title}>
		<h5 className='bssbProFeatures__heading'>{title}</h5>
		<ul className='bssbProFeatures__list'>
			{items.map((item) => <li key={item}>{item}</li>)}
		</ul>
	</div>)}

	<a className='bssbProFeatures__button' href={pricingUrl} target='_blank' rel='noopener noreferrer'>
		{__('Unlock All Pro Features', 'b-social-share')}
		<span className='screen-reader-text'>{__('(opens in a new tab)', 'b-social-share')}</span>
	</a>
</div>;

export default ProFeatures;
