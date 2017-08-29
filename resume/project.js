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
    $('#open').hide();
    $('#open').fadeIn(2000);
    $('#bravoimg').hide();
    $('#resumeimg').hide();
    $("#game").hide();
    $('#text').hide();
    $('#reminders').hide();
    $('#reminders').delay(500);
    $('#reminders').fadeIn(1000);
    $('#tales').hide();
    $('#tales').delay(500);
    $('#tales').fadeIn(1000);
    $('#blogger').hide();
    $('#bravoimg').delay(500);
    $('#bravoimg').fadeIn(1000);
    $('#game').delay(500);
    $('#game').fadeIn(1000);
    $('#blogger').delay(500);
    $('#blogger').fadeIn(1000);
    $('#resumeimg').delay(500);
    $('#resumeimg').fadeIn(1000);
    $('#text').delay(500);
    $('#text').fadeIn(1000);
}







