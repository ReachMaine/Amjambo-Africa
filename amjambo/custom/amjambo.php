<?php /* custom programing for Amjambo Africa */

if ( !function_exists('amjam_get_related_post_by_author') ){
  function amjam_get_related_post_by_author() {
    $post_id = get_the_ID();
    $authID = get_the_author_meta('ID');
    $related_posts = new WP_Query( array(
  		'author' =>  $authID,
  		'post_type'      => 'post',
  		'posts_per_page' => '4',
  		'post__not_in'   => array( $post_id ),
  	) );
    if ( $related_posts->have_posts() ) {
  		return $related_posts;
  	} else {
  		return false;
  	}
  } // end function
} // end if exists
