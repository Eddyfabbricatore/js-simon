/*
1. Generare 5 numeri random
2. Controllo se i numeri generati sono inclusi dentro l'array num
  - Se non sono presenti aggiungerli e incrementare il counter
3. Stampare i numeri in pagina
4. Far partire un timer di 5 secondi e resettare il contenuto della pagina
 */


const nums = document.querySelector('h1');

// creo il numero di numeri random totali
const randomNum = 5;
// creo l'array vuoto
let num = [];
// creo il counter e lo inizializzo a 0
let counter = 0;

init();

setInterval(reset, 5000);


/* function */
function init(){
  num = createRandomNum();

  // 3. Stampo in pagina i numeri dell'array
  nums.innerHTML = num;
}

function createRandomNum(){
  // 1. Genero 5 numeri random
  do {
    const random = Math.ceil(Math.random() * 10);

    // 2. Controllo se il numero generato è incluso dentro l'array
    if(!(num.includes(random))){
      // Se il numero non era presente viene aggiunto e il contatore viene incrementato
      num.push(random);

      counter++;
    }
  } while (counter < randomNum);

  return num;
}

function reset(){
  nums.innerHTML = '';
}