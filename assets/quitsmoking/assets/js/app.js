window.onload = function (){
    $(document).foundation()
//smooth scrolling
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location = hash;
            });
        } 
        });
        
        var width = 1;
        $('#progressButton').on('click',function (){
            var elem = document.getElementById("progressbar");
            var id = setInterval(frame, 20);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    elem.style.backgroundColor = "#42f459";
                    elem.innerHTML = "Goal: Convert 20,000 Smokers";
                }else {
                    width++; 
                    elem.style.width = width + '%'; 
                    elem.innerHTML = width + '%';
                }
            }
        });











}