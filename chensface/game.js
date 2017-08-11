window.onload = function(){
var position = 0;
var top = 0;
var start = document.getElementById('start');
var enemy = document.getElementById('object');
var over = document.getElementById('over');
var p = document.getElementById('play');
var score = 0;


start.innerHTML = "Ready? Start Game!";
start.addEventListener("click", function (){
    move();
    enemy.addEventListener("click", function(){
    score += 1;
    console.log(score);
    });
    setInterval(move,60);
});

function move(){
    start.style.display = "none";
    if (position >= 900 && top < 390){
        position -= 900;
        top += 50;
        enemy.style.marginTop = top + "px";
        enemy.style.right = position+"px";
    }
    else if (position < 900 || top < 390 )   {
        position += 20;
        enemy.style.left = position+"px";
    }
    else{
        enemy.style.marginTop = 250 + "px";
        enemy.style.left = 450 + "px";
        enemy.style.opacity = 1;
        over.style.display = "block";
        p.style.display = "inline";

        over.innerHTML = "Game Over! Your score is " + score + "!";
    };




    }
}


