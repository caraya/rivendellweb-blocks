<?php
	// This is the code we copied from Gutenberg
	$video_text_content = <<<END
	<!-- wp:columns -->
	<div class="wp-block-columns"><!-- wp:column -->
	<div class="wp-block-column"><!-- wp:embed {"providerNameSlug":"youtube","responsive":true} /--></div>
	<!-- /wp:column -->

	<!-- wp:column -->
	<div class="wp-block-column"><!-- wp:paragraph -->
	<p>The idea is to have text and a video</p>
	<!-- /wp:paragraph --></div>
	<!-- /wp:column --></div>
	<!-- /wp:columns -->

	<!-- wp:paragraph -->
	<p>The text continues after the video and the text</p>
	<!-- /wp:paragraph -->
	END;

	// We encode the Gutenberg code to JSON so we get a string
	$converted_json = json_encode($video_text_content);
	// And then we make sure that we convert any instance of <\/ to just /
	$template_string = preg_replace('(\\\/)','/',$converted_json);
	// Echo the string to verify it works :)
	echo($template_string);
