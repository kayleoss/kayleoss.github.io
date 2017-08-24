const burgerImage = document.getElementsByClassName('hamburger');
const drinkImg = document.getElementsByClassName('drink');
const pizzaImg = document.getElementsByClassName('pizza');
const donutImg = document.getElementsByClassName('donut');
let slideIndex = 0;
let slideIndex2 = 0;
let slideIndex3 = 0;
let slideIndex4 = 0;

window.onload = function (){
//start page hidden stuff
    $('.hidden').show();
    $('#intro').hide();
    $('#foodOne').hide();
    $('#foodTwo').hide();
    $('#foodThree').hide();
    $('#foodFour').hide();
    $('#website').hide();


//Intro animations//
    $('#intro').delay(1000);
    $('#intro').fadeIn(1000);
    $('#foodOne').delay(2500);
    $('#foodOne').fadeIn(500);
    burger(); 

    function burger(){
        for(x=0; x<burgerImage.length; x++){
            burgerImage[x].style.display = "none";
        }
        slideIndex++;
        if(slideIndex > burgerImage.length){slideIndex=1}
        burgerImage[slideIndex-1].style.display = "block";
        setTimeout(burger, 250);
    }
    $('#foodOne').on('click',() => {
        drink();
        $('#intro').fadeOut(1000);
        $('#foodOne').fadeOut(1000);
        $('#foodTwo').delay(1000);
        $('#foodTwo').fadeIn(1000);
    })
    function drink(){
        for(i=0; i<drinkImg.length; i++){
            drinkImg[i].style.display = "none";
        }
        slideIndex2++;
        if(slideIndex2 > drinkImg.length){slideIndex2=1}
        drinkImg[slideIndex2-1].style.display = "block";
        setTimeout(drink, 250);
    }
    $('#foodTwo').on('click',() => { 
        pizza();
        $('#foodTwo').fadeOut(1000);
        $('#foodThree').delay(1000);
        $('#foodThree').fadeIn(1000);
    })
    function pizza(){
        for(y=0; y<pizzaImg.length; y++){
            pizzaImg[y].style.display = "none";
        }
        slideIndex3++;
        if(slideIndex3 > pizzaImg.length){slideIndex3=1}
       pizzaImg[slideIndex3-1].style.display = "block";
        setTimeout(pizza, 250);
    }
    $('#foodThree').on('click',() => {
        donut();
        $('#foodThree').fadeOut(1000);
        $('#foodFour').delay(1000);
        $('#foodFour').fadeIn(1000);
    })
    function donut(){
        for(z=0; z<donutImg.length; z++){
            donutImg[z].style.display = "none";
        }
        slideIndex4++;
        if(slideIndex4 > donutImg.length){slideIndex4=1}
       donutImg[slideIndex4-1].style.display = "block";
        setTimeout(donut, 250);
    }
    $('#foodFour').on('click', ()=>{
        $('#foodFour').fadeOut(1000);
        $('#website').delay(1000);
        $('#website').fadeIn(1000);
    })



}