/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

/**************************************************/
//                       DADI                      //
/**************************************************/

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