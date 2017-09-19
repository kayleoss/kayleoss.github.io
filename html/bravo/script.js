window.onload = function main(){
	$('.locationpage').hide();
	$('.container').hide();
	$('.coffeetext').hide();
	$('.heartimg').hide();
	$('.menuitem').hide();
	
	$('.coffeetext17').hide();
	if (window.innerWidth > 700){
	$('.coffeetext17').delay(1500);
	$('.coffeetext17').fadeIn();
	$('.coffeetext17').animate({
		left: '65%', top: '85%'}, 1000);
	$('.coffeetext').fadeIn();
	$('.heartimg').delay(2500);
	$('.heartimg').fadeIn();
	$('.heartimg').animate({
		left:'80%', top:'25%'
	}, 500);
	$('.heartimg2').delay(3000);
	$('.heartimg2').fadeIn();
	$('.heartimg2').animate({
		left:'75%', top:'45%'
	}, 500);
}
	if (window.innerWidth < 700){
	$('.coffeetext').slideDown();}
	$('.coffeetext').animate({
			left:'5%'},1000);
	
	$('.cofcof').hide();
	$('.cofcof').delay(500);
	$('.cofcof').slideDown(1000);
	
	//About Us Page//
	$('.about').on('click',function(){
		$('.menuitem').hide();
		$('.locationpage').hide();
		$('.homepage').fadeOut(1000);
		$('.container').fadeIn(2000);
	});
	//Location//
	$('.location').on('click',function(){
	$('.menuitem').hide();
	$('.locationtext').fadeIn(2000);
	$('.container').hide();
	$('.homepage').hide();
	$('.locationpage').fadeIn(2000);
	});
	//menu//
	$('.menu').on('click', function(){
	$('.menuitem').show();
	$('.locationpage').hide();
	$('.container').hide();
	$('.homepage').hide();
	})
}








