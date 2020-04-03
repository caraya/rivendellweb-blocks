import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

// Register block
registerBlockType( 'rivendellweb-blocks/example-04', {
	title: 'Example 04',
	category: 'rivendellweb-blocks',
	icon: 'translation',
	edit: ( { className } ) => {
		return (
			<div className={ className }>
				<InnerBlocks />
			</div>
		);
	},
	save: ( { className } ) => {
		return (
			<div className={ className }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
