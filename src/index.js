import { registerBlockType } from '@wordpress/blocks';

import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import './editor.scss';
import { socialShareIcon } from './utils/icons';

registerBlockType(metadata, {
	icon: socialShareIcon,

	// Build in Functions
	edit: Edit,

	save: () => null
});