<script id="dt-collapsable-menu-items">
  jQuery(function ($) {
    $(document).ready(function () {
      $('body ul.et_mobile_menu li.menu-item-has-children, body ul.et_mobile_menu  li.page_item_has_children').append(
        '<span class="mobile-toggle no-smooth-scroll" aria-label="toggle sub menu"><svg class="dt-icons dt-open-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg><svg class="dt-icons dt-close-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></span>',
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