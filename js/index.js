
function hideContact() {
  $(".contact").hide();
}

function showContact() {
  $(".contact").show();
}

function hideWork() {
  $(".work").hide();
}

function showWork() {
  $(".work").show();
}

function hideCv() {
  $(".cv").hide();
}

function showCv() {
  $(".cv").show();
}

function contactOn() {
  hideContact();
  hideWork();
  setTimeout(function(){
    showContact();
    $(".menu").css({"transform": "translateY(-100%)"});
    $(".contact").css({"transform": "translateY(0)"});
  }, 200);
}

function contactOff() {
  $(".contact").css({"transform": "translateY(100%)"});
  $(".menu").css({"transform": "translateY(0)"});
  setTimeout(hideContact, 200);
}

function workOn() {
  hideContact();
  hideCv();
  setTimeout(function() {
    showWork();
    $(".menu").css({"transform": "translateX(-100%)"});
    $("body").css({"overflow-y": "visible"});
    $(".work").css({"transform": "translateX(0)"});
  }, 200);
}

function workOff() {
  $(window).scrollTop(0);
  $(".work").css({"transform": "translateX(100%)"});
  $("body").css({"overflow-y": "hidden"});
  $(".menu").css({"transform": "translateX(0)"});
  setTimeout(hideWork, 200);
}

function cvOn() {
  hideContact();
  hideWork();
  setTimeout(function() {
    showCv();
    $(".menu").css({"transform": "translateY(100%)"});
    $(".cv").css({"transform": "translateY(0)"});
  }, 200);
}

function cvOff() {
  $(".menu").css({"display": "block"});
  $(".cv").css({"transform": "translateY(-100%)"});
  $(".menu").css({"transform": "translateY(0)"});
  setTimeout(hideCv, 200);
}

function workButton() {
  var btn = $("#return-left");

  $(window).on('resize scroll', function(e){
    var top = $(window).height() * .45;
    var scrollTop = $(window).scrollTop();

    btn.css("top", scrollTop + top);
  });
}

function hideMenuText() {
  $('label a').removeClass('visible');
  $('label a').addClass('hover');
}

//setup all the handlers
function setup() {
  // setup the different page transitions
  $("#up").click(contactOn);
  $("#return-down").click(contactOff);
  $("#right").click(workOn);
  $('#return-left').click(workOff);
  $("#down").click(cvOn);
  $('#return-up').children().click(cvOff);
  //hide up and down
  hideContact();
  hideCv();
  hideWork();
  setTimeout(hideMenuText, 2000);
}

$(document).ready(function(){
  workButton();
  setup();
  $("body").show();
  //have logo fade in
  $("#left-text").fadeTo(2000, 1);
})
