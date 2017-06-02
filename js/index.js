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

//transform menu into an email icon
function mailOn() {
  $(".contact").show();
  $(".menu").css({"transform": "translateY(-100%)"});
  $(".contact").css({"transform": "translateY(0)"});
}

//transform email icon back into menu buttons
function mailOff() {
  $(".contact").css({"transform": "translateY(100%)"});
  $(".menu").css({"transform": "translateY(0)"});
}

function projectOn() {
  $(".menu").css({"transform": "translateX(-100%)"});
  $("body").css({"overflow-y": "visible"});
  $(".work").css({"transform": "translateX(0)"});
  $(".contact").hide();
}

function projectOff() {
  $(".contact").show();
  $(window).scrollTop(0);
  $(".work").css({"transform": "translateX(100%)"});
  $("body").css({"overflow-y": "hidden"});
  $(".menu").css({"transform": "translateX(0)"});
}

function cvOn() {
  $(".menu").css({"transform": "translateY(100%)"});
  $(".cv").css({"transform": "translateY(0)"});
}

function cvOff() {
  $(".cv").css({"transform": "translateY(-100%)"});
  $(".menu").css({"transform": "translateY(0)"});
}

//setup all the handlers
function setup() {
  // setup the different page transitions
  $("#up").click(mailOn);
  $("#return-down").click(mailOff);
  $("#right").click(projectOn);
  $('#return-left').click(projectOff);
  $("#down").click(cvOn);
  $('#return-up').children().click(cvOff);
}

$(document).ready(function(){
  console.log("Heyyy");
  $("body").show();
  setup();
})
