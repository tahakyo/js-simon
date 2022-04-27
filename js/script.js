// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// visualizzo 5 numeri random
const numbersQuantity = 5 ;
const rndmNumbersArray = generateRndmNumbers(numbersQuantity);
document.getElementById('numbers').innerHTML = rndmNumbersArray;


// li do un tempo di comparsa di 30 sec
let timerContainer = document.getElementById('timer');
let timeLeft = 10;
timerContainer.innerHTML = timeLeft;

const timeOut = setInterval(function(){
    timeLeft--;
    timerContainer.innerHTML = timeLeft;
    if (timeLeft === 0) {
        document.getElementById('numbers').classList.add("hidden");
    }

},1000);



// poi chiedo all'utente di inserire i numeri che ha visto precedentemente tramite prompt





// UTILITY FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}



function generateRndmNumbers (numbersQuantity) {
    const numbersArray = [];
    while (numbersArray.length < numbersQuantity) {
        rndmNumber = getRndInteger(1, 100);
        numbersArray.push(rndmNumber);
    }
    return numbersArray;
}