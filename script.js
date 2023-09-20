/*
1. Generare 5 numeri random 
 */

const nums = document.querySelector('h1');
// creo il numero di numeri random totali
const randomNum = 5;
// creo l'array vuoto
let num = [];
// creo il counter e lo inizializzo a 0
let counter = 0;

num = createRandomNum();

nums.innerHTML = num;


/* function */
function createRandomNum(){
  do {
    const random = Math.ceil(Math.random() * 10);

    if(!(num.includes(random))){
      num.push(random);

      counter++;
    }
  } while (counter < randomNum);

  return num;
}