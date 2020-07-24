$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.tooltipped').tooltip();

    const checkpoint = 1000;
 
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= checkpoint) {
        opacity = 0 + currentScroll / checkpoint;
      }  
      document.querySelector("shell-body").style.opacity = opacity;
    });

    /* btn = $('button');

    function sendForm(data) {
      console.log('Sending data');


    } */
  });


