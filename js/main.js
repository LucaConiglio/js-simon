//Visualizzare in pagina 5 numeri casuali. Da lì parte
// un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono
//  e l’utente deve inserire, uno alla volta, i numeri che ha 
//  visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice
//quanti e quali dei numeri da indovinare sono stati individuati.

//collego il container
const container = document.querySelector(".container");
let h2Random;

let arrayNumeriUtente = []

//creo un ciclo per generare i numeri random
for(let i = 0; i < 5; i++ ) {

    //creo l'elemento h2
    h2Random = document.createElement ("h2");

    //creo un numero random
    let numeroRandom = Math. floor(Math. random()*100);

    //pushiamo nell'array in numero random
    arrayNumeriUtente.push(numeroRandom)

    //aggiungo i numeri tramite text content e la formula math random
    h2Random.textContent = numeroRandom

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
    //timer espresso in millisecondi 1000 = a  1 sec
}, 5000)


let container2 = document.querySelector(".container2");

let numeriIndividuati = []
let numeriErrati = []
let numeriEsatti = document.querySelector(".numeri-individuati");
let numeriSbagliati = document.querySelector(".numeri-errati");


setTimeout( function(){
    

    for (let j = 0; j<5; j++){
         let numeriScelti = prompt("inserisci i numeri che hai visto");
         numeriScelti = parseInt(numeriScelti);
         console.log(numeriScelti);
        
        if (arrayNumeriUtente.includes(numeriScelti)){
            let random = document.createElement ("h2");
            random.textContent = numeriScelti
            container2.append (random);
            numeriIndividuati.push(numeriScelti)

        } else {
            let random = document.createElement ("h2");
            random.textContent = numeriScelti + " errato";
            container2.append (random);
            numeriErrati.push(numeriScelti);
            
        }
        

        

        let numeri = document.querySelectorAll("h2");
    //per tutti gli h2 aggiungo la classe d-none 
    numeri.forEach((h2) => {
        h2.classList.remove("d-none");
    })
    }
    setTimeout ( function (){
        let esatti = document.createElement("h3");
        esatti.textContent = `i numeri individuati sono ${numeriIndividuati.length} e sono: ${numeriIndividuati}`;
        numeriEsatti.append(esatti);

        let brutti = document.createElement("h3");
        brutti.textContent = `i numeri errati sono ${numeriErrati.length} e sono ${numeriErrati}`
        numeriSbagliati.append(brutti);
    


        }, 2000)

    let numeriEsatti = document.querySelector(".numeri-individuati");
    let numeriSbagliati = document.querySelector("numeri-errati");

    let containerTre = document.querySelector(".container3")
    containerTre.innerHTML = "i numeri da te scelti sono"
    
}, 7000)