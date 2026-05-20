import { getBackgroundCSS, getBorderCSS, getIconCSS, getShadowCSS } from '../../../../bpl-tools/utils/getCSS';

const sanitizeCSSValue = (val) => {
	if (!val) return '';
	const str = String(val);
	const regex = new RegExp('^[\\w\\s%.,#()\\-+/]+$');
	if (regex.test(str)) {
		return str;
	}
	return '';
};

const Style = ({ attributes, id }) => {
	const { socials, alignment, background, size, padding, margin, border, shadow,
		direction = '', transform = '', hoverBorder = {}, gap = '', hoverBackground = {}, positionType, isBackend, hoverIconColor = "", positionOption = {} } = attributes;

	const { top, bottom, left, right } = positionOption;

	const mainSl = `#${id}`;
	const UlSl = `${mainSl} ul.bssbSocialShare`;
	const IconSl = `${mainSl} ul.bssbSocialShare li i:hover`;
	const liSl = `${mainSl} ul.bssbSocialShare li.icon`;
	const hoverliSl = `${mainSl} ul.bssbSocialShare li.icon:hover`;
	const labelSl = `${mainSl} ul.bssbSocialShare li p`;
	const IconHoverSl = `${mainSl} ul.bssbSocialShare li:hover`;

	return <>
		<style dangerouslySetInnerHTML={{
			__html: `
			${mainSl}{
				text-align: ${sanitizeCSSValue(alignment)};
			}
			
			${liSl}{
				width: calc( ${sanitizeCSSValue(size)} + ${sanitizeCSSValue(padding)} + ${sanitizeCSSValue(padding)} );
			}

			${liSl}{
				font-size: ${sanitizeCSSValue(size)};
				${getBackgroundCSS(background)}
				height: calc( ${sanitizeCSSValue(size)} + ${sanitizeCSSValue(padding)} + ${sanitizeCSSValue(padding)} );
				${getBorderCSS(border)}
				box-shadow: ${getShadowCSS(shadow)};
			}
			${hoverliSl}{
			    ${getBackgroundCSS(hoverBackground)};
				${getBorderCSS(hoverBorder)}
			}
            ${UlSl}{
			   flex-direction: ${sanitizeCSSValue(direction)};
			   row-gap: ${sanitizeCSSValue(gap)};
			}
			${IconSl}{
			  color: ${sanitizeCSSValue(hoverIconColor)} !important;  
			}
			${!isBackend ? `		
				${UlSl}{
			        ${positionType == 'absolute' || positionType == 'fixed' ? `
					    position: ${sanitizeCSSValue(positionType)};
		                top: ${sanitizeCSSValue(top || 'auto')};
		                left: ${sanitizeCSSValue(left || 'auto')};
		                right: ${sanitizeCSSValue(right || 'auto')};
		                bottom: ${sanitizeCSSValue(bottom || 'auto')};
					}
					` :
						`
					position : ${sanitizeCSSValue(positionType)} ;
			        `}
			       }
					` : ``

				}
			
			${IconHoverSl}{
			  transform: translateY(-${sanitizeCSSValue(transform)});
			}
			${direction == 'row' ? `
				${liSl}{
				  margin: 0 calc( ${sanitizeCSSValue(margin)} / 2 );
			    }
				` : `
                ${liSl}{
				  margin: calc( ${sanitizeCSSValue(margin)} / 2 ) 0;
			    }
			`}
			
			${liSl} img{
				width: ${sanitizeCSSValue(size)};
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