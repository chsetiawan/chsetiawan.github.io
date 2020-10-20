console.log('Hi there! Feel free to poke around the source code :) - Christian')

// mobile hamburger
$('#toggle').click(() => {
  $('#toggle').toggleClass('active');
  $('#overlay').toggleClass('open');
  $('#postiontoggle').toggleClass('unset-fixed');
});

$('.mobile-menu-name').click(() => {
  $('#toggle').toggleClass('active');
  $('#overlay').toggleClass('open');
  $('#postiontoggle').toggleClass('unset-fixed');
})



var didScroll;
// on scroll, let the interval function know the user has scrolled
$(window).scroll(function(event){
  didScroll = true;
});
// run hasScrolled() and reset didScroll status
setInterval(function() {
  if (didScroll) {
    // console.log('scrolled');
    hasScrolled();
    didScroll = false;
  }
}, 250);
function hasScrolled() {
  // do stuff here...
  if (window.scrollY > 400) {
    console.log("past 500")
    if ($('#navbar-title').hasClass('visibility-hidden')) {
      $('#navbar-title').removeClass('visibility-hidden');
      $('#navbar-title').addClass('second');
    }
  }
}