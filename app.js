'use strict';

var userPoints = 0;

console.log('Game begins!')

alert('Welcome to my guessing game!')

var user = prompt('What is your name?');

alert('OK ' + user + ', Get Ready to Play!');

//first question

var answer1 = prompt('Is Fiji in the Pacific Ocean? Type yes or no');

console.log(user + ' answered ' + answer1 );

if (answer1 === 'yes' || answer1.toLowerCase() === 'y' || answer1 === 'Yes') {
    //if it's correct give them a point
    userPoints++;
    alert('That\s Right!');
    console.log(user + ' answered  question 1 correctly');
} else {
    //if its not correct, inform them and move to next question
    alert('Why actually it is!');
    console.log(user + ' answered question 1 wrong');
}

console.log(user + ' has ' + userPoints + ' points');

//second question

var answer2 = prompt('Is Hindi the primary language in Fiji? Type yes or no');

console.log(user + ' answered ' + answer2);

if (answer2 === 'yes' || answer2.toLowerCase() === 'y' || answer2 === 'Yes') {
    //if it's correct give them a point
    userPoints++;
    alert('Awesome! MY FELLOW HINDIAN!');
    console.log(user + ' answered  question 2 correctly');
} else {
    //if its not correct, inform them and move to next question
    alert('You didnt know !?');
    console.log(user + ' answered question 2 wrong');
}

console.log(user + ' has ' + userPoints + ' points');

//third question

var answer3 = prompt('Is one of Fiji\s main export sugar? Type yes or no');

console.log(user + ' answered ' + answer3);

if (answer3 === 'yes' || answer3.toLowerCase() === 'y' || answer3 === 'Yes') {
    //if it's correct give them a point
    userPoints++;
    alert('SWEET!');
    console.log(user + ' answered question 3 correctly');
} else {
    //if its not correct, inform them and move to next question
    alert('Well now you do!!?');
    console.log(user + ' answered question 3 wrong');
}
console.log(user + ' has ' + userPoints + ' points');