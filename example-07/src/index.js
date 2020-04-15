import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import {
	RichText,
	AlignmentToolbar,
  BlockControls,
  InspectorControls,
} from '@wordpress/block-editor';

registerBlockType( 'rivendellweb-blocks/example-07', {
	title: __( 'Example 07', 'rivendellweb-blocks' ),
	icon: 'smiley',
	category: 'rivendellweb-blocks',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
		alignment: {
			type: 'string',
			default: 'none',
		},
	},
	example: {
		attributes: {
			content: __( 'Hello world' ),
			alignment: 'right',
		},
	},
	edit: ( props ) => {
		const {
			attributes: { content, alignment },
			className,
		} = props;

		const onChangeContent = ( newContent ) => {
			props.setAttributes( { content: newContent } );
		};

		const onChangeAlignment = ( newAlignment ) => {
			props.setAttributes( {
				alignment: newAlignment === undefined ? 'none' : newAlignment,
			} );
		};

		return (
			<div>
				{
					<BlockControls>
						<AlignmentToolbar
							value={ alignment }
							onChange={ onChangeAlignment }
						/>
					</BlockControls>
        }
        {
          <InspectorControls />
        }
				<RichText
					className={ className }
					style={ { textAlign: alignment } }
					tagName="p"
					onChange={ onChangeContent }
					value={ content }
				/>
			</div>
		);
	},
	save: ( props ) => {
		return (
			<RichText.Content
				className={ `gutenberg-examples-align-${ props.attributes.alignment }` }
				tagName="p"
				value={ props.attributes.content }
			/>
		);
	},
} );
