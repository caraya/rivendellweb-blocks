import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

const blockStyle = {
	backgroundColor: '#639',
	color: '#fff',
	padding: '20px',
};

registerBlockType( 'rivendellweb-blocks/example-01', {
	title: __( 'Example 01', 'rivendellweb-blocks' ),
	icon: 'universal-access-alt',
	category: 'rivendellweb-blocks',
	example: {},
	edit() {
		return (
			<div style={ blockStyle }>
				<h2>Notice</h2>
				<p>Hello World, step 1 (from the editor).</p>
			</div>
		);
	},
	save() {
		return (
			<div style={ blockStyle }>
				<h2>Notice</h2>
				<p>Hello World, step 1 (from the editor).</p>
			</div>
		);
	},
} );
