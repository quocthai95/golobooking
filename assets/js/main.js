;(function($){
  var 
    $btnMenu = null,
    $nav = null,
    $title = null,
    $btnQuote = null,
    $empty = null,
    $resultQuote = null;

  function init() {
    $btnMenu = $(".btn_menu");
    $nav = $("nav");
    $title = $("#home .title");
    $btnQuote = $("#get_quote");
    $empty = $(".empty_value");
    $resultQuote = $(".quote_result");

    $resultQuote.hide();

    $btnMenu.on("click", (e) => {
      e.preventDefault();
      $nav.stop().slideToggle();
    });

    $(window).on("load resize", setWidth);

    $btnQuote.on("click", function() {
      $empty.hide();
      $resultQuote.show();
    });

  }
  
  function setWidth() {
    $title.each(function() {
      const title = $title.width();
      const h2 = $(this).find("h2").outerWidth();
      $(this).find(".line").css({"width": (title - h2) + "px"});
    });
  }

  $(function() {
    init();
  });
})(jQuery);

