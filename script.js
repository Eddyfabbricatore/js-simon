const display = document.getElementById('display');
const message = document.getElementById('message');
const btn = document.querySelector('button');

const totalNumbers = 5;
const attesa = 3;
let randomNumbers = [];

init();


function init(){
  message.innerHTML = '';
  display.innerHTML = '';
  btn.addEventListener('click', start);
}

function start(){
  this.classList.add('d-none');

  randomNumbers = getRandomNumbers();

  display.innerHTML = randomNumbers.join(', ');
  message.innerHTML = 'Memorizza i seguenti numeri';

  setTimeout(resetDisplay, attesa * 1000);

  setTimeout(function(){
    const userNumbers = insertNumbers(totalNumbers);

    const guessedNumbers = getGuessedNumbers(userNumbers);

    endGame(guessedNumbers);
  }, (attesa + 0.2) * 1000);
}

function getRandomNumbers(){
  const randomNumbers = [];
  
  while(randomNumbers.length < totalNumbers){
    const randomNumber = getRandomNumber(1, 100);

    if(!randomNumbers.includes(randomNumber)) randomNumbers.push(randomNumber);
  }

  return randomNumbers;
}

function endGame(guessedNumbers){
  switch(guessedNumbers.length){
    case 0:
      message.innerHTML = 'Ma almeno uno potevi indovinarlo';
      break;
      
    case 0:
      message.innerHTML = 'Numero indovinato';
      display.innerHTML = guessedNumbers[0];
      break;

    default:
      message.innerHTML = 'Numeri indovinati';
      display.innerHTML = guessedNumbers.join(', ');
      break;
  }

  btn.classList.remove('d-none');
}

function getGuessedNumbers(numbersToCheck){
  const guessed = [];

  for(let i = 0; i < randomNumbers.length; i++){
    const sNum = randomNumbers[i];

    if(numbersToCheck.includes(sNum)) guessed.push(sNum);
  }

  return guessed;
}

function insertNumbers(tot){
  const numbers = [];

  while(numbers.length < tot){
    const userNumber = parseInt(prompt('Inserisci un numero'));

    if(!numbers.includes(userNumber)) numbers.push(userNumber);
  }

  return numbers;
}

function resetDisplay(){
  display.innerHTML = '';
  message.innerHTML = '';
}

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}