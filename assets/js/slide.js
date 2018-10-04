;(function($){
  var
    $slide = $('.js-slide');

  function init() {

    $slide.slick({
      slidesToShow: 4,
      arrows: false,
      responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        }
      }]
    });

    // set arrow for each slide
    $slide.each(function(){
      $(this).slick('slickSetOption', 'prevArrow', $(this).closest('.slide-wrapper').find('.js-button-prev'), true);
      $(this).slick('slickSetOption', 'nextArrow', $(this).closest('.slide-wrapper').find('.js-button-next'), true);
      $(this).slick('slickSetOption', 'arrows', true, true);
    });
  }

  $(function() {
    init();
  });
})(jQuery);
