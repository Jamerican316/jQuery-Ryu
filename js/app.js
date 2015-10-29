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
	    playHadouken();
	  	$('.RyuReady').hide();
	  	$('.RyuHadouken').finish().show();
	  	$('.hadouken').finish().show().animate(
	  	{'left': '1020px'},
	  	 500,
	  	 function() {
	    $(this).hide();
	    $(this).css('left', '520px');
  		});
  	})
	  // animate hadouken to the right of the screen
	 .mouseup(function() {
	  	$('.RyuReady').show();
	  	$('.RyuHadouken').finish().hide();
	 })
	 	$( "body" ).keydown(function(key) {
  		if (key.which == 88){
  			$("p").hide();
	 		}
	 });
});


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
