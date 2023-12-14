window.onload = function welcome(){
var randomNum1 = Math.random() * 6;
randomNum1 = Math.ceil(randomNum1);

var randomNum2 = Math.random() * 6;
randomNum2 = Math.ceil(randomNum2);

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "Winner is number 1.";
}
else if(randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "Winner is number 2.";
}
else if(randomNum1 == randomNum2){
    document.querySelector("h1").innerHTML = "There is no winner.";
}

var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.getElementsByClassName("img2")[0];

    img1.src = "./images/dice" + randomNum1 + ".png";
    img2.src = "./images/dice" + randomNum2 + ".png";
}


// OVO JE BIO NEKI PRVI KOMPLIKOVANIJI POKUSAJ :D


// if(randomNum1 == 1){
//     document.getElementsByClassName("img1").src = "./images/dice1.png";
// }
// if(randomNum1 == 2){
//     document.getElementsByClassName("img1").src = "./images/dice2.png";
// }
// if(randomNum1 == 3){
//     document.getElementsByClassName("img1").src = "./images/dice3.png";
// }
// if(randomNum1 == 4){
//     document.getElementsByClassName("img1").src = "./images/dice4.png";
// }
// if(randomNum1 == 5){
//     document.getElementsByClassName("img1").src = "./images/dice5.png";
// }
// if(randomNum1 == 6){
//     document.getElementsByClassName("img1").src = "./images/dice6.png";
// }



// if(randomNum2 == 1){
//     document.getElementsByClassName("img2").src = "./images/dice1.png";
// }
// if(randomNum2 == 2){
//     document.getElementsByClassName("img2").src = "./images/dice2.png";
// }
// if(randomNum2 == 3){
//     document.getElementsByClassName("img2").src = "./images/dice3.png";
// }
// if(randomNum2 == 4){
//     document.getElementsByClassName("img2").src = "./images/dice4.png";
// }
// if(randomNum2 == 5){
//     document.getElementsByClassName("img2").src = "./images/dice5.png";
// }
// if(randomNum2 == 6){
//     document.getElementsByClassName("img2").src = "./images/dice6.png";
// }
