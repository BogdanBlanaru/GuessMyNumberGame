'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🎉';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No number! ⛔';
    displayMessage('No number! ⛔');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!🎉';
    displayMessage('Correct Number!🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayNumber(secretNumber);
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    } else if (score <= highscore) {
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉';
      displayMessage(guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉');
      displayScore((score -= 1));
    } else {
      // document.querySelector('.message').textContent = 'You lost the game! 💥';
      displayMessage('You lost the game! 💥');
      displayScore(0);
    }
  }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high! 📈';
  //     document.querySelector('.score').textContent = score -= 1;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game! 💥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low! 📉';
  //     document.querySelector('.score').textContent = score -= 1;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game! 💥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayScore(Number((score = 20)));
  displayNumber('?');
  // document.querySelector('.message').textContent = 'Guess the number...';
  displayMessage('Guess the number...');
  document.querySelector('.guess').value = String(' ');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
