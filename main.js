// Esercitazione 2 => repo: js-dadi
// Generare un numero casuale tra 1 e 6.
// Attraverso un prompt chiedere all'utente un numero tra 1 e 6.
// Stampare un messaggio per dire all'utente se ha vinto oppure no (il numero più alto vince).

// prova per vedere se effettivamente la funzione sta pescando numeri a caso tra 1 e 6
var insieme = [];
for (var i = 0; i < 50 ; i++) {
    var num = Math.floor(Math.random() * 6) + 1;
    insieme.push(num);
}
console.log(insieme);
