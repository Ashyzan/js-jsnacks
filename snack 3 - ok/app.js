// ////////////      ////////       /////////    SNACK 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let sum = 0;
const numeri = []


for ( let i = 0 ; i < 10 ; i++  ) {

    const num = parseFloat(prompt('inserisci un numero'));
    numeri.push(num)
    console.log(num, typeof num)
    sum += num

}

for ( let i = 0 ; numeri.lenght ; i++  ) { 
    const num = numeri[i]
    console.log(num)
    sum += num

}

console.log('la somma dei numeri è ' +sum); 