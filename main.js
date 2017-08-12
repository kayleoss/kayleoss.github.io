var back = document.getElementById('back');
var head = document.getElementById('head');
var headp = document.getElementById('headp');
var position= 100;
window.onload = function main(){
    $('#hidden').hide();
    $('#hidden').show();
    $('.mediaicons').hide();
    $('#back').hide();
    $('#back').show();
    $('#head').hide();
    $('#head').delay(1000);
    $('#head').fadeIn(2000);
    $('.mediaicons').delay(5500);
    $('.mediaicons').slideDown(1000);
    setTimeout(interval, 3000);

    function interval(){
         setInterval(moveback,10);
    }

    function moveback(){
        
        if (position > 0){
            position -= 1;
            back.style.right= position + "%";
        }
        if (position <= 0){
            clearInterval(interval);
        }
        } //end of 'moveback'
} //End of main function 

     


