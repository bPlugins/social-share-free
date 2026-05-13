import '../../style.scss';

const SocialShare = ({ attributes, isBackend = false, custom }) => <ul className='bssbSocialShare'>
	{attributes.socials?.map((item, index) => {
		const { network, isUpIcon, icon, upIcon } = item;

		return <> 
			<li
				key={index}
				onClick={() => {
					if (isBackend) {
						custom.setActiveIndex(index);
					}
				}}
				className={`icon  icon-${index} ${isBackend && index === custom.activeIndex ? '' : ''}`}	
			>

				<a data-social={network}>
					{isUpIcon ? <img src={upIcon?.url} alt={upIcon?.alt} /> : icon?.class && <i className={icon?.class}></i>}
				</a>

			</li>
		</>;
	})}
	
</ul>;
export default SocialShare;