// ////////////      ////////       /////////    SNACK 5

// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array. Stampa l'array alla fine.

// creo un array vuoto
array = []

//ciclo 6 volte con prompt
for (let i = 0 ; i<6 ; i++) {

    let arrayElement = array[i]
    
    console.log(arrayElement)

    let num = parseFloat(prompt('inserisci un numero')) // num
    //console.log(num)

    const pari = num % 2
    //console.log( pari)

    
    if (pari !== 0 ) {

        console.log(` ${num} è dispari`)
        array.push(num)
        
    }
    
    console.log(array)
}