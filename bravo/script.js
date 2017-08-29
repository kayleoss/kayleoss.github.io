window.onload = function main(){
	$('.locationpage').hide();
	$('.container').hide();
	$('.coffeetext').show();
	$('.coffeetwotext').show();
	$('.coffeeonetext').show();
	$('.coffeetext').hide();
	$('.coffeeonetext').hide();
	$('.coffeetwotext').hide();
	$('.coffeeone').delay(1500);
	$('.coffeetext').slideDown();
	$('.coffeetext').animate({
			left:'+1%'},200);
	$('.coffeeone').hover(function(){
		$('.coffeeonetext').slideDown();
		$('.coffeeonetext').animate({
			right:'+1%'},200);
	});
	$('.coffeetwo').hover(function(){
		$('.coffeetwotext').slideDown();
		$('.coffeetwotext').animate({
			left:'+1%'},200);
		});
	
	$('.cofcof').hide();
	$('.cofcof').delay(500);
	$('.cofcof').slideDown(1000);
	//About Us Page//
	$('.about').on('click',function(){
		$('.locationpage').hide();
		$('.homepage').fadeOut(1000);
		$('.container').fadeIn(2000);
	});
	//Location//
	$('.location').on('click',function(){
	$('.locationtext').fadeIn(2000);
	$('.container').hide();
	$('.homepage').hide();
	$('.locationpage').fadeIn(2000);
	});
	
	


	}








