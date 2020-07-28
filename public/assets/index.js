$(document).ready(function(){
    
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.tooltipped').tooltip();

    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })


  });



