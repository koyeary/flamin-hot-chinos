$(document).ready(function() {
    $(function() {
        $(window).scroll(function() {
          const winTop = $(window).scrollTop();
          if (winTop >= 30) {
            $("body").addClass("sticky-shrinknav-wrapper");
          } else{
            $("body").removeClass("sticky-shrinknav-wrapper");
          }
        });
      });
      
}); 