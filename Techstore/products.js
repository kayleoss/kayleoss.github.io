const postText = document.querySelectorAll('.col-sm-6 p');
const buyButton = document.querySelectorAll('#buyNow');
window.onload=function(){
   $('.menu-link').bigSlide();
   $('.noshow').show();
   if (window.innerWidth < 500){
        var i;
        var x;
        for (i=0; i < postText.length;i++){
            postText[i].style.display="none";
        }
        for (x=0; x < buyButton.length; x++){
            buyButton[x].style.width = 30 + "%";
        }
   }
}