'use strict';
var userPoints = 0;
var userName = prompt("Welcome to my website please tell me your name").toUpperCase();
var questions = ["Ok " + userName + " lets play agame please guess a Number between (0-50)",
"Ok " + userName + " lets play another agame enter a name of toyota cars model",
"welcome " + userName + " my name is Mohammad and this is my website please answer the following questions with yes or Know",
userName + " do you know where I live?",
userName + " do you how old am I?",
userName + " Did I studied computer science at collage?",
"Well this will be a little bit tricky " + userName + " Did I studied at Hashemite University?",
"Ok let me ask you one last qestion " + userName + " Do I Like Pizza??",
"Welcome to my website please tell me your name",
"Welcome to my Website "+ userName];

prompt(questions[9]);

function fiveQuestions(){
alert(questions[2]);
var myPlace = prompt(questions[3]);
switch (myPlace.toLowerCase()) {
    case 'yes':
        alert('Amazing ' + userName + " yes I live in Amman")
        userPoints += 5
        // console.log('Amazing '+ userName+ " yes I live in Amman")
        break;
    case 'no':
        alert("Well " + userName + " I live in amman")
        //  console.log("Well " + userName + "I live in amman")
        break;

    default:
        break;
}
var myAge = prompt(questions[4]);
if (myAge.toLowerCase() == 'yes') {
    alert('You are smart ' + userName + " yes I am 27 years old");
    userPoints += 5;
    //console.log('You are smart '+ userName+ " yes I am 27 years old");
} else {
    alert("Well " + userName + " I am 27 years old");
    //console.log("Well " + userName + "I live in amman");
}


var myMajor = prompt(questions[5]);
switch (myMajor.toLowerCase()) {
    case 'yes':
        alert('Thats not correct ' + userName + " I studied Mechanical Engineering in collage");
        //  console.log('Thats not correct '+ userName+ " I studied Mechanical Engineering in collage");
        break;
    case 'no':
        alert("Well" + userName + " seem that you knows me very well I studied Mechanical Engineering");
        userPoints += 5;
        //  console.log("Well" + userName + " seem that you knows me very well I studied Mechanical Engineering");
        break;

    default:
        break;
}
var myCollage = prompt(questions[6]);
switch (myCollage.toLowerCase()) {
    case 'yes':
        alert('Thats correct ' + userName);
        userPoints += 5;
        break;
    //console.log('Thats correct '+ userName );
    case 'no':
        alert("Well " + userName.toUpperCase() + " I have to tell you that unfoutunately statuied at Hashemite University");
        //console.log("Well" + userName + " I have to tell you that unfoutunately statuied at Hashemite University");
        break;
    default:
        break;
}
var myFavaroutMeal = prompt(questions[7]);
switch (myFavaroutMeal.toLowerCase()) {
    case 'yes':
        alert('Yes of course  ' + userName + ' I like to made it too');
        userPoints += 5;
        break;
    //console.log('Thats correct '+ userName );
    case 'no':
        alert(userName.toUpperCase() + " I'm sorry I like Pizza so much");
        //console.log("Well" + userName + " I have to tell you that unfoutunately statuied at Hashemite University");
        break;
    default:
        break;
}
}

function guessNumber() {
    var myNum = 26;
    var guesscorrect = false;
    var guessNum = prompt(questions[0]);
    for (var i = 3; i >= 0; i--) {
        if (guessNum <= 20) {
            guessNum = prompt("Your Guess is too low you have " + (i) + " more times to guess")
        } else if (guessNum >= 31) {
            guessNum = prompt("Your Guess is too high you have " + (i) + " more times to guess")
        } else if ((guessNum >= 21 && guessNum <= 25) || (guessNum >= 27 && guessNum <= 30)) {
            guessNum = prompt("You are so close you have " + (i) + " more times to guess")
        } else if (guessNum == myNum) {
            alert("You Are magician!!! " + userName + " thats correct the number is " + myNum)
            userPoints += 5;
            guesscorrect = true;
            break;
        }
    }
    if (guesscorrect == false) {
        alert("You exceeded your guesing times the true answer is: " + myNum);
    }
}

function toyotaCars() {
    var myArayCars = ['Avalon', 'Camry', 'Corolla', 'Prius', 'Yaris', 'Hilux'];
    var guessCarModel = prompt(questions[1]);
    var correct = false;
    debugger

    for (var j = 6; j > 0; j--) {
        for (var i = 0; i < myArayCars.length; i++) {
            if (guessCarModel.toLowerCase() == myArayCars[i].toLowerCase()) {
                correct = true;
            }
        }
        if (correct) {
            userPoints += 5;
            alert("Thats correct " + userName + " thank you");
            
            break;

        } else {
            guessCarModel = prompt(' wrong answer you have ' + j + " more guesses")
        }

    }
    if (correct == false) {
        alert("You exceeded your guesing times the true answers are: " + myArayCars);
        
    }

}
function yourPoints(){
    alert( userName + "  your points: "+userPoints);

}







