$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.modal').modal();

/*     $(window).scroll(function() {
      $('.hideme').each(function(i){

        const objBottom = $(this).position().top + $(this).outerHeight();
        const windowBottom = $(window).scrollTop() + $(window).height();

        if (windowBottom > objBottom) {
          $this.animate({'opacity':'1'}, 500);
        }
        
      });
    }); */
  });

  const checkpoint = 300;

