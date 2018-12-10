window.onload = function(){
// $( document ).ready(function() {
    console.log( "ready!" );
    var windowWidth = $(document).width();
    var windowHeight = $(document).height();

    var firstBoxScroll = $(".project1Wrapper").position().top;
    var firstBoxheight = $(".project1Wrapper").height();

    var secondBoxScroll = $(".project2Wrapper").position().top;
    var secondBoxheight = $(".project2Wrapper").height();

    var thirdBoxScroll = $(".project3Wrapper").position().top;
    var thirdBoxheight = $(".project3Wrapper").height();

    var fourthBoxScroll = $(".project4Wrapper").offset().top;
    var fourthBoxheight = $(".project4Wrapper").height();

    var fifthBoxScroll = $(".project5Wrapper").offset().top;
    var fifthBoxheight = $(".project5Wrapper").height();

    var sixthBoxScroll = $(".project6Wrapper").offset().top;
    var sixthBoxheight = $(".project6Wrapper").height();

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
        scrollTo(".project1Wrapper")
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
      if (this.id =="6") {
        scrollTo(".project6Wrapper")
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

      const SPEED = {
        SLOW: 3,
        MEDIUMSLOW: 2.5,
        MEDIUM: 2,
        MEDIUMFAST: 1.5,
        FAST: 1.5,
      }
      const DIRECTION = {
        LEFT: -1,
        RIGHT: 1,
      }

      function scrollSpeed (direction = DIRECTION.RIGHT, className, caseNumberBoxScroll, speed = SPEED.FAST){
        // var scrollAnimation = (((toppen-caseNumberBoxScroll)*-windowWidth/1000)/speed);
        var scrollAnimation = (((toppen-caseNumberBoxScroll)*-windowWidth/1000)/speed)*direction;
        var fadeAnimation = ((toppen-caseNumberBoxScroll)+700)/700;

        $(className).css({
          'opacity' : fadeAnimation,
          'transform' : 'translateX(' + scrollAnimation + "px)"
        })
      }

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
          return toppen > distanceStart*0.1 && toppen < distanceStart+distanceEnd/50 && $('body').width() > 800;
      }

      function navIsInView(startDistance, distanceStart, distanceEnd, id){
        if(toppen >= distanceStart*startDistance && toppen <= distanceStart+distanceEnd/2){
          liActive(id)
        } else{
          liNonActive(id)
        }
      };

      navIsInView(0, firstBoxScroll, firstBoxheight, 1);
      navIsInView(0.5, secondBoxScroll, secondBoxheight, 2);
      navIsInView(0.75, thirdBoxScroll, thirdBoxheight, 3);
      navIsInView(0.85, fourthBoxScroll, fourthBoxheight, 4);
      navIsInView(0.9, fifthBoxScroll, fifthBoxheight, 5);
      navIsInView(0.9, sixthBoxScroll, sixthBoxheight, 6);



      if(isInView(secondBoxScroll, secondBoxheight)){
        scrollSpeed(DIRECTION.RIGHT, ".moblrnApp.first",secondBoxScroll,SPEED.SLOW)
        scrollSpeed(DIRECTION.RIGHT, ".moblrnApp.second",secondBoxScroll,SPEED.MEDIUM)
        scrollSpeed(DIRECTION.RIGHT, ".moblrnApp.third",secondBoxScroll,SPEED.MEDIUMFAST)
        scrollSpeed(DIRECTION.RIGHT, ".moblrnApp.fourth",secondBoxScroll,SPEED.MEDIUMSLOW)

      }
      if(isInView(thirdBoxScroll, thirdBoxheight)){
         scrollSpeed(DIRECTION.LEFT, ".moblrnCMS.first",thirdBoxScroll,SPEED.SLOW)
         scrollSpeed(DIRECTION.LEFT, ".moblrnCMS.second",thirdBoxScroll,SPEED.MEDIUM)
         scrollSpeed(DIRECTION.LEFT, ".moblrnCMS.third",thirdBoxScroll,SPEED.FAST)
       }
      if(isInView(fourthBoxScroll, fourthBoxheight)){
         scrollSpeed(DIRECTION.RIGHT, ".moblrnPubWeb.first",fourthBoxScroll,SPEED.SLOW)
         scrollSpeed(DIRECTION.RIGHT, ".moblrnPubWeb.second",fourthBoxScroll,SPEED.MEDIUM)
         scrollSpeed(DIRECTION.RIGHT, ".moblrnPubWeb.third",fourthBoxScroll)
    }
      if(isInView(fifthBoxScroll, fifthBoxheight)){
        scrollSpeed(DIRECTION.LEFT, ".dreamhack.first",fifthBoxScroll,SPEED.SLOW)
        scrollSpeed(DIRECTION.LEFT, ".dreamhack.second",fifthBoxScroll,SPEED.MEDIUM)
        scrollSpeed(DIRECTION.LEFT, ".dreamhack.third",fifthBoxScroll)
      }
    })
;
};
