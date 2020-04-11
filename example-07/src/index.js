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

// import {
//   TextControl,
//   ToggleControl,
//   Panel,
//   PanelBody,
//   PanelRow,
// } from '@wordpress/components'


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
    textColor: {
      type: 'string',
      default: '#000',
    },
    backgroundColor: {
      type: 'string',
      default: '#fff',
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
            textColor,
            backgroundColor,
        },
        className,
    } = props;

    const onChangeContent = ( newContent ) => {
      props.setAttributes( { content: newContent } );
    };

    const onChangeAlignment = ( newAlignment ) => {
      props.setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } );
    };

    const onChangeTextColor = ( newColor ) => {
      props.setAttributes( { color: newColor } )
    };

    const onChangeBackgroundColor = ( newColor ) => {
      props.setAttributes( { backgroundColor: newColor } )
    }

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


                  <ColorPicker
                    color= { textColor }/>

                </PanelBody>

                <PanelBody
                  title = { __( 'Background Color', 'rivendellweb-blocks') }
                  initialOpen = { false }>

                  <ColorPicker
                  color = { backgroundColor }/>

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
