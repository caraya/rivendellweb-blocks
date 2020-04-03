import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'rivendellweb-blocks/example-02', {
	title: __( 'Example 02', 'rivendellweb-blocks' ),
	icon: 'universal-access-alt',
	category: 'rivendellweb-blocks',
	example: {},
	edit( { className }) {
		return (
			<div className={ className }>
				<h2>Notice</h2>
				<p>Hello World, step 1 (from the editor).</p>
			</div>
		);
	},
	save( { className }) {
		return (
			<div className={ className }>
				<h2>Notice</h2>
				<p>Hello World, step 1 (from the front end).</p>
			</div>
		);
	},
} );
