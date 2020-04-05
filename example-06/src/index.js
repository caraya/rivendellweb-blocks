import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

const BLOCK_TEMPLATE = [
  [ 'core/image', {} ],
  [ 'core/heading', { placeholder: 'Book Title' } ],
  [ 'core/heading', { placeholder: 'Book Author' } ],
  [ 'core/paragraph', { placeholder: 'Summary' } ],
];

registerBlockType( 'rivendellweb-blocks/example-06', {
  title: __('Example 06', 'rivendellweb-blocks'),
	category: 'rivendellweb-blocks',
	icon: 'translation',
  edit: ( { className } ) => {
    return (
      <div className={ className }>
        <InnerBlocks
        template={ BLOCK_TEMPLATE }
        templateLock="all" />
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
