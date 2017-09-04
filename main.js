let position = 100;


window.onload = function main(){
    if(window.innerWidth < 500){
    $( '#container' ).SecretNav({		
    	navSelector: 'nav',			// selector of the nav tag
		openSelector: '.open-menu',	// selector of the menu's opener
        position: 'top',
    });
    }
    if(window.innerWidth >= 500){
        $( '#container' ).SecretNav({		
            navSelector: 'nav',			// selector of the nav tag
            openSelector: '.open-menu',	// selector of the menu's opener
            position: 'left',
        });
    }

    $('#hidden').hide();
    $('#hidden').show();
    $('.mediaicons').hide();
    $('#back').hide();
    $('#back').show();
    $('#head').hide();
    $('#head').delay(1000);
    $('#head').fadeIn(2000);
    $('#back').delay(2500);
    $('#back').animate({left: "0%"}, 1000);

    $('.mediaicons').delay(4000);
    $('.mediaicons').slideDown(1000);

    /*
    setTimeout(interval, 3000);

    function interval() {
         setInterval(moveback,30);
    }
    
   function moveback () {
        if (position > 0){
            position -= 5;
            back.style.right= position + "%";
        }
        if (position <= 0){
            clearInterval(interval);
        }
    } //end of 'moveback'
    */


} //End of main function 

     


