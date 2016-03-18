var $ball = $('.ball');

$('#ball').on('keypress', function() {
  var newFill = $ball.offset().left + .top + Math.random();
  $ball.css('left', 'top', newFill);
});
