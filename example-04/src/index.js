import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

registerBlockType( 'rivendellweb-blocks/example-04', {
	title: 'Example: Inner Blocks (ESNext)',
	category: 'layout',
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
