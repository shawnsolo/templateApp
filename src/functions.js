/*---------- SCROLL TO ELEMENT ----------*/
/**********************************************
DEPENDENCIES: jquery

*****EXAMPLE*****
scrollToElement('.post', 500);
**********************************************/
function scrollToElement(element, speed) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $(element).offset().top - 100
    }, speed);
}
/*---------- END SCROLL TO ELEMENT ----------*/





/*---------- ANIMATE ON SCROLL ----------*/
/*********************************************
DEPENDENCIES: animate.css, viewportChecker, jquery

*****EXAMPLE*****
animateOnScroll('.post', 'fadeInUp');
**********************************************/
function animateOnScroll(targetElement, effect) {
    $(targetElement).viewportChecker({
        classToAdd: 'animated ' + effect,
        offset: 100
    });
};
animateOnScroll('.post', 'fadeInUp');
/*---------- END ANIMATE ON SCROLL ----------*/





/*---------- ANIMATE ELEMENT ----------*/
/******************************************************
DEPENDENCIES: animate.css, jquery
ANIMATIONS:
bounce, flash, pulse, rubberBand, shake, headShake, swing, tada, wobble, jello
bounceIn, bounceInDown, bounceInLeft, bounceInRight, bounceInUp, bounceOut, bounceOutDown
bounceOutLeft, bounceOutRight, bounceOutUp, fadeIn, fadeInDown, fadeInDownBig, fadeInLeft
fadeInLeftBig, fadeInRight, fadeInRightBig, fadeInUp, fadeInUpBig, fadeOut, fadeOutDown
fadeOutDownBig, fadeOutLeft, fadeOutLeftBig, fadeOutRight, fadeOutRightBig, fadeOutUp
fadeOutUpBig, flipInX, flipInY, flipOutX, flipOutY, lightSpeedIn, lightSpeedOut, rotateIn
rotateInDownLeft, rotateInDownRight, rotateInUpLeft, rotateInUpRight, rotateOut, rotateOutDownLeft
rotateOutDownRight, rotateOutUpLeft, rotateOutUpRight, hinge, rollIn, rollOut, zoomIn, zoomInDown
zoomInLeft, zoomInRight, zoomInUp, zoomOut, zoomOutDown, zoomOutLeft, zoomOutRight, zoomOutUp
slideInDown, slideInLeft, slideInRight, slideInUp, slideOutDown, slideOutLeft, slideOutRight, slideOutUp

*****EXAMPLE*****
animateElement('.post1', 'slideOutLeft');
******************************************************/
function animateElement(targetElement, effect, action) {
  $(targetElement).addClass('animated ' + effect);
}
/*---------- END ANIMATE ELEMENT ----------*/





/*---------- MOBILE DETECTION ----------*/
/*********************************************
DEPENDENCIES: none
**********************************************/
$(document).ready(function () {
    var isMobile;
    var isTablet;
    if (window.matchMedia("(max-width: 759px)").matches) {
        isMobile = true;
    }
    else if (window.matchMedia("(min-width: 760px) and (max-width: 959px)").matches) {
        isTablet = true;
    }
});
/*---------- END MOBILE DETECTION ----------*/





/*---------- MENU ANIMATION ----------*/
/*********************************************
DEPENDENCIES: jquery, jquery ui
**********************************************/
var menuChanged = false;
var element = '.style-nav';
var navHeight = 240;
var topNavCss = {
  'background': '#fff',
  'box-shadow': '0 2px 2px 0px lightgrey',
  'color': '#000'
};
var scrollNavCss = {
  'box-shadow': 'none',
  'color': '#fff'
};

if (window.pageYOffset > navHeight) {
    $(element).css(topNavCss);
}
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > navHeight && !menuChanged) {
        $(element).stop(true, false).animate({ top: '-3px' }, 150, function () {
            $(element).stop(true, false).animate({ top: '0' }, 150);
        });
        $(element).css(topNavCss);
        menuChanged = true;
    }
    else if (scroll < navHeight && menuChanged) {
        $(element).css(scrollNavCss);
        $(element).stop(true, false).animate({ backgroundColor: 'transparent' }, 300);
        menuChanged = false;
    }
});
/*---------- END MENU ANIMATION ----------*/






/*---------- MENU NAV CHANGE ON SCROLL ----------*/
/*********************************************
DEPENDENCIES: jquery
**********************************************/
$(document).on("scroll", function(){
  var scrollPos = $(document).scrollTop();
  $('nav a').each(function () {
    var currLink = $(this);
    var refElement = $('#' + currLink.text());
    if (refElement.position().top -100 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      currLink.siblings().addClass("active");
    }
    else {
      currLink.siblings().removeClass("active");
    }
  });
});

/*---------- END MENU NAV CHANGE ON SCROLL ----------*/
