
function hideContact() {
  $(".contact").hide();
}
//transform menu into an email icon
function mailOn() {
  $(".contact").show();
  $(".work").hide();
  $(".menu").css({"transform": "translateY(-100%)"});
  $(".contact").css({"transform": "translateY(0)"});
}

//transform email icon back into menu buttons
function mailOff() {
  $(".contact").css({"transform": "translateY(100%)"});
  $(".menu").css({"transform": "translateY(0)"});
  setTimeout(hideContact, 1500);
}

function projectOn() {
  hideContact();
  $(".cv").hide();
  $(".work").show();
  $(".menu").css({"transform": "translateX(-100%)"});
  $("body").css({"overflow-y": "visible"});
  $(".work").css({"transform": "translateX(0)"});
}

function projectOff() {
  $(".cv").show();
  $(window).scrollTop(0);
  $(".work").css({"transform": "translateX(100%)"});
  $("body").css({"overflow-y": "hidden"});
  $(".menu").css({"transform": "translateX(0)"});
}

function cvOn() {
  hideContact();
  $(".work").hide();
  $(".menu").css({"transform": "translateY(100%)"});
  $(".cv").css({"transform": "translateY(0)"});
}

function cvOff() {
  $(".menu").css({"display": "block"});
  $(".cv").css({"transform": "translateY(-100%)"});
  $(".menu").css({"transform": "translateY(0)"});
}

function workButton() {
  var btn = $("#return-left");

  $(window).on('scroll', function(e){
    var top = $(window).height() * .45;
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);

    btn.css("top", scrollTop + top);
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
  workButton();
  setup();
  $("body").show();
  //have logo fade in
  $("#left-text").fadeTo(1000, 1);
})
