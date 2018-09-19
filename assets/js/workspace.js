;(function($){
    function init() {
      //only check one in checkbox group
      $('.check_only').on('change', function() {
        $('.check_only').not(this).prop('checked', false);
    });
  
      // up and down arrow for select
          function up_down_select(id) {
          var nextListitem;
          var noOfListItems = $("#" + id + " > option").length-1;
          var curListItem = $("#" + id)[0].selectedIndex;
          $("#" + id + "~ .arrow-up").on("click", function(){
               // Decrement the selection by one, unless that will be less than zero, then go to the last option
              nextListitem = (curListItem-1 < 0) ? noOfListItems : curListItem-1;
              curListItem = nextListitem;
              $("#" + id)[0].selectedIndex = nextListitem;
          });
          $("#" + id + "~ .arrow-down").on("click", function(){
               // Increment the selection by one, unless that will be more than the number of options, then go to the first option
             nextListitem = (curListItem+1 > noOfListItems) ? 0 : curListItem+1;
              curListItem = nextListitem;
              $("#" + id)[0].selectedIndex = nextListitem;
          });
        }

        up_down_select('country_select');
        up_down_select('gender_select');
    }
    $(function() {
      init();
    });
  })(jQuery);
  
  