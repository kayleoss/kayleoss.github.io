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
    $('.hide').hide();
    $('.hide').show();
    $('#footer').hide();
    $('#footer').delay(600);
    $('#footer').fadeIn(1000);
    $('#open').hide();
    $('#open').fadeIn(2000);
    $('#bravoimg').hide();
    $("#game").hide();
    $('#text').hide();
    $('#tales').hide();
    $('#tales').delay(500);
    $('#tales').fadeIn(1000);
    $('#bravoimg').delay(500);
    $('#bravoimg').fadeIn(1000);
    $('#game').delay(500);
    $('#game').fadeIn(1000);
    $('#text').delay(500);
    $('#text').fadeIn(1000);
}







