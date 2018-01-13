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
    alert(' Wrong! Well now you know!');
    console.log(user + ' answered question 3 wrong');
}
console.log(user + ' has ' + userPoints + ' points');

//4th question

var answer4 = prompt('Does it take more than 10 hours to fly to Fiji from Seattle? Type yes or no');

console.log(user + ' answered ' + answer4);

if (answer4 === 'yes' || answer4.toLowerCase() === 'y' || answer4 === 'Yes') {
    userPoints++;
    alert('You are right!.');
    console.log(user + ' answered question 4 correctly')
} else {
    alert('Sorry, it actually does!');
    console.log(user + 'answered question 4 wrong');
}
console.log(user + ' has ' + userPoints + 'points');

// 5th question

var answer5 = prompt('Is Fiji one of the first places to celebrate the New Year? Type yes or no');

console.log(user + ' answered ' + answer5);

if (answer5 === 'yes' || answer5.toLowerCase() === 'y' || answer5 === 'Yes') {
    userPoints++;
    alert('It is! Happy New Year!!');
    console.log(user + 'answered question 5 correctly')
} else {
    alert('WRONG! Now you know, spread the word.');
    console.log(user + 'answered question 5 wrong')
}
alert('Congratulations ' + user + ' you scored ' + userPoints + '!');
alert('Thanks again for playing my game!');
//use variables for user's name and how many points they got