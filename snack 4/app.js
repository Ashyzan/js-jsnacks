// ////////////      ////////       /////////    SNACK 4
// In un array sono contenuti i nomi degli invitati alla festa 
//del grande Gatsby
// chiedi all’utente il suo nome e comunicagli se 
//può partecipare o no alla festa

const guests = ['Pippo', 'Luigi', 'Nello']

let nome = prompt('inserisci il tuo nome per partecipare alla festa')
let trovato = false


// let trovato = guests.includes(nome)
// console.log(nome)
// console.log(trovato)

for (let i = 0 ; i < guests.lenght; i++) {

    const currentName = guests[i]
    console.log(currentName, nome)

    if (currentName === nome) {
        let trovato = true
    }
    console.log(currentName, nome, trovato)

}

if (trovato === true) {

    console.log('puoi partecipare alla festa')

}

else {
    console.log('spiacente, non puoi partecipare')
}