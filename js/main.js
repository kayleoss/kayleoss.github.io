$(document).ready(function(){
    var wow = new WOW(
        {
          boxClass:     'wow', 
          animateClass: 'animated', 
          offset:       0,          
          mobile:       false,       
          live:         true,       
          callback:     function(box) {
            
          },
          scrollContainer: null 
        }
      );
      wow.init();
      var top;
      if (window.location.pathname === '/'){
        var scroll_gif = document.getElementById('scroll-down');
        window.addEventListener('scroll', function(e){
        top = this.scrollY;
        scroll_gif.style.opacity = 0;
        if (top > 200 && document.getElementById('h1-head')){
          document.getElementById('h1-head').style.opacity = 1;
          document.getElementById('marketing-line').style.opacity = 1;
        }
      })
        if(window.pageYOffset > 200){
          scroll_gif.style.opacity = 0;
          document.getElementById('h1-head').style.opacity = 1;
          document.getElementById('marketing-line').style.opacity = 1;
        }
      }
      
});
