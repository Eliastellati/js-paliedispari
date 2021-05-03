// 2 - Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var evenOdd = prompt('Scegli pari o dispari');
console.log('Hai scelto ' + evenOdd);


do {
  var number = parseInt(prompt('Scegli un numero da 1 a 5'))
  console.log(number);
} while(number > 5 || number == 0)

var random = Math.floor(Math.random() * (5 - 1) ) + 1;
console.log(random);

var sum = 0;
sum = number + random;
console.log(sum);


if (sum % 2 == 0) {
    console.log('Pari Vince');
} else {
    console.log('Dispari Vince');
}


