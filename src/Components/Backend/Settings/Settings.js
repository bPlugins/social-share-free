import { __ } from '@wordpress/i18n';
import { AlignmentToolbar, BlockControls, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow,  ToggleControl, Button, Dashicon, __experimentalUnitControl as UnitControl , TabPanel, SelectControl } from '@wordpress/components';
import { produce } from 'immer';

import { Label, Background, BBlocksAds, Notice, HelpPanel, IconControl, InlineDetailMediaUpload } from '../../../../../bpl-tools/Components';
import { BorderControl, ShadowControl } from '../../../../../bpl-tools/Components/Deprecated';
import { gearIcon } from '../../../../../bpl-tools/utils/icons';
import { pxUnit, perUnit, emUnit } from '../../../../../bpl-tools/utils/options';
import { primaryColor } from '../../../../../bpl-tools/utils/data';

import { themes, networkTypes, socialNetworks, mobileNetworks, iconClassList, iconColorList, isUpIconList, toolTipPresets, generalStyleTabs } from '../../../utils/options';
import { compareAndReturn } from '../../../utils/functions';
import BlockPreview from '../../../utils/panel/BlockPreview';
import AdvertiseCard from "../../../../../bpl-tools/ProControls/AdvertiseCard";



const Settings = ({ attributes, setAttributes, activeIndex, setActiveIndex }) => {
	const { socials, alignment, direction = '', theme, background, size, padding, margin, border, shadow, gap = '' } = attributes || {};

	const pricingUrl = 'edit.php?post_type=social_share_cpt&page=social_share_Dashboard#/pricing';

	const addSocial = () => {
		setAttributes({
			socials: [...socials, {
				networkType: 'socialNetworks',
				network: 'facebook',
				isUpIcon: false,
				icon: { class: 'fab fa-facebook-f', color: '#1877f2' },
				upIcon: { id: null, url: '', alt: '', title: '' }
			}]
		});
		setActiveIndex(socials.length);
	}

	const updateSocial = (type, val) => {
		const newSocials = produce(socials, draft => {
			draft[activeIndex][type] = val;
		});

		setAttributes({ socials: newSocials });
	}

	const updateSocialByParams = (params) => {
		const newSocials = produce(socials, draft => {
			for (const param of params) {
				const type = param[0];
				const value = param[1];
				const otherType = param?.[2];

				if (otherType) {
					draft[activeIndex][type][otherType] = value;
				} else {
					draft[activeIndex][type] = value;
				}
			}
		});

		setAttributes({ socials: newSocials });
	}

	const updateAllSocial = (type, val, otherType = false) => {
		const newSocials = socials.map(social => {
			if (otherType) {
				return {
					...social,
					[type]: {
						...social[type],
						[otherType]: val
					}
				};
			} else {
				return {
					...social,
					[type]: typeof val === 'object' ? { ...val } : val
				};
			}
		});

		setAttributes({ socials: newSocials });
	};


	const duplicateSocial = e => {
		e.preventDefault();

		setAttributes({ socials: [...socials.slice(0, activeIndex), { ...socials[activeIndex] }, ...socials.slice(activeIndex)] });

		setActiveIndex(activeIndex + 1);
	}

	const removeSocial = e => {
		e.preventDefault();

		setAttributes({ socials: [...socials.slice(0, activeIndex), ...socials.slice(activeIndex + 1)] });

		setActiveIndex(0 === activeIndex ? 0 : activeIndex - 1);
	}

	const { networkType = '', network = '', isUpIcon = false, icon = {}, upIcon = {} } = socials[activeIndex] || {};

	const primaryColors = '#4527a4';

	const gradientValue = 'linear-gradient(135deg, #4527a4, #8344c5)';



	return <>
		<InspectorControls>
			<div className='bPlInspectorInfo'>
				<BBlocksAds />
			</div>
			<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs}>{tab => <>
				{'general' === tab.name && <>
					<HelpPanel slug='b-social-share' docsLink='https://bblockswp.com/docs/social-share-block' />

					<PanelBody className='bPlPanelBody' title={__('Theme Switch', 'b-social-share')}>
						<PanelRow>
							<Label className=''>{__('Theme :', 'b-social-share')}</Label>
							<SelectControl
								value={theme}
								onChange={val => {
									setAttributes({ theme: val });
									'default' === val && (
										setAttributes({
											background: { type: 'solid', color: '#0000' },
											border: { width: '0', color: '#0000' },
											transform: "0px",
											shadow: { hOffset: "0px", vOffset: "0px" }
										}),
										updateAllSocial('icon', primaryColors, 'color')
									);

									'theme1' === val && (
										setAttributes({
											background: { type: 'gradient', gradient: gradientValue },
											border: { width: '0', color: '#0000' },
											transform: "0px",
											shadow: { hOffset: "0px", vOffset: "0px" }
										}),
										updateAllSocial('icon', '#fff', 'color')
									);

									'theme2' === val && (
										setAttributes({
											background: { type: 'solid', color: '#0000' },
											border: { width: '2px', color: primaryColors },
											transform: "0px",
											shadow: { hOffset: "0px", vOffset: "0px" }
										}),
										updateAllSocial('icon', primaryColors, 'color')
									);

									'theme3' === val && (
										setAttributes({
											background: { type: 'gradient', gradient: gradientValue },
											border: { width: '0', radius: "5%", color: '#0000' },
											transform: "0px",
											shadow: { color: "rgba(115, 121, 215, 1)", hOffset: "1px", vOffset: "3px" }
										}),
										updateAllSocial('icon', '#fff', 'color')
									);
								}} options={themes} />
						</PanelRow>
						<SelectControl
							label={__("Layout Direction", "b-social-share")}
							value={direction}
							options={[
								{ label: __("Row", "b-social-share"), value: "row" },
								{ label: __("Column", "b-social-share"), value: "column" },
							]}
							onChange={(value) => setAttributes({ direction: value })}
						/>
						{
							direction === 'column' && <UnitControl className='mt20' label={__('Row Gap:', 'b-social-share')} labelPosition='left' value={gap} onChange={val => setAttributes({ gap: val })} units={[pxUnit(), perUnit(), emUnit()]} />
						}
					</PanelBody>

					<PanelBody className='bPlPanelBody addRemoveItems editItem' title={__('Add or Remove socials', 'b-social-share')}>
						{null !== activeIndex && <>
							<h3 className='bplItemTitle'>{__(`Social No ${activeIndex + 1}:`, 'b-social-share')}</h3>

							<PanelRow>
								<Label className=''>{__('Network Type:', 'b-social-share')}</Label>
								<SelectControl value={networkType} onChange={val => {
									const params = [
										['networkType', val],
										['network', 'mobileMessenger' === val ? 'sms' : 'facebook'],
										['isUpIcon', false],
										['icon', 'mobileMessenger' === val ? 'fas fa-sms' : 'fab fa-facebook-f', 'class'],
										['icon', 'mobileMessenger' === val ? '#000' : '#1877f2', 'color']
									];
									updateSocialByParams(params);
								}} options={networkTypes} />
							</PanelRow>

							<PanelRow>
								<Label className=''>{__('Network:', 'b-social-share')}</Label>
								<SelectControl value={network} onChange={val => {
									const params = [
										['network', val],
										['icon', compareAndReturn(val, iconClassList), 'class'],
										['icon', compareAndReturn(val, iconColorList), 'color'],
										['isUpIcon', compareAndReturn(val, isUpIconList)]
									];
									updateSocialByParams(params);
								}} options={'mobileMessenger' === networkType ? mobileNetworks : socialNetworks} />
							</PanelRow>

							<ToggleControl className='mt20' label={__('Upload Icon?', 'b-social-share')} checked={isUpIcon} onChange={val => updateSocial('isUpIcon', val)} />

							{isUpIcon ? <>
								<Label>{__('Icon:', 'b-social-share')}</Label>
								<InlineDetailMediaUpload className='mt10' value={upIcon} onChange={val => updateSocial('upIcon', val)} placeholder={__('Enter Icon URL', 'b-social-share')} />
							</> :
								<>
									<IconControl label={__('Icon:', 'b-social-share')} value={icon} onChange={val => updateSocial('icon', val)} defaults={{ class: 'fab fa-facebook-f', color: primaryColor }} isSize={false} />
								</>
							}

							<PanelRow className='itemAction mt20 mb15'>
								{1 < socials?.length && <Button className='removeItem' label={__('Remove', 'b-social-share')} onClick={removeSocial} ><Dashicon icon='no' />{__('Remove', 'b-social-share')}</Button>}

								<Button className='duplicateItem' label={__('Duplicate', 'b-social-share')} onClick={duplicateSocial} >{gearIcon}{__('Duplicate', 'b-social-share')}</Button>
							</PanelRow>
						</>}

						<div className='addItem'>
							<Button label={__('Add New Social', 'b-social-share')} onClick={addSocial}><Dashicon icon='plus' />{__('Add New Social', 'b-social-share')}</Button>
						</div>
					</PanelBody>

					<Notice status='premium' isIcon={true}>{__('Premium Themes, Floating Social Share Button, and Static Total Share Counter features are available in the Premium version.', 'b-social-share')}</Notice>
					{/* advertiseCard */}
					<AdvertiseCard planLink={pricingUrl} />
				</>}

				{'style' === tab.name && <>
					<PanelBody className='bPlPanelBody' title={__('Social Icon Style', 'b-social-share')}  >

						<Background label={__('Background:', 'b-social-share')} value={background} onChange={val => setAttributes({ background: val })} />
						<Notice status='premium' isIcon={true}>{__('Premium Icon Color and Hover Background features are available in the Premium version.', 'b-social-share')}</Notice>

						<UnitControl className='mt20' label={__('Size:', 'b-social-share')} labelPosition='left' value={size} onChange={val => setAttributes({ size: val })} units={[pxUnit(), perUnit(), emUnit()]} />

						<UnitControl className='mt20' label={__('Padding:', 'b-social-share')} labelPosition='left' value={padding} onChange={val => setAttributes({ padding: val })} units={[pxUnit(), perUnit(), emUnit()]} />

						<Notice status='premium' isIcon={true}>{__('Social Share Label is available in the Premium version.', 'b-social-share')}</Notice>

						<UnitControl className='mt20' label={__('Space Between:', 'b-social-share')} labelPosition='left' value={margin} onChange={val => setAttributes({ margin: val })} units={[pxUnit(), perUnit(), emUnit()]} />

						<BorderControl label={__('Border:', 'b-social-share')} value={border} onChange={val => setAttributes({ border: val })} defaults={{ radius: '50%' }} />
						<Notice status='premium' isIcon={true}>{__('Premium Hover Animation and Hover Border features are available in the Premium version.', 'b-social-share')}</Notice>

						<ShadowControl label={__('Shadow:', 'b-social-share')} value={shadow} onChange={val => setAttributes({ shadow: val })} />
					</PanelBody>


				</>}
			</>}</TabPanel>


		</InspectorControls>

		<BlockControls>
			<BlockPreview
				options={toolTipPresets}

				value={theme}
				onChange={val => {
					setAttributes({ theme: val });
					'default' === val && (
						setAttributes({
							background: { type: 'solid', color: '#0000' },
							border: { width: '0', color: '#0000' },
							transform: "0px",
							shadow: { hOffset: "0px", vOffset: "0px" }
						}),
						updateAllSocial('icon', primaryColors, 'color')
					);

					'theme1' === val && (
						setAttributes({
							background: { type: 'gradient', gradient: gradientValue },
							border: { width: '0', color: '#0000' },
							transform: "0px",
							shadow: { hOffset: "0px", vOffset: "0px" }
						}),
						updateAllSocial('icon', '#fff', 'color')
					);

					'theme2' === val && (
						setAttributes({
							background: { type: 'solid', color: '#0000' },
							border: { width: '2px', color: primaryColors },
							transform: "0px",
							shadow: { hOffset: "0px", vOffset: "0px" }
						}),
						updateAllSocial('icon', primaryColors, 'color')
					);

					'theme3' === val && (
						setAttributes({
							background: { type: 'gradient', gradient: gradientValue },
							border: { width: '0', radius: "5%", color: '#0000' },
							transform: "0px",
							shadow: { color: "rgba(115, 121, 215, 1)", hOffset: "1px", vOffset: "3px" }
						}),
						updateAllSocial('icon', '#fff', 'color')
					);
				}}
			/>
		</BlockControls>

		<BlockControls>
			<AlignmentToolbar value={alignment} onChange={val => setAttributes({ alignment: val })} describedBy={__('Social Icons Alignment', 'b-social-share')} alignmentControls={[
				{ title: __('Social Icons in left', 'b-social-share'), align: 'left', icon: 'align-left' },
				{ title: __('Social Icons in center', 'b-social-share'), align: 'center', icon: 'align-center' },
				{ title: __('Social Icons in right', 'b-social-share'), align: 'right', icon: 'align-right' }
			]} />
		</BlockControls>
	</>;
};

export default Settings;
