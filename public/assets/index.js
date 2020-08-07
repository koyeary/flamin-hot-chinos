
$("#Trigger").click(function () {
    $("#Slider").toggleClass("slidedown slideup");
      if ($("#Slider").hasClass("slideup"))
        $("#Slider").removeClass("slideup").addClass("slidedown");
      else
          $("#Slider").removeClass("slidedown").addClass("slideup");
  });


