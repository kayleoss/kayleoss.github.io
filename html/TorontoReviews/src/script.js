const slides = document.getElementsByClassName("slide");
const slides2 = document.getElementsByClassName('slide2');
window.onload = function(){
$('.container-fluid').fadeIn(1000);
$('#slidebutton').on('click', ()=>{
    plusSlides(1);
})
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n){
    showSlides(slideIndex+=n);
}
function showSlides(n){
    var i;
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex  = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0; 
        slides[i].style.setProperty("-webkit-transition", "opacity 2s");
    }
    slides[slideIndex-1].style.opacity = 1; 
}
$('#slidebutton2').on('click', ()=>{
    plusSlides2(1);
})
let slideIndex2 = 1;
showSlides2(slideIndex2);
function plusSlides2(n){
    showSlides2(slideIndex2+=n);
}
function showSlides2(n){
    var i;
    if (n > slides2.length) {slideIndex2 = 1} 
    if (n < 1) {slideIndex  = slides2.length}
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.opacity = 0; 
        slides2[i].style.setProperty("-webkit-transition", "opacity 2s");
    }
    slides2[slideIndex2-1].style.opacity = 1; 
}
    
   
}