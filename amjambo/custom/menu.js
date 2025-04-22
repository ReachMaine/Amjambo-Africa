<script id="dt-collapsable-menu-items">
  jQuery(function ($) {
    $(document).ready(function () {
      $('body ul.et_mobile_menu li.menu-item-has-children, body ul.et_mobile_menu  li.page_item_has_children').append(
        '<span class="mobile-toggle no-smooth-scroll" aria-label="toggle sub menu"><i class="dt-icons dt-open-icon et-pb-icon" >&#x33;</i><i class="dt-icons dt-close-icon et-pb-icon">&#x32;</i></span>',
      );
      $('ul.et_mobile_menu li.menu-item-has-children .mobile-toggle, ul.et_mobile_menu li.page_item_has_children .mobile-toggle').click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent('li').toggleClass('dt-open');
        $(this)
          .parent('li')
          .find('ul.children')
          .first()
          .toggleClass('visible');
        $(this)
          .parent('li')
          .find('ul.sub-menu')
          .first()
          .toggleClass('visible');
      });
      $('.mobile-toggle')
        .on('mouseover', function () {
          $(this).parent().addClass('is-hover');
        })
        .on('mouseout', function () {
          $(this).parent().removeClass('is-hover');
        });
    });
  });
</script>