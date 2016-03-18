var $ball = $('.ball');

$('#ball').on('click', function() {
  var newFill = $ball.offset().left + .top + math.random();
  $ball.css('left', 'top', newFill);
});
