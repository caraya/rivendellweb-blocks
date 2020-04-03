import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType( 'rivendellweb-blocks/example-03', {
	title: __( 'Example 03', 'rivendellweb-blocks' ),
	icon: 'universal-access-alt',
	category: 'rivendellweb-blocks',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},
	example: {
		attributes: {
			content: __( 'Hello world' ),
		},
	},
	edit: ( props ) => {
		const {
			attributes: { content },
			setAttributes,
			className,
		} = props;
		const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
		};
		return (
			<RichText
				tagName="p"
				className={ className }
				onChange={ onChangeContent }
				value={ content }
			/>
		);
	},
	save: ( props ) => {
		return (
			<RichText.Content
				tagName="p"
				value={ props.attributes.content } />
		);
	},
} );
