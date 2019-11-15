// Esercitazione 2 => repo: js-dadi
// Generare un numero casuale tra 1 e 6.
// Attraverso un prompt chiedere all'utente un numero tra 1 e 6.
// Stampare un messaggio per dire all'utente se ha vinto oppure no (il numero più alto vince).

// prova per vedere se effettivamente la funzione sta pescando numeri a caso tra 1 e 6
// var insieme = [];
// for (var i = 0; i < 50 ; i++) {
//     var num = Math.floor(Math.random() * 6) + 1;
//     insieme.push(num);
// }
// console.log(insieme);

var numUtente = parseInt(prompt('Scegli un numero da 1 a 6 per favore'));

if (numUtente < 1 || numUtente > 6) {
    alert('Se non sbaglio ' + numUtente + ' non è un numero compreso tra 1 a 6...');
    window.location.reload();
} else if (!numUtente) {
    alert('Daiii, non è neanche un numero!');
    window.location.reload();
} else {
    alert('Grazie, hai scelto il numero ' + numUtente + '.');
    alert('Ora tirerò un dado, vediamo chi vince...');
    var num = Math.floor(Math.random() * 6) + 1;
    if (num > numUtente) {
        alert('È uscito il numero ' + num + ". Ho Vinto!!");
    } else if (num < numUtente) {
        alert('È uscito il numero ' + num + "... hai avuto solo fortuna...");
    } else{
        alert('È uscito il numero ' + num + ": abbiamo pareggiato. ");
    }
}
