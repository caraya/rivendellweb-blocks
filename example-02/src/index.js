import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'rivendellweb-blocks/example-02', {
	title: __( 'Example 02', 'rivendellweb-blocks' ),
	icon: 'universal-access-alt',
	category: 'layout',
	example: {},
	edit() {
		return (
			<div>
				<h2>Notice</h2>
				<p>Hello World, step 1 (from the editor).</p>
			</div>
		);
	},
	save() {
		return (
			<div>
				<h2>Notice</h2>
				<p>Hello World, step 1 (from the front end).</p>
			</div>
		);
	},
} );
