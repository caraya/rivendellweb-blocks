<?php

/**
 * Plugin Name: Gutenberg Examples Controls EsNext
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: This is a plugin demonstrating how to register new blocks for the Gutenberg editor.
 * Version: 1.1.0
 * Author: the Gutenberg Team
 *
 * @package rivendellweb-blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Load all translations for our plugin from the MO file.
*/
add_action( 'init', 'rivendellweb_blocks_load_textdomain' );

function rivendellweb_blocks_load_textdomain() {
	load_plugin_textdomain( 'rivendellweb-blocks', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
add_action( 'init', 'rivendellweb_blocks_register_block' );

function rivendellweb_blocks_register_block() {

	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	wp_register_script(
		'rivendellweb-blocks-example-07',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	// wp_register_style(
	// 	'rivendellweb-blocks-example-07-editor',
	// 	plugins_url( 'editor.css', __FILE__ ),
	// 	array( 'wp-edit-blocks' ),
	// 	filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	// );

	// wp_register_style(
	// 	'rivendellweb-blocks-example-07',
	// 	plugins_url( 'style.css', __FILE__ ),
	// 	array( ),
	// 	filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	// );

	register_block_type( 'rivendellweb-blocks/example-07', array(
		// 'style' => 'rivendellweb-blocks-example-07',
		// 'editor_style' => 'rivendellweb-blocks-example-07-editor',
		'editor_script' => 'rivendellweb-blocks-example-07',
	) );

  if ( function_exists( 'wp_set_script_translations' ) ) {
    /**
     * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
     * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
     * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
     */
    wp_set_script_translations( 'rivendellweb-blocks-example-07', 'gutenberg-examples' );
  }

}
