<?php

/**
 * Plugin Name: Example 05
 * Plugin URI: https://github.com/caraya/rivendellweb-blocks
 * Description: .
 * Version: 0.0.1
 * Author: Carlos Araya
 *
 * @package rivendellweb-blocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 */
function rivendellweb_blocks_example_05_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	// automatically load dependencies and version
	$asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

	// register script
	wp_register_script(
		'rivendellweb-blocks-example-05',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	// register block type
	register_block_type(
		'rivendellweb-blocks/example-05',
		[
			'editor_script' => 'rivendellweb-blocks-example-05',
		]
	);

}
add_action( 'init', 'rivendellweb_blocks_example_05_register_block' );
