
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

function recaptcha() {
  $(window).open('http://www.google.com/recaptcha/mailhide/d?k\x3d01cHoL9GkCaCMplzfkm9g14Q\x3d\x3d\x26c\x3dBebrzwGH_C2iaRuvqVpus2h5b4Wy2koR0qgxuzpuzt8\x3d', '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300');
  return false;
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
  setTimeout(hideMenuText, 5000);
}

$(document).ready(function(){
  workButton();
  setup();
  $("body").show();
  //have logo fade in
  $("#left-text").fadeTo(1000, 1);
})
