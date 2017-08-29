var slideIndex = 0;
window.onload= function(){
    $('.hidden').show();
    $('#descript').hide();
    $('#descript').delay(500);
    $('#descript').fadeIn(2000);
    autoSlide();

function autoSlide(){
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length){slideIndex = 1}
    x[slideIndex-1].style.display ="block";
    setTimeout(autoSlide, 4000); 
}

} //End of main function on window load