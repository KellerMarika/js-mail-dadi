/**************************************************/
//                       DADI                      //
/**************************************************/

/*** INPUT *************************/

//button_input
const btnGameStart_input = document.getElementById("user-btn");
//console.log(btnGameStart);

/*** ELEMENTS *************************/

//toggle d-none in funzione                    clik  SCOMPARE
const startGameContainer_El = document.getElementById("start-container");
//console.log(startGameContainer_El);

//toggle d-none in funzione                    clik   APPARE
const scoreContainer_El = document.getElementById("score-container")
//console.log(scoreContainer_El);

/* .innerHTML = `<div>   ${array[]} ${user score} </div>`____________c'è del fumo ancora */

const userScoreContainer_El = document.getElementById("user-score-container");
//console.log(userScoreContainer_El);


/* .innerHTML = `<div>   ${array[]} ${auto score} </div>`____________c'è del fumo ancora  */
const autoScoreContainer_El = document.getElementById("auto-score-container");
//console.log(autoScoreContainer_El);


/* innerText appropriato in IF */
const gameResult_El = document.getElementById("game-result");
//console.log(gameResult_El);


/*** VARIABILI PUNTEGGIO GIOCO *************************/

//roll utente
let userRoll
//punteggio utente
let userScore //=userRoll


//rolla automentico
let autoRoll
//punteggio 
let autoScore = autoRoll

//user score > === <  auto score
const gameResult = false

/*** ARRAY *************************/
const diceIcons = [``//lascio uno spazio vuoto per lo 0 perchè sui dadi non è presente
    , `<i class="fa-solid fa-dice-one"></i>`
    , `<i class="fa-solid fa-dice-two"></i>`
    , `<i class="fa-solid fa-dice-three"></i>`
    , `<i class="fa-solid fa-dice-four"></i>`
    , `<i class="fa-solid fa-dice-five"></i>`
    , `<i class="fa-solid fa-dice-six"></i>`];





/***** FUNZIONE **************************************************/

//funzione bottone
btnGameStart_input.addEventListener("click", function () {

    //userRol= valore random 1-6
    userRoll = Math.floor(Math.random() * 6 + 1);

    userScore = userRoll
    //console.log(userRoll);
    alert(`HAI FATTO : ${userRoll}`);// _____________l'ALERT è PROPRIO BRUTTINO DA VEDERE

    //console.log(userScoreContainer_El);

    /* iserisco il dato dell'array con la posizione === userRoll */
    userScoreContainer_El.innerHTML = `
    ${diceIcons[userRoll]}
<h3> PUNTEGGIO UTENTE: ${userScore}</h3>`








    /*_______________________________________________VIENE ESEGUITO PRIMA L'ALERT E SOLO SUCCESSIVAMENTE FA INNER HTML ANCHE SE SCRITTO DOPO (ELEMENTO BLOCCANTE) funziona ma non mi piace _______________________________ */
    alert("ORA E' IL MIO TURNO!");
    // autoRoll= valore random 1-6
    autoRoll = Math.floor(Math.random() * 6 + 1);

    autoScore = autoRoll
    //console.log(autoRoll);
    alert(`HO FATTO : ${autoRoll}`);// _____________l'ALERT è PROPRIO BRUTTINO DA VEDERE

    //console.log(autoScoreContainer_El);
    autoScoreContainer_El.innerHTML = `
    ${diceIcons[autoRoll]}
<h3> PUNTEGGIO AVVERSARIO: ${autoScore}</h3>`

    if (userScore > autoScore) {
        gameResult_El.innerText = ("HAI VINTO!!");
    } else if (userScore === autoScore) {
        gameResult_El.innerText = (`HANNO VINTO TUTTI!
        (o nesuno?)`);
    } else {
        gameResult_El.innerText = (`HAI PERSO!`);
    }
    console.log(userRoll, "user roll");
    /* per mettere l'immagine corrispondente dei dadi tirati a sorte, dovrei fare un array dove inserisco in ordine le icone dei dadi. occhio allo 0=1! */
    /* poi dovrei far ciclare il dato random e quando lo trovo devo fare un innerhtml del dato dell'array */

});




console.log("console log di elemento 3 di lista dadi", diceIcons[3])


//button_el
//funzione bottone
//const userRoll(1)= valore random 1-6
//_____________________________const userRoll(2)= valore random 1-6 se sono due
//const user-score= userRoll(1)+autoroll(2)
//____________________________user-score-container //innerHTML dado corrispondente
//user-score-text_el //inner text

//esce un allert l'utente fa clic
//_________________________?? posso mettere un immagine nell'alert??? proviamo
//const autoRoll= valore random 1-6
//_____________________________const autoRoll(2)= valore random 1-6 se sono due
//const auto-score= autoRoll(1) ______ +autoRoll(2)
//____________________________auto-score-container //innerHTML dado corrispondente
//auto-score-text_el //inner text

//SE user-score > auto-score
// game-result_El inner text:you win
//invece SE user-score === auto-score
// game-result_El inner text:nobady wins (or all)
//altrimenti
// game-result_El inner text:you have been defeated

/* per mettere l'immagine corrispondente dei dadi tirati a sorte, dovrei fare un array dove inserisco in ordine le icone dei dadi. occhio allo 0=1! */
/* poi dovrei far ciclare il dato random e quando lo trovo devo fare un innerhtml del dato dell'array */



