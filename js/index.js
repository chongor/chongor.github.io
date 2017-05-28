// var pathEls = document.querySelectorAll('path');
// for (var i = 0; i < pathEls.length; i++) {
//   var pathEl = pathEls[i];
//   var offset = anime.setDashoffset(pathEl);
//   pathEl.setAttribute('stroke-dashoffset', offset);
//   anime({
//     targets: pathEl,
//     strokeDashoffset: [offset, 0],
//     duration: anime.random(1000, 3000),
//     delay: anime.random(0, 2000),
//     loop: true,
//     direction: 'alternate',
//     easing: 'easeInOutSine',
//     autoplay: true
//   });
// }

console.log("hello")

//show text on menu on hover
function hoverFade(element) {
  var speed = 300;
  $(element).hover(
    function(){ $(this).stop().fadeTo(speed, 1, "swing"); },
    function(){ $(this).stop().fadeTo(speed, 0, "swing"); }
  )
}

//transform menu into an email icon
function mailOn() {
  $("#up").addClass("top-triangle");
  $("#right").addClass("right-triangle");
  $("#down").addClass("down-triangle");
  $("#left").addClass("left-triangle");
  $(".menu").find('a').each(function(){
    $(this).hide();
  })
  $(".contact").show();
}

//transform email icon back into menu buttons
function mailOff() {
  $("#up").removeClass("top-triangle");
  $("#right").removeClass("right-triangle");
  $("#down").removeClass("down-triangle");
  $("#left").removeClass("left-triangle");
  $(".menu").find('a').each(function(){
    $(this).show();
  })
  $(".contact").hide();
}

function projectOn() {
  $(".menu").hide();
  $(".works").show();
}

function projectOff() {
  $(".works").hide();
  $(".menu").show();
}

function cvOn() {
  $(".menu").hide();
  $(".cv").show();
}

function cvOff() {
  $(".cv").hide();
  $(".menu").show();
}

//setup all the handlers
function setup() {
  // setup the text to fade in and out
  hoverFade('#up-text');
  hoverFade('#right-text');
  hoverFade('#down-text');
  hoverFade('#left-text');
  // setup the different page transitions
  $("#up").click(mailOn);
  $("#return").click(mailOff);
  $("#right").click(projectOn);
  $('#return-left').click(projectOff);
  $("#down").click(cvOn);
  $('#return-up').children().click(cvOff);
}

$(document).ready(function(){
  setup();
})
