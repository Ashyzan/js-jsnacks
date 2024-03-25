// ////////////      ////////       /////////    SNACK 5

// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array. Stampa l'array alla fine.

// creo un array vuoto
array = []

//ciclo 6 volte con prompt
for (let i = 0 ; i<6 ; i++) {

    let arrayElement = array[i]

    let num = parseFloat(prompt('inserisci un numero'))

    const dispari = num % 3 

    if (num === dispari) {

        array.push(num)
        
        
    }

    console.log(arrayElement)
}

