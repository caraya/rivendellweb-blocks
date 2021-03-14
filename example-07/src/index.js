import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

const BLOCKS_TEMPLATE = [
  ['core/heading', {
    'level': 3,
    'placeholder': 'Role'
  }],
  ['core/paragraph'],
  ['core/heading', {
    'level': 3,
    'placeholder':'Responsibilities'
  }],
  ['core/paragraph'],
  ['core/heading', {
    'level': 3,
    'placeholder':'Qualifications'
  }],
  ['core/list'],
  ['core/heading', {
    'level': 3,
    'placeholder': 'Highlights'
  }],
  ['core/paragraph'],
];

registerBlockType( 'rivendellweb-blocks/example-07', {
  title: __('Example 07', 'rivendellweb-blocks'),
	category: 'rivendellweb-blocks',
	icon: 'translation',
  edit: ( { className } ) => {
    return (
      <div className={ className }>
        <InnerBlocks
        template={ BLOCKS_TEMPLATE } />
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
