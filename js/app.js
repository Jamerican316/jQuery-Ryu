$(document).ready(function() {
	
  $('.ryu').mouseenter(function() {
  	/* used alert to test code for functionality
  	alert('mouse entered .ryu div');*/
  	$('.RyuStill').hide();
  	$('.RyuReady').show();
	})
  .mouseleave(function() {
    $('.RyuReady').hide();
	$('.RyuStill').show();
	 })
	.mousedown(function() {
	/*used console-log to test the function- logged to console
	becasue alert would interfer with mouse down	
    console.log('mousedown');*/
    // play hadouken sound
  	$('.RyuReady').hide();
  	$('.RyuHadouken').show();
  	$('.hadouken').show();
	 })
  // animate hadouken to the right of the screen
  .mouseup(function() {
    $('RyuHadouken').hide();
  	$('.RyuReady').show();
  });
});
