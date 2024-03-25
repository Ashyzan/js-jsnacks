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