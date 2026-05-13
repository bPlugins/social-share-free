import { useState, useEffect } from 'react';
import { tabController } from '../../../../bpl-tools/utils/functions';
import Settings from './Settings/Settings';
import Style from '../Common/Style';
import SocialShare from './SocialShare';
import { useBlockProps } from '@wordpress/block-editor';
import { withSelect } from "@wordpress/data";
import ClipBoard from '../../shortcode/CopyShortcode';



const Edit = props => {
	const { attributes, setAttributes, clientId, isSelected, postType, postId } = props;
	const blockProps = useBlockProps();

	useEffect(() => tabController(), [isSelected]); 

	const [activeIndex, setActiveIndex] = useState(0);

	const id = `bssbSocialShare-${clientId}`;

	return <>
		<Settings attributes={attributes} setAttributes={setAttributes} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>

		<div {...blockProps} id={id}>
			<Style  attributes={{ ...attributes, isBackend: true }} id={id} />
			<div>
				{postType == "social_share_cpt" && (
					<ClipBoard shortcode={`[social-share id=${postId}]`} />
				)}
			</div>
			<SocialShare attributes={attributes} isBackend={true} custom={{ activeIndex, setActiveIndex }} />
		</div>
	</>;
};
export default withSelect((select) => {
	const { getDeviceType, getCurrentPostId, getCurrentPostType } =
		select("core/editor");

	return {
		device: getDeviceType ? getDeviceType()?.toLowerCase() : "desktop",
		postType: getCurrentPostType(),
		postId: getCurrentPostId(),
	};
})(Edit); 