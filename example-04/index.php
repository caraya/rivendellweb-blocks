<?php

/**
 * Plugin Name: Gutenberg Examples Inner Blocks ESNext
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: This is a plugin demonstrating how to use nested and inner blocks in the Gutenberg editor.
 * Version: 1.1.0
 * Author: the Gutenberg Team
 *
 * @package rivendellweb-blocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 */
function gutenberg_examples_06_esnext_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	// automatically load dependencies and version
	$asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

	// register script
	wp_register_script(
		'rivendellweb-blocks-example-04',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	// register block type
	register_block_type(
		'rivendellweb-blocks/example-04',
		[
			'editor_script' => 'rivendellweb-blocks-example-04',
		]
	);

}
add_action( 'init', 'gutenberg_examples_06_esnext_register_block' );
