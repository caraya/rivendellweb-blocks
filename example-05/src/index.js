import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

const ALLOWED_BLOCKS = [
  'core/image',
  'core/heading',
  'core/paragraph'
];

registerBlockType( 'rivendellweb-blocks/example-05', {
  title: __('Example 05', 'rivendellweb-blocks'),
	category: 'rivendellweb-blocks',
	icon: 'translation',
  edit: ( { className } ) => {
    return (
      <div className={ className }>
        <InnerBlocks
          allowedBlocks = { ALLOWED_BLOCKS }/>
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
