$(document).ready(function(){
    
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.tooltipped').tooltip();

    const checkpoint = 1000;

    //fade in
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= checkpoint) {
        opacity = 0 + currentScroll / checkpoint;
      }  
      document.querySelector("shell-body").style.opacity = opacity;
    });

    //form submission
    $(document).ready(function() {
      $('#sumbit').click(function() {
          $('#contactform').attr('action',
                         'mailto:katyeary@gmail.com?subject=Kat Yeary Digital Portfolio' +
                         $('#name').val() + '&body=' + $('#email').val() + '&body=' + $('#comments').val() + '&body=');
          $('#contactform').submit();
      });
  });
    });


