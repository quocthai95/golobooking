;(function($){
  var $btnMenu = null,
      $nav = null;
  function init() {
    $btnMenu = $(".btn_menu");
    $nav = $("nav");

    $btnMenu.on("click", (e) => {
      e.preventDefault();
      $nav.stop().slideToggle();
    });

  }
  $(function() {
    init();
  });
})(jQuery);

