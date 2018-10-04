;(function($){
  var 
    $btnMenu = null,
    $nav = null,
    $title = null,
    $btnQuote = null,
    $empty = null,
    $resultQuote = null,
    status = false;


  function init() {
    $btnMenu = $(".btn_menu");
    $nav = $("nav");
    $title = $("#home .title");
    $btnQuote = $("#get_quote");
    $empty = $(".empty_value");
    $resultQuote = $(".quote_result");
    $parent = $(".choose_area");

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


    disableForm(".btn_checkbox", ".form_inner", ".form_wrap");
    disableForm(".small_checkbox", ".small_inner", ".small_wrap");

  }

  function disableForm(ele, inner, wrap) {
    $(ele).click(function() {
      if ( this.checked ) {
        $(inner).removeClass("active");
        $(this).parents(wrap).find(inner).addClass("active");
      } else {
        $(this).parents(wrap).find(inner).removeClass("active");
      }
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

