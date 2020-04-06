import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
  RichText,
  AlignmentToolbar,
  BlockControls,
  InspectorControls,
  FontSizePicker,
  withColors,
  PanelColorSettings,
  getColorClassName
} from '@wordpress/block-editor';

import {
  TextControl,
  ToggleControl,
  Panel,
  PanelBody,
  PanelRow,
  ColorPicker
} from '@wordpress/components'

const colorSamples = [
  {
    name: 'Coral',
    slug: 'coral',
    color: '#FF7F50'
  },
  {
    name: 'Lavender',
    slug: 'lavender',
    color: '#E6E6FA'
  },
  {
    name: 'White',
    slug: 'white',
    color: '#ffffff'
  }
];

registerBlockType( 'rivendellweb-blocks/example-07', {
  title: __( 'Example  07', 'rivendellweb-blocks' ),
  icon: 'wordpress',
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
    formColor: { // something
      type: 'string',
    },
    customFormColor: { // customSomething
      type: 'string',
    },
},
example: {
    attributes: {
        content: 'Hello World',
        alignment: 'right',
    },
},
edit: ( props ) => {
    const {
        attributes: {
            content,
            alignment,
        },
        className,
    } = props;

    const onChangeContent = ( newContent ) => {
        props.setAttributes( { content: newContent } );
    };

    const onChangeAlignment = ( newAlignment ) => {
        props.setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } );
    };

    return (
        <div>
            {

            }
            {
                <InspectorControls>
                    <PanelBody
                      title = { __( 'Text Size', 'rivendellweb-blocks') }
                      initialOpen = { true }>

                      <FontSizePicker />
                    </PanelBody>

                    <PanelBody
                      title = { __( 'Text Color', 'rivendellweb-blocks') }
                      initialOpen = { true }>


                      <ColorPicker />

                    </PanelBody>

                    <PanelBody
                      title = { __( 'Background Color', 'rivendellweb-blocks') }
                      initialOpen = { false }>

                      <ColorPicker />

                    </PanelBody>

                </InspectorControls>
            }
            {
                <BlockControls>
                    <AlignmentToolbar
                        value={ alignment }
                        onChange={ onChangeAlignment }
                    />


                </BlockControls>
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
            className={ `rivendellweb-blocks-align-${ props.attributes.alignment }` }
            tagName="p"
            value={ props.attributes.content }
        />
    );
},
} );
