// ////////////      ////////       /////////    SNACK 4
// In un array sono contenuti i nomi degli invitati alla festa 
//del grande Gatsby
// chiedi all’utente il suo nome e comunicagli se 
//può partecipare o no alla festa

const guests = ['Pippo', 'Luigi', 'Nello']

let nome = prompt('inserisci il tuo nome per partecipare alla festa')
let trovato = false
// console.log(nome)
// console.log(trovato)
// console.log(guests)


// let trovato = guests.includes(nome)
// console.log(nome)
// console.log(trovato)

for ( let i = 0 ; i < guests.length; i++) {
    let currentName = guests[i]
    
     console.log(currentName)
     console.log(trovato)
     console.log(guests)

    if (currentName === nome) {
        trovato = true
    }
    


}

if (trovato === true) {

    console.log('puoi partecipare alla festa')
    console.log(trovato)

}
else {
    console.log('spiacente, non puoi partecipare')
    console.log(trovato)
}






