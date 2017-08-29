const input = document.getElementById('reminder');
const reminders = document.getElementById('text');
window.onload = function(){

    input.addEventListener('keypress',function(e){
        var key = e.which || e.keyCode;
        if (key === 13){
         const text = input.value;   
        reminders.innerHTML += "<br/>" + text;
        input.value = null;
        }
    })








}