<?php

/**
 * Plugin Name: Rivendellweb Blocks
 * Plugin URI: https://github.com/WordPress/rivendellweb-blocks
 * Description: Rivendellweb blocks collection.
 * Version: 0.0.1
 * Author: Carlos Araya
 *
 * @package rivendellweb-blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}

function rivendellweb_blocks_block_category( $categories, $post ) {
  if ( $post->post_type !== 'post' ) {
      return $categories;
  }
  return array_merge(
    $categories,
    array(
      array(
        'slug' => 'rivendellweb-blocks',
        'title' => __( 'Rivendellweb Blocks', 'rivendellweb-blocks' ),
        'icon'  => 'wordpress',
      ),
    )
  );
}
add_filter( 'block_categories', 'rivendellweb_blocks_block_category', 10, 2);


include 'example-01/index.php';
include 'example-02/index.php';
include 'example-03/index.php';
include 'example-04/index.php';
include 'example-05/index.php';
include 'example-06/index.php';
