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
  });
});
$(".RyuStill").hover( handler ).show
  	$(".RyuStill").hide(".RyuReady");


  $(".RyuHadouken").hide();
  $(".RyuCool").hide();
  $(".hadouken").hide();