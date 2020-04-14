import { registerBlockType } from '@wordpress/blocks';
import {
  RichText,
  BlockControls,
  AlignmentToolbar,
	InspectorControls,
	ColorPalette } from '@wordpress/block-editor';

registerBlockType( 'rivendellweb-blocks/example-07', {
	title: 'Example 07',
	icon: 'smiley',
	category: 'layout',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p'
		},
		contentStyle: {
			type: 'object',
			default: {
        color: 'black',
				textAlign: 'left'
			}
		}
	},
	edit: ( props ) => {
		console.log( 'edit-props', props );
		let { attributes: { content, contentStyle }, setAttributes, className } = props;

		const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
		};

		const onChangeAlignment = ( newAlignment ) => {
			let alignmentValue = ( newAlignment === undefined ) ? 'none' : newAlignment;
			setAttributes( {
				contentStyle: {
					color: contentStyle.color,
					textAlign: alignmentValue
				}
			} );
		};

		const onChangeTextColor = ( newColor ) => {
			let newColorValue = ( newColor === undefined ) ? 'none' : newColor;
			setAttributes( {
				contentStyle: {
					color: newColorValue,
					textAlign: contentStyle.textAlign
				}
      } );

		};

		return (
			<div>
				{
					<BlockControls>
						<AlignmentToolbar
							value={ contentStyle.textAlign }
							onChange={ onChangeAlignment }
						/>
					</BlockControls>
				}
				{
					<InspectorControls>
						<ColorPalette // Element Tag for Gutenberg standard colour selector
							onChange={onChangeTextColor} // onChange event callback
						/>
					</InspectorControls>
				}
				<RichText
					tagName="p"
					style={ contentStyle }
					className={ className }
					onChange={ onChangeContent }
					value={ content }
				/>
			</div>
		);
	},
	save: ( props ) => {
		console.log( 'save-props', props );
		return (
			<RichText.Content style={ props.attributes.contentStyle } tagName="p" value={ props.attributes.content } />
		);
	}
} );