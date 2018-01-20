'use strict';

var userPoints = 0;

console.log('Game begins!');

alert('Welcome to my guessing game!');

var user = prompt('What is your name?');

alert('OK ' + user + ', Get Ready to Play!');

//first question

function question1 () {
  var answer1 = prompt('Is Fiji in the Pacific Ocean? Type yes or no');
  console.log(user + ' answered ' + answer1);
  if (answer1 === 'yes' || answer1.toLowerCase() === 'y' || answer1 === 'Yes') {
  //if it's correct give them a point
    userPoints++;
    alert('That is Right!');
    console.log(user + ' answered  question 1 correctly');
  } else {
  //if its not correct, inform them and move to next question
    alert('Why actually it is!');
    console.log(user + ' answered question 1 wrong');
  }
  console.log(user + ' has ' + userPoints + ' points');
  console.log('log answer for' +question1);}
//call the function
question1 ();


//second question

function question2 () {
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
  console.log(user + ' has ' + userPoints + ' points');}
//call function "question2"
question2 ();


//third question
function question3 () {
  var answer3 = prompt('Is one of Fiji\'s main export sugar? Type yes or no');
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
  console.log(user + ' has ' + userPoints + ' points');}
//call function "question3"
question3 ();


//4th question
function question4 () {
  var answer4 = prompt('Does it take more than 10 hours to fly to Fiji from Seattle? Type yes or no');
  console.log(user + ' answered ' + answer4);
  if (answer4 === 'yes' || answer4.toLowerCase() === 'y' || answer4 === 'Yes') {
    userPoints++;
    alert('You are right!.');
    console.log(user + ' answered question 4 correctly');
  } else {
    alert('Sorry, it actually does!');
    console.log(user + 'answered question 4 wrong');
  }
  console.log(user + ' has ' + userPoints + 'points');}
//call function "question4"
question4 ();


// 5th question
function question5 () {
  var answer5 = prompt('Is Fiji one of the first places to celebrate the New Year? Type yes or no');
  console.log(user + ' answered ' + answer5);
  if (answer5 === 'yes' || answer5.toLowerCase() === 'y' || answer5 === 'Yes') {
    userPoints++;
    alert('It is! Happy New Year!!');
    console.log(user + 'answered question 5 correctly');
  } else {
    alert('WRONG! Now you know, spread the word.');
    console.log(user + 'answered question 5 wrong');
    console.log('answer function' +answer5);}}
//call function "question5"
question5 ();

// 6th question
function question6 () {
  var counter = 0;
  while (answer6 !== 4 && counter < 4) {
    if (user) {
      var answer6 = prompt('How many times have I traveled to Fiji?');
    }if (answer6 > 4) {
      alert('Man, I wish i was able to visit that many times!');
      alert('Sorry try again!'); //negative
    }else if (answer6 < 4) {
      alert('You gotta give me more credit that that!');
      alert('Sorry try again!'); //negative
    }else if (answer6 === 4) {
      alert('GOOD GUESS!');
      userPoints++;}
    //positive
    counter++;
    if (counter === 4) {
      alert('Your out of guesses!');
      console.log('user answers' +question6);}}}
//call function
question6 ();



// 7th question

var counter = 0;
var travelTimes = ['15', 15, 'fifteen', 'Fifteen'];
while (counter< 6 && travelTimes.indexOf(answer7) === -1) {
  counter++;
  var answer7 = prompt('How old was I the last time I visited Fiji?');
  if (travelTimes.indexOf(answer7) !== -1) {
    alert('GREAT JOB!');
    userPoints++;
  }else{
    alert('Nope!');
  }if (counter === 6) {
    alert('Your out of guesses!');
    alert('You could have answered 15, "15", "fifteen", "Fifteen"');
    alert('Congratulations ' + user + ' you scored ' + userPoints + ' out of 7!');
    alert('Thanks again for playing my game!');}}


//use variables for user's name and how many points they