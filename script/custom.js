$(document).ready(function(){

    $('.nav-link').click(function(){
      $('.nav-link').removeClass('nav-link-active');

      $(this).addClass('nav-link-active');
      $(this).next().slideToggle(function(){
        $(this).prev().addClass('nav-link-active-reverse');
        $(this).parent().prevAll().children('.nav-link').removeClass('nav-link-active-reverse');
        $(this).parent().nextAll().children('.nav-link').removeClass('nav-link-active-reverse');
      });
      $(this).parent().prevAll().children('.nav-inner').slideUp();
      $(this).parent().nextAll().children('.nav-inner').slideUp();

    });

    // $('#date-picker').datepicker();
    $(".range-slider-available").ionRangeSlider({
      type: "single",
      min: 0,
      max: 20,
      from: 0,
      postfix: "",
      force_edges: true,
      // sets the initial slider value to the input
      onStart: function(data) {
        $(".js-input").prop("value", data.from);
      },
      // updates the changed slider value to the input
      onChange: function(data) {
        $(".js-input").prop("value", data.from);
      }
    });



    
  });