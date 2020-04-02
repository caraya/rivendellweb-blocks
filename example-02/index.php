<?php
/**
 * Plugin Name: Example 02
 * Plugin URI: https://github.com/caraya/rivendellweb-blocks
 * Description: static content with external stylesheets.
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
function rivendellweb_blocks_example_02_load_textdomain() {
	load_plugin_textdomain( 'rivendellweb-blocks', false, basename( __DIR__ ) . '/languages' );
}
add_action( 'init', 'rivendellweb_blocks_example_02_load_textdomain' );

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function rivendellweb_blocks_example_02_register_block() {
	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	// Block script
	wp_register_script(
		'rivendellweb-blocks-example-02',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	// The editor styles override the default styles set below
	wp_register_style(
		'rivendellweb-blocks-example-02-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	// Default styles
	wp_register_style(
		'rivendellweb-blocks-example-02',
		plugins_url( 'style.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	register_block_type( 'rivendellweb-blocks/example-02-stylesheets',
		array(
			'style' => 'rivendellweb-blocks-example-02',
			'editor_script' => 'rivendellweb-blocks-example-02',
			'editor_style' => 'rivendellweb-blocks-example-02-editor',
		)
	);

  if ( function_exists( 'wp_set_script_translations' ) ) {
    /**
     * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
     * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
     * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
     */
    wp_set_script_translations( 'rivendellweb-blocks-example-02', 'rivendellweb-blocks' );
  }

}
add_action( 'init', 'rivendellweb_blocks_example_02_register_block' );
