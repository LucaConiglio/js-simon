//Visualizzare in pagina 5 numeri casuali. Da lì parte
// un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono
//  e l’utente deve inserire, uno alla volta, i numeri che ha 
//  visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice
//quanti e quali dei numeri da indovinare sono stati individuati.

//collego il container
const container = document.querySelector(".container");
let h2Random;
let sceltaUtente = document.querySelector(".scelta-utente");
let arrayNumeriUtente = [];
sceltaUtente.classList.add("d-none");
//creo un ciclo per generare i numeri random
for(let i = 0; i < 5; i++ ) {

    //creo l'elemento h2
    h2Random = document.createElement ("h2");

    //creo un numero random
    let numeroRandom = Math. floor(Math. random()*100);

    //pushiamo i numeri random nell'array numeriUtente
    arrayNumeriUtente.push(numeroRandom);

    //aggiungo i numeri tramite text content e la formula math random
    h2Random.textContent = numeroRandom;

    //appendo tutto al container
    container.append (h2Random);
}

//setto il timeout a 30 secondi dopo 30 secondi, aggiungo il d-none ai numeri rundom
setTimeout( function(){

    //creo una variabile e collego gli h2
    let numeri = document.querySelectorAll("h2");

    //per tutti gli h2 aggiungo la classe d-none 
    numeri.forEach((h2) => {
    h2.classList.add("d-none");
    })

    sceltaUtente.classList.remove("d-none")
    //timer espresso in millisecondi 1000 = a  1 sec
}, 30000)

//collego il container 2
let container2 = document.querySelector(".container2");
//creo un array vuota
let numeriUtenteIndividuati = [];
//creo array vuota
let numeriUtenteErrati = [];
//collego al container
let numeriIndividuati = document.querySelector(".numeri-individuati");
//collego al container
let numeriErrati = document.querySelector(".numeri-errati");


//funzione timeout
setTimeout( function() {
   
    
    //creo un ciclo for per i prompt
    for (let j = 0; j<5; j++){
         let numeriScelti = prompt("inserisci i numeri che hai visto");
         //trasformo quello che mi scrive l'utente in numero
         numeriScelti = parseInt(numeriScelti);
         console.log(numeriScelti);

        //se l'array numeUtente include numeriScelti creiamo un h2 con contenuto in numero stesso
        // e aggiungiamo all'array numeriUtenteIndividuati i numeriScelti
        if (arrayNumeriUtente.includes(numeriScelti)){
            let random = document.createElement ("h2");
            random.textContent = numeriScelti
            container2.append (random);
            numeriUtenteIndividuati.push(numeriScelti)
        //oppure aggiungiamo i numeri errati che non sono inclusi dell'array numeriUtente
        //nell array numeriUtenteErrati
        } else { 
            let random = document.createElement ("h2");
            random.textContent = numeriScelti;
            container2.append (random);
            numeriUtenteErrati.push(numeriScelti);
        }
    }
    //collego tutti gli h2 tramite il queryselectorall
    let numeri = document.querySelectorAll("h2");

    //per tutti gli h2 rimuovo la classe d-none 
    numeri.forEach((h2) => {
    h2.classList.add("d-block");
    })
    

    let esatti = document.createElement("h3");
    esatti.textContent = `i numeri individuati sono ${numeriUtenteIndividuati.length} e sono: ${numeriUtenteIndividuati};`;
    numeriIndividuati.append(esatti);

    let inesatti = document.createElement("h3");
    inesatti.textContent = `i numeri errati sono ${numeriUtenteErrati.length} e sono ${numeriUtenteErrati};`
    numeriErrati.append(inesatti);

}, 31500)

