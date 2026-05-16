import { getBackgroundCSS, getBorderCSS, getIconCSS, getShadowCSS, getTypoCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { socials, alignment, background, size, padding, margin, border, shadow,
		direction = '', transform = '', hoverBorder = {}, gap = '', hoverBackground = {}, positionType, isBackend, hoverIconColor = "", counterTypo = {}, counterColor = '', positionOption = {} } = attributes;

	const { top, bottom, left, right } = positionOption;


	const mainSl = `#${id}`;
	const UlSl = `${mainSl} ul.bssbSocialShare`;
	const IconSl = `${mainSl} ul.bssbSocialShare li i:hover`;
	const counterTitle = `${mainSl} .bss-counter-title`;
	const liSl = `${mainSl} ul.bssbSocialShare li.icon`;
	const hoverliSl = `${mainSl} ul.bssbSocialShare li.icon:hover`;
	const labelSl = `${mainSl} ul.bssbSocialShare li p`;
	const IconHoverSl = `${mainSl} ul.bssbSocialShare li:hover`;

	return <>
		<style dangerouslySetInnerHTML={{
			__html: `
			${getTypoCSS('', counterTypo)?.googleFontLink}
			${getTypoCSS(`${counterTitle}`, counterTypo)?.styles}
			${mainSl}{
				text-align: ${alignment};
			}
			
			${liSl}{
				width: calc( ${size} + ${padding} + ${padding} );
			}
			${counterTitle}{
			  color: ${counterColor};
			}
			${liSl}{
				font-size: ${size};
				${getBackgroundCSS(background)}
				height: calc( ${size} + ${padding} + ${padding} );
				${getBorderCSS(border)}
				box-shadow: ${getShadowCSS(shadow)};
			}
			${hoverliSl}{
			    ${getBackgroundCSS(hoverBackground)};
				${getBorderCSS(hoverBorder)}
			}
            ${UlSl}{
			   flex-direction: ${direction};
			   row-gap: ${gap};
			}
			${IconSl}{
			  color: ${hoverIconColor} !important;  
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