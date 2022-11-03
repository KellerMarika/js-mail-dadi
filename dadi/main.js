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
    <h3>UTENTE</h3>
    <div class="d-flex align-items-center justify-content-center py-3">
    ${diceIcons[userRoll_1]} 
    <i class="fs-3 px-2 fa-solid fa-plus "></i>  
    ${diceIcons[userRoll_2]}
    </div>
    <h4> punteggio : ${userScore}</h4>`
    /*_______________________________________________VIENE ESEGUITO PRIMA L'ALERT E SOLO SUCCESSIVAMENTE FA INNER HTML ANCHE SE SCRITTO DOPO (ELEMENTO BLOCCANTE) funziona ma non mi piace _______________________________ */
    alert("ORA E' IL MIO TURNO!");
    // autoRoll_1= valore random 1-6
    autoRoll_1 = Math.floor(Math.random() * 6 + 1);
    autoRoll_2 = Math.floor(Math.random() * 6 + 1);

    autoScore = autoRoll_1+autoRoll_2
    console.log(autoRoll_1,"+", autoRoll_2 ,"===", autoScore );
    alert(`HO FATTO : ${autoRoll_1} + ${autoRoll_2} = ${autoScore} `);// _____________l'ALERT è PROPRIO BRUTTINO DA VEDERE

    //console.log(autoScoreContainer_El);

    /* iserisco il dato dell'array con la posizione === autoRoll_1 */
    autoScoreContainer_El.innerHTML = `
<h3>SFIDANTE</h3>
<div class="d-flex align-items-center justify-content-center py-3">
${diceIcons[autoRoll_1]} 
<i class="fs-3 px-2 fa-solid fa-plus "></i>  
${diceIcons[autoRoll_2]}
</div>
<h4> punteggio : ${autoScore}</h4>`



    if (userScore > autoScore) {
        gameResult_El.innerHTML =`<h2  class="my_color-danger">HAI VINTO!!</h2>`;
    } else if (userScore === autoScore) {
        gameResult_El.innerHTML = `<h2  class="my_color-danger my-fs">HANNO VINTO TUTTI!</h2> <h2 class="text-dark my-fs">(o nesuno?)</h2>`;
    } else {
        gameResult_El.innerHTML =`<h2  class="text-dark ">HAI PERSO!</h2>`;
    }
    console.log(userRoll_1, "user roll");
    /* per mettere l'immagine corrispondente dei dadi tirati a sorte, dovrei fare un array dove inserisco in ordine le icone dei dadi. occhio allo 0=1! */
    /* poi dovrei far ciclare il dato random e quando lo trovo devo fare un innerhtml del dato dell'array */

});




console.log("console log di elemento 3 di lista dadi", diceIcons[3])


