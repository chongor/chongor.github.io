
//true => hide, false => show
function hideSection(class_name, bool) {
  if(bool) {
    $(class_name).hide();
  } else {
    $(class_name).show();
  }
}

function hideContact() {
  hideSection(".contact", true)
}

function hideWork() {
  hideSection(".work", true)
}

function contactOn() {
  hideSection(".contact", false);
  hideSection(".work", true);
  $(".menu").css({"transform": "translateY(-100%)"});
  $(".contact").css({"transform": "translateY(0)"});
}

function contactOff() {
  $(".contact").css({"transform": "translateY(100%)"});
  $(".menu").css({"transform": "translateY(0)"});
  setTimeout(hideContact, 1500);
}

function workOn() {
  hideSection(".contact", true);
  hideSection(".cv", true);
  hideSection(".work", false);
  $(".menu").css({"transform": "translateX(-100%)"});
  $("body").css({"overflow-y": "visible"});
  $(".work").css({"transform": "translateX(0)"});
}

function workOff() {
  $(window).scrollTop(0);
  $(".work").css({"transform": "translateX(100%)"});
  $("body").css({"overflow-y": "hidden"});
  $(".menu").css({"transform": "translateX(0)"});
  setTimeout(hideWork, 1500);
}

function cvOn() {
  hideSection(".cv", false);
  hideSection(".contact", true);
  hideSection(".work", true);
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
  $("#up").click(contactOn);
  $("#return-down").click(contactOff);
  $("#right").click(workOn);
  $('#return-left').click(workOff);
  $("#down").click(cvOn);
  $('#return-up').children().click(cvOff);
  //hide up and down
  hideSection(".contact", true);
  hideSection(".cv", true);
  hideSection(".work", true);
}

$(document).ready(function(){
  workButton();
  setup();
  $("body").show();
  //have logo fade in
  $("#left-text").fadeTo(1000, 1);
})
