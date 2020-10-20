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