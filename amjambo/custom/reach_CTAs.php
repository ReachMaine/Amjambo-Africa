<?php /* Call to actions  top & bottom... */
/*  add widget areas */
function reach_widgets_init() {
  register_sidebar(
    array(
 		'name'          => __( 'header widget', 'extra' ),
 		'id'            => 'reach-header-widget',
 		'before_widget' => '<div id="%1$s" class="%2$s widget">',
 		'after_widget'  => '</div> <!-- end .et_pb_widget -->',
 		'before_title'  => '',
 		'after_title'   => '',
    )
  );
/*   register_sidebar(
      array(
           'name' => __( 'Under Content ', 'be-themes' ),
           'id'   => 'reach-under-content',
           'description'   => __( 'Widget area under content area', 'be-themes' ),
           'before_widget' => '<div id="%1$s" class="et_pb_widget %2$s">',
        		'after_widget'  => '</div> <!-- end .et_pb_widget -->',
        		'before_title'  => '<h4 class="widgettitle">',
        		'after_title'   => '</h4>',
      )
    );
  register_sidebar(
        array(
         'name' => __( 'Bottom Call to Action ', 'be-themes' ),
         'id'   => 'reach-bottom-cta',
         'description'   => __( 'Widget area (above footer)', 'be-themes' ),
         'before_widget' => '<div class="%2$s widget">',
         'after_widget'  => '</div>',
         'before_title'  => '<h6>',
         'after_title'   => '</h6>',
      )
  ); */
}
add_action( 'widgets_init', 'reach_widgets_init' );
