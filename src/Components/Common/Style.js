import { getBackgroundCSS, getBorderCSS, getIconCSS, getShadowCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { socials, alignment, background, size, theme, padding, margin, border, shadow,
		direction = '', transform = '', gap = '', positionType, isBackend, positionOption = {} } = attributes;

	const { top, bottom, left, right } = positionOption;

	const isPremium = bssbIsPipeChecker;

	const mainSl = `#${id}`;
	const UlSl = `${mainSl} ul.bssbSocialShare`;
	const liSl = `${mainSl} ul.bssbSocialShare li.icon`;
	const labelSl = `${mainSl} ul.bssbSocialShare li p`;
	const IconHoverSl = `${mainSl} ul.bssbSocialShare li:hover`;
	const OverlaySl = `.wp-block-bssb-social-share`;

	return <>
		<style dangerouslySetInnerHTML={{
			__html: `
			${mainSl}{
				text-align: ${alignment};
			}
			${isPremium === false ? `
				${OverlaySl}{
				   position: relative;
				}
				`: ``}
			
			${theme === 'theme5' ? `
				${liSl}{
				width: auto;
				}
				${UlSl}{
				 align-items: stretch !important;
				}
				` : `
				${liSl}{
					width: calc( ${size} + ${padding} + ${padding} );
				}
			`}
			${liSl}{
				font-size: ${size};
				${getBackgroundCSS(background)}
				height: calc( ${size} + ${padding} + ${padding} );
				${getBorderCSS(border)}
				box-shadow: ${getShadowCSS(shadow)};
			}
            ${UlSl}{
			   flex-direction: ${direction};
			   row-gap: ${gap};
			}
			${!isBackend ? `		
				${UlSl}{
			        ${positionType == 'absolute' || positionType == 'fixed' ? `
					    position: ${positionType};
		                top: ${top || 'auto'};
		                left: ${left || 'auto'};
		                right: ${right || 'auto'};
		                bottom: ${bottom || 'auto'};
					}
					` :
						`
					position : ${positionType} ;
			        `}
			       }
					` : ``

			}
			
			${IconHoverSl}{
			  transform: translateY(-${transform});
			}
			${direction == 'row' ? `
				${liSl}{
				  margin: 0 calc( ${margin} / 2 );
			    }
				` : `
                ${liSl}{
				  margin: calc( ${margin} / 2 ) 0;
			    }
			`}
			
			${liSl} img{
				width: ${size};
			}
			`.replace(/\s+/g, ' ')
		}} />

		<style>
			{socials?.map((item, index) => `
		     	${labelSl}{
			       ${getIconCSS(item?.icon)}
				   padding: 0px 15px 0px 0px;
			    }
				${liSl}-${index} i{
					${getIconCSS(item?.icon)}
					font-size: inherit;
				}`.replace(/\s+/g, ' ')
			)}
		</style>
	</>
}
export default Style;