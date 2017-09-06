let slideIndex=0;
const imgOver = document.getElementById('img-over');
window.onload=function(){
   $('.menu-link').bigSlide();
   $('.noshow').show();
   $('.slider').hide();
   $('.slider').fadeIn(200);
   $('#img-over').hide();
   $('#img-over').fadeIn(1500);
   autoSlide();
   function autoSlide(){
    var i;
    var x = document.getElementsByClassName("slide");
    for (i = 0; i < x.length; i++){   
        x[i].style.setProperty("-webkit-transition", "opacity 2s");
        x[i].style.opacity = 0;
    }
    slideIndex++;
    if (slideIndex > x.length){
        slideIndex = 1;
    }
    x[slideIndex-1].style.opacity =1;
    setTimeout(autoSlide, 5000); 
}}