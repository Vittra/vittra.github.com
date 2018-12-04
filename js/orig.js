window.onload = function(){
$( document ).ready(function() {
    console.log( "ready!" );
    var windowWidth = $(document).width();
    var windowHeight = $(document).height();

    var secondBoxScroll = $(".project2Wrapper").offset().top;
    var secondBoxheight = $(".project2Wrapper").height();

    var thirdBoxScroll = $(".project3Wrapper").offset().top;
    var thirdBoxheight = $(".project3Wrapper").height();

    var fourthBoxScroll = $(".project4Wrapper").offset().top;
    var fourthBoxheight = $(".project4Wrapper").height();

    var fifthBoxScroll = $(".project5Wrapper").offset().top;
    var fifthBoxheight = $(".project5Wrapper").height();

    $(window ).keydown(function(keyPressed) {
      if (keyPressed.keyCode == 78) {
        $("#scrollBar").toggleClass("rainbow")
      }
    });
    $(window).scroll(function(){
      var toppen = $(window).scrollTop();
      var loadBar = windowWidth/(windowHeight-$(window).height())*toppen

      $("#scrollBar").css(
        "width", loadBar
      );
      function isInView(distanceStart, distanceEnd) {
          return toppen > distanceStart/5 && toppen < distanceStart+distanceEnd/50 && $('body').width() > 800;
      }
      if(isInView(secondBoxScroll, secondBoxheight)){
        console.log("hej");
      $(".project2Wrapper .imageBuff").css({
        'transform' : 'scale(3) translateX(' + (((toppen-secondBoxScroll)*-windowWidth/1000)/2) + "px)"
      })};
      if(isInView(thirdBoxScroll, thirdBoxheight)){
      $(".project3Wrapper .imageBuff").css({
        'transform' : 'scale(3) translateX(' + (((toppen-thirdBoxScroll)*-windowWidth/1000)/2)*-1 + "px)"
      })};
      if(isInView(fourthBoxScroll, fourthBoxheight)){
      $(".project4Wrapper .imageBuff").css({
        'transform' : 'scale(3) translateX(' + (((toppen-fourthBoxScroll)*-windowWidth/1000)/2) + "px)"
      })};
      if(isInView(fifthBoxScroll, fifthBoxheight)){
      $(".project5Wrapper .imageBuff").css({
        'transform' : 'scale(3) translateX(' + (((toppen-fifthBoxScroll)*-windowWidth/1000)/2)*-1 + "px)"
      })};
    })
});
};
