import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import Edit from './edit';
import metadata from './block.json';

registerBlockType( metadata.name, {
	
	edit: Edit,
	save: () => null, //we are not saving in the save() since we want the content to be dynamic rendered(server-side)
    
} );
