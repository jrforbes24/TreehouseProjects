$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$('.header').sticky({
  getWidthFrom: '.container',
  responsiveWidth: true}
);

$('.header').on('sticky-start', function () {
  $('.description').html('We build <strong>great</strong> apps');
});

$('.header').on('sticky-end', function () {
  $('.description').html('We build apps');
});

$('h5').sticky({
  topSpacing: 60,
  getWidthFrom: '.container',
  responsiveWidth: true
});

$('h5').on('sticky-start', function () {
  $(this).append(' <a href="mailto:email@domain.com" class="email-text">Email&nbsp;us</a>');
});

$('h5').on('sticky-end', function(){
  $('.email-text').remove();
})
