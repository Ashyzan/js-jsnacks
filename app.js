// ////////////      ////////       /////////    SNACK 1

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


  }

// ////////////      ////////       /////////    SNACK 2

// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga

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



// ////////////      ////////       /////////    SNACK 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum = 0;

for ( let i = 0 ; i < 10 ; i++  ) {

    const numeri = array.push(parseFloat(prompt('inserisci un numero')));

    sum += array[i];


}
console.log(sum);