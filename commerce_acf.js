(function ($) {
  Drupal.behaviors.commerceAcf = {
    attach: function (context, settings) {
      if ($('.view-commerce-cart-form').length > 0) {
        $('.view-commerce-cart-form input[name^="edit_quantity"]').each(function() {
          var $element = $(this);

          $element.keyup(function() {
            Drupal.commerceAcf.quantityChanged(this);
          });

          if ($element.hasClass('quantity-with-spinner')) {
            $element.spinner({
              min: 1,
              stop: function(event, ui) {
                $(event.target).keyup();
              }
            })
          }
        });
      }
    }
  };

  Drupal.commerceAcf = {
    timer: false,

    quantityChanged: function(element) {
      clearTimeout(Drupal.commerceAcf.timer);
      Drupal.commerceAcf.timer = setTimeout(function() {
        $(element).trigger('quantityChanged');
      }, 400);
    }
  };
})(jQuery);
