'use strict';

var userPoints = 0;

console.log('hello world!')

alert('Welcome to my guessing game!')

var user = prompt('What is your name?');

alert('OK ' + user + 'Get Ready to Play! .');

var answer = prompt('Is Rachel\s favorite food chicken?'); + ('type yes or no').toLowerCase();

console.log(answer);



//check if the user's answer is correct
//what is correct?
//find out what the answer is?
//toLowerCase or toUpperCase
//use a confirm box?

if (answer === 'yes' || answer === 'y') {
    //if it's correct give them a point
    userpoints++;
} else {
    //if its not correct, tell them to try again
    alert('Nope! I love all spicy food.');
}

