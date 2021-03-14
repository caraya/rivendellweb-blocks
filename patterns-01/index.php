<?php
/**
 * Registers a new category for patterns
 */
function rivendellweb_register_block_categories() {
	if ( class_exists( 'WP_Block_Patterns_Registry' ) ) {

		register_block_pattern_category(
			'rivendellweb',
			array( 'label' => __(
				'Rivendellweb Patterns',
				'Rivendellweb Patterns',
				'textdomain' ) )
		);

	}
}
add_action( 'init', 'rivendellweb_register_block_categories' );



function rivendellweb_register_block_patterns() {
	if ( class_exists( 'WP_Block_Patterns_Registry' ) ) {

		register_block_pattern(
			'rivendellweb/video-text',
			array(
				'title'       => __( 'Video with text description', 'textdomain' ),
				'description' => __( 'A Youtube video with text to the right in a two column layout.', 'Block pattern description', 'textdomain' ),
				'content'     => "<!-- wp:columns -->\n<div class=\"wp-block-columns\"><!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:embed {\"providerNameSlug\":\"youtube\",\"responsive\":true} /--></div>\n<!-- /wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:paragraph -->\n<p>The idea is to have text and a video</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns -->\n\n<!-- wp:paragraph -->\n<p>The text continues after the video and the text</p>\n<!-- /wp:paragraph -->",
				'categories'  => array( 'rivendellweb' ),
			)
		);

	}

}
add_action( 'init', 'rivendellweb_register_block_patterns' );
