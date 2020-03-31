<?php

/**
 * Plugin Name: Basic Block
 * Plugin URI: https://github.com/WordPress/rivendellweb-blocks
 * Description: Basic block.
 * Version: 0.0.1
 * Author: Carlos Araya
 *
 * @package rivendellweb-blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Load all translations for our plugin from the MO file.
*/
function rivendellweb_blocks_example_01_load_textdomain() {
	load_plugin_textdomain( 'rivendellweb-blocks', false, basename( __DIR__ ) . '/languages' );
}
add_action( 'init', 'rivendellweb_blocks_example_01_load_textdomain' );

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function rivendellweb_blocks_example_01_register_block() {

	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	wp_register_script(
		'rivendellweb-blocks-example-01',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	register_block_type( 'rivendellweb-blocks/example-01', array(
		'editor_script' => 'rivendellweb-blocks-example-01',
	) );

  if ( function_exists( 'wp_set_script_translations' ) ) {
    /**
     * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
     * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
     * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
     */
    wp_set_script_translations( 'rivendellweb-blocks-example-01', 'rivendellweb-blocks' );
  }

}
add_action( 'init', 'rivendellweb_blocks_example_01_register_block' );
