function main(){
	$('.locationpage').hide();
	$('.container').hide();
	$('.coffeetext').hide();
	$('.coffeeonetext').hide();
	$('.coffeetwotext').hide();
	$('.coffee').hover(function(){
		$('.coffeetext').slideDown();
		$('.coffeetext').animate({
			left:'+150'},200);
		});
	$('.coffeeone').hover(function(){
		$('.coffeeonetext').slideDown();
		$('.coffeeonetext').animate({
			right:'+100'},200);
	});
	$('.coffeetwo').hover(function(){
		$('.coffeetwotext').slideDown();
		$('.coffeetwotext').animate({
			left:'+250'},200);
		});
	//About Us Page//
	$('.about').on('click',function(){
		$('.locationpage').hide();
		$('.homepage').fadeOut(1000);
		$('.container').fadeIn(2000);
	});
	//Location//
	$('.location').on('click',function(){
	$('.container').hide();
	$('.homepage').hide();
	$('.locationpage').fadeIn(2000);
	});
	
	


	}








$(document).ready(main);