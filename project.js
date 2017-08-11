function main(){
    $('.hide').hide();
    $('.hide').show();
    $('#bravoimg').hide();
    $('#resumeimg').hide();
    $("#game").hide();
    $('#text').hide();
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








$('document').ready(main);