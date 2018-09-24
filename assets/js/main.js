;(function($){
  var $btnMenu = null,
      $nav = null,
      $title = null;
  function init() {
    $btnMenu = $(".btn_menu");
    $nav = $("nav");
    $title = $("#home .title");

    $btnMenu.on("click", (e) => {
      e.preventDefault();
      $nav.stop().slideToggle();
    });

    $(window).on("load resize", setWidth);
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

