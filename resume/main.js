const back = document.getElementById('back');
const head = document.getElementById('head');
const headp = document.getElementById('headp');
let position = 100;

window.onload = function main(){
    $('#hidden').hide();
    $('#hidden').show();
    $('.mediaicons').hide();
    $('#back').hide();
    $('#back').show();
    $('#head').hide();
    $('#head').delay(1000);
    $('#head').fadeIn(2000);
    $('.mediaicons').delay(6000);
    $('.mediaicons').slideDown(1000);

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
} //End of main function 

     


