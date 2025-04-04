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

// order some categories alphabetically.
// using category meta field
function reach_modify_query_order( $query ) {
if ( ! is_admin() &&  $query->is_main_query() && $query->is_category()  ) {
        $catname = get_query_var("category_name");
        $catterm = get_term_by('slug', $catname, 'category');
        $catid = $catterm->term_id;
        $sortit = get_term_meta($catid, 'alpha_sort', true);
        if ($sortit == "1") {
          $query->set( 'orderby', 'title' );
          $query->set( 'order', 'ASC' );
        }
    }
}
add_action( 'pre_get_posts', 'reach_modify_query_order' );
