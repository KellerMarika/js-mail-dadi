/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

/**************************************************/
//                       DADI                      //
/**************************************************/

/*** INPUT *************************/

//button_input
const btnGameStart_input=document.getElementById("user-btn");
//console.log(btnGameStart);

/*** ELEMENTS *************************/

//toggle d-none in funzione                    clik  SCOMPARE
const startGameContainer_El=document.getElementById("start-container");
//console.log(startGameContainer_El);

//toggle d-none in funzione                    clik   APPARE
const scoreContainer_El=document.getElementById("score-container")
//console.log(scoreContainer_El);





//                  <i>dado icon</i> 
/* .innerHTML = `<div>   ${array[]} ${user score} </div>`____________c'è del fumo ancora */

const userScoreContainer_El=document.getElementById("user-score-container");
//console.log(userScoreContainer_El);



//                  <i>dado icon</i> 
/* .innerHTML = `<div>   ${array[]} ${auto score} </div>`____________c'è del fumo ancora  */
const autoScoreContainer_El=document.getElementById("auto-score-container");
//console.log(autoScoreContainer_El);

/* innerText appropriato in IF */
const gameResult_El=document.getElementById("game-result");
console.log(gameResult_El);


/*** VARIABILI PUNTEGGIO GIOCO *************************/

//roll utente
let userRoll
//punteggio utente
const userScore=userRoll


//rolla automentico
let autoRoll
//punteggio 
const autoScore=autoRoll

//user score > === <  auto score
const gameResult=false





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



