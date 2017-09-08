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
    }
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
}