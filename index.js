console.log(
  "Hi there! Feel free to poke around the source code :) - Christian"
);

// mobile hamburger
$("#toggle").click(() => {
  $("#toggle").toggleClass("active");
  $("#overlay").toggleClass("open");
  $("#postiontoggle").toggleClass("unset-fixed");
});

$(".mobile-menu-name").click(() => {
  $("#toggle").toggleClass("active");
  $("#overlay").toggleClass("open");
  $("#postiontoggle").toggleClass("unset-fixed");
});

// NAVBAR TITLE SCROLLING

var didScroll;

$(window).scroll((event) => {
  didScroll = true;
});

setInterval(() => {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

const hasScrolled = () => {
  // do stuff here...
  if (
    window.scrollY > 400 &&
    $("#navbar-title").hasClass("visibility-hidden")
  ) {
    $("#navbar-title").removeClass("visibility-hidden");
    $("#navbar-title").addClass("second");
  }
};
