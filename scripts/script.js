$(document).ready(function(){

  // $('#showViz').click(function(e){
  //   console.log("click click");
  //   document.getElementById("visualizeit").style.display="block";
  //
  // });
  //
  // $('#showTriv').click(function(e){
  //   console.log("trivia click");
  //   document.getElementById("trivia").style.display="block";
  //
  // });

    // lightbox.option({
    //   'resizeDuration': 200,
    //   'wrapAround': true,
    // });

   // cache the window object
   $window = $(window);

   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);

      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards
        var yPos = -($window.scrollTop() / $scroll.data('speed'));

        // background position
        var coords = '50%'+ yPos + 'px ';

        // move the background
        $scroll.css({ backgroundPosition: coords });
      }); // end window scroll
   });  // end section function


}); // close out script

/* Create HTML5 element for IE */
document.createElement("section");
1
