// ////////////      ////////       /////////    SNACK 1
/*
// chiedo all'utente un numero
const A = parseFloat(prompt('inserisci un numero')) ;
// chiedo all'utente un altro numero
const B = parseFloat(prompt('inserisci un altro numero')) ;

// se A > B stampa A 
// se B > A stampa B


 if (A > B) {

    console.log('il maggiore è il numero ' + A );
 }
  else if ( B > A ) {

    console.log('il maggiore è il numero ' + B );


  } */

// ////////////      ////////       /////////    SNACK 2

// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga
/*
// chiedo all'utente la prima parola
const parola1 = (prompt('inserisci una parola')) ;

// chiedo all'utente la seconda parola
const parola2 = (prompt("inserisci un' altra parola")) ;

// condizione : stampo prima la parola piu lunga

if(parola1.lenght > parola2.lenght) {

    console.log(parola1 , parola2); 
} 

else  {

    console.log(parola2 , parola1); 
} 
*/


// ////////////      ////////       /////////    SNACK 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
/*
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum = 0;

for ( let i = 0 ; i < 10 ; i++  ) {

    const numeri = array.push(parseFloat(prompt('inserisci un numero')));

    sum += array[i];


}
console.log(sum); */


// ////////////      ////////       /////////    SNACK 4

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa
/*
const array = ['Pippo', 'Luigi', 'Nello']

let nome = prompt('inserisci il tuo nome per partecipare alla festa')

if (nome === array [0, 1, 2]) {

    console.log('puoi partecipare alla festa')


}

else {
    console.log('spiacente, non puoi partecipare')
}
*/
// ////////////      ////////       /////////    SNACK 5

// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array. Stampa l'array alla fine.

array = []

for (let i = 0 ; i<6 ; i++) {

    const num = parseFloat(prompt('inserisci un numero'))
}

const dispari = num % 3 

if (num == dispari) {

    array.push
    
}

console.log(array)