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
let userRoll_1
//roll utente
let userRoll_2
//punteggio utente
let userScore //=userRoll_1


//rolla automentico
let autoRoll_1
let autoRoll_2
//punteggio 
let autoScore = autoRoll_1


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
    userRoll_1 = Math.floor(Math.random() * 6 + 1);
    userRoll_2 = Math.floor(Math.random() * 6 + 1);

    userScore = userRoll_1+userRoll_2
    console.log(userRoll_1,"+", userRoll_2 ,"===", userScore );
    alert(`HAI FATTO : ${userRoll_1} + ${userRoll_2} = ${userScore} `);// _____________l'ALERT è PROPRIO BRUTTINO DA VEDERE

    //console.log(userScoreContainer_El);

    /* iserisco il dato dell'array con la posizione === userRoll_1 */
    userScoreContainer_El.innerHTML = `
<h2>UTENTE</h2>
${diceIcons[userRoll_1]} + ${diceIcons[userRoll_2]}
<h4> punteggio:${userScore}</h4>`








    /*_______________________________________________VIENE ESEGUITO PRIMA L'ALERT E SOLO SUCCESSIVAMENTE FA INNER HTML ANCHE SE SCRITTO DOPO (ELEMENTO BLOCCANTE) funziona ma non mi piace _______________________________ */
    alert("ORA E' IL MIO TURNO!");
    // autoRoll_1= valore random 1-6
    autoRoll_1 = Math.floor(Math.random() * 6 + 1);
    autoRoll_2 = Math.floor(Math.random() * 6 + 1);

    autoScore = autoRoll_1+autoRoll_2
    console.log(autoRoll_1,"+", autoRoll_2 ,"===", autoScore );
    alert(`HAI FATTO : ${autoRoll_1} + ${autoRoll_2} = ${autoScore} `);// _____________l'ALERT è PROPRIO BRUTTINO DA VEDERE

    //console.log(autoScoreContainer_El);

    /* iserisco il dato dell'array con la posizione === autoRoll_1 */
    autoScoreContainer_El.innerHTML = `
<h2>UTENTE</h2>
${diceIcons[autoRoll_1]} + ${diceIcons[autoRoll_2]}
<h4> punteggio:${autoScore}</h4>`



    if (userScore > autoScore) {
        gameResult_El.innerText = ("HAI VINTO!!");
    } else if (userScore === autoScore) {
        gameResult_El.innerText = (`HANNO VINTO TUTTI!
        (o nesuno?)`);
    } else {
        gameResult_El.innerText = (`HAI PERSO!`);
    }
    console.log(userRoll_1, "user roll");
    /* per mettere l'immagine corrispondente dei dadi tirati a sorte, dovrei fare un array dove inserisco in ordine le icone dei dadi. occhio allo 0=1! */
    /* poi dovrei far ciclare il dato random e quando lo trovo devo fare un innerhtml del dato dell'array */

});




console.log("console log di elemento 3 di lista dadi", diceIcons[3])


//button_el
//funzione bottone
//const userRoll_1(1)= valore random 1-6
//_____________________________const userRoll_1(2)= valore random 1-6 se sono due
//const user-score= userRoll_1(1)+autoroll_1(2)
//____________________________user-score-container //innerHTML dado corrispondente
//user-score-text_el //inner text

//esce un allert l'utente fa clic
//_________________________?? posso mettere un immagine nell'alert??? proviamo
//const autoRoll_1= valore random 1-6
//_____________________________const autoRoll_1(2)= valore random 1-6 se sono due
//const auto-score= autoRoll_1(1) ______ +autoRoll_1(2)
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



