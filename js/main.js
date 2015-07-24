function convertToC() {
	//on click, get user input
	var f = $('.userTemp').val();
	f = parseInt(f);
	
	//[°C] = ([°F] - 32) × 5/9
	var cTemp = (f - 32) * (5/9);

  	$('.result').html(cTemp.toFixed(1));

}

function convertToF() {
	//on click, get user input
	var c = $('.userTemp').val();
	c = parseInt(c);
	
	var fTemp = (c * 1.8 + 32);

  	$('.result').html(fTemp.toFixed(1));

}

function buttonClick() {

	if($('input:radio[name=unit]:checked').val() == "F to C") {
  		convertToC();

  	} else {
  		convertToF();
  	}
}

$(function() {
  // Handler for .ready() called.

  //detect click
  $('.convert').click(buttonClick);
  
});