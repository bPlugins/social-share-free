import '../../style.scss';

const SocialShare = ({ attributes, isBackend = false, custom }) => <ul className='bssbSocialShare'>
	{attributes.socials?.map((item, index) => {
		const { network, isUpIcon, icon, upIcon } = item;
		const isThemeThree = attributes?.theme === 'theme4';
		const isCopy = network === 'copy';

		return <li
			key={index}
			onClick={() => {
				if (network === 'copy' && !isBackend) {
					navigator.clipboard.writeText(window.location.href);
					return;
				}

				if (isBackend) {
					custom.setActiveIndex(index);
				}
			}}
			style={isThemeThree ? { animationDelay: `${index * 0.3}s` } : undefined}
			className={`icon ${attributes?.theme === 'theme4' ? `bss-animation` : ''} icon-${index} ${isBackend && index === custom.activeIndex ? '' : ''}`}
			data-social={network}
			{...(isCopy && {
				'data-copy': 'true',
				'data-tooltip': 'Pro Feature Icon',
			})}
		>

			{isUpIcon ? <img src={upIcon?.url} alt={upIcon?.alt} /> : icon?.class && <i className={icon?.class}></i>}
			{
				attributes?.theme === 'theme5' && attributes?.label === true && <p>{network}</p>
			}

		</li>;
	})}
</ul>;
export default SocialShare;