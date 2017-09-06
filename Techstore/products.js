const postText = document.querySelectorAll('.col-sm-6 p');
const buyButton = document.querySelectorAll('.buyNow');
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
    }else{
        for (x=0; x < buyButton.length; x++){
            buyButton[x].style.width = 20 + "%";
    }
   }
   $('#all').on('click',function(){
       $('.computer').fadeIn(1000);
       $('.other').fadeIn(1000);
   })
   $('#computer').on('click',function(){
       $('.other').fadeOut(1000);
       $('.computer').fadeIn(1000);
   })
   $('#other').on('click', function(){
       $('.computer').fadeOut(1000);
       $('.other').fadeIn(1000);
   })
}