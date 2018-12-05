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

    $("nav").click(function(){
      $(this).toggleClass("show")
    });

    $("li").click( function(){

      function scrollTo(div){
      	$('html, body').animate({
      		scrollTop: $(div).offset().top
      	},1000);
      }

      if (this.id =="1") {
        scrollTo(".introWrapper")
      }
      if (this.id =="2") {
        scrollTo(".project2Wrapper")
      }
      if (this.id =="3") {
        scrollTo(".project3Wrapper")
      }
      if (this.id =="4") {
        scrollTo(".project4Wrapper")
      }
      if (this.id =="5") {
        scrollTo(".project5Wrapper")
      }

          });

    $(window).keydown(function(keyPressed) {
      if (keyPressed.keyCode == 78) {
        $("#scrollBar").toggleClass("rainbow")
      }
    });
    $(window).scroll(function(){
      var toppen = $(window).scrollTop();
      var loadBar = windowWidth/(windowHeight-$(window).height())*toppen
      $("nav").removeClass("show")

      $("#scrollBar").css(
        "width", loadBar
      );

      function liActive(no){
        $("#"+no).addClass("activeLi")
      }

      function liNonActive(no){
        $("#"+no).removeClass("activeLi")
      }

      function isInView(distanceStart, distanceEnd) {
          return toppen > distanceStart/5 && toppen < distanceStart+distanceEnd/50 && $('body').width() > 800;
      }
      if(isInView(secondBoxScroll, secondBoxheight)){
        liNonActive(2);
      $(".project2Wrapper .imageBuff").css({
        'transform' : 'scale(3) translateX(' + (((toppen-secondBoxScroll)*-windowWidth/1000)/2) + "px)"
      })}else liActive(2);
      if(isInView(thirdBoxScroll, thirdBoxheight)){
        liActive(3);
      $(".project3Wrapper .imageBuff").css({
        'transform' : 'scale(3) translateX(' + (((toppen-thirdBoxScroll)*-windowWidth/1000)/2)*-1 + "px)"
      })}else liNonActive(3);
      if(isInView(fourthBoxScroll, fourthBoxheight)){
        liActive(4);
      $(".project4Wrapper .imageBuff").css({
        'transform' : 'scale(3) translateX(' + (((toppen-fourthBoxScroll)*-windowWidth/1000)/2) + "px)"
      })}else liNonActive(4);
      if(isInView(fifthBoxScroll, fifthBoxheight)){
        liActive(5);
      $(".project5Wrapper .imageBuff").css({
        'transform' : 'scale(3) translateX(' + (((toppen-fifthBoxScroll)*-windowWidth/1000)/2)*-1 + "px)"
      })}else liNonActive(5);
    })
});
};
