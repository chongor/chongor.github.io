//transform menu into an email icon
function mailOn() {
  $(".contact").show();
  $(".menu").css({"transform": "translateY(-100%)"});
  $(".contact").css({"transform": "translateY(0)"});
}

//transform email icon back into menu buttons
function mailOff() {
  $(".contact").css({"transform": "translateY(100%)"}, function(){
    $(".contact").hide();
  });
  $(".menu").css({"transform": "translateY(0)"});
}

function projectOn() {
  $(".contact").hide();
  $(".menu").css({"transform": "translateX(-100%)"});
  $("body").css({"overflow-y": "visible"});
  $(".work").css({"transform": "translateX(0)"});
}

function projectOff() {
  $(".contact").show();
  $(window).scrollTop(0);
  $(".work").css({"transform": "translateX(100%)"});
  $("body").css({"overflow-y": "hidden"});
  $(".menu").css({"transform": "translateX(0)"});
}

function cvOn() {
  $(".contact").hide();
  $(".menu").css({"transform": "translateY(100%)"});
  $(".cv").css({"transform": "translateY(0)"});
}

function cvOff() {
  $(".contact").show();
  $(".cv").css({"transform": "translateY(-100%)"});
  $(".menu").css({"transform": "translateY(0)"});
}

function cvButton() {
  var btn = $("#return-left");
  var top = btn.offset().top;

  $(window).on('scroll', function(e){
    var scrollTop = $(window).scrollTop();
    btn.css("top", scrollTop + top);
  });
}

function mobileSetup() {
  $(document).bind('touchstart', function(e){
    e.preventDefault();
  });
  $(document).bind('touchmove', function(e){
    e.preventDefault();
  });
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
  $("body").show();
  cvButton();
  $("#left-text").fadeTo(1000, 1);
  mobileSetup();
  setup();
})
