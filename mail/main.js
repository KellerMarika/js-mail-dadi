
/**************************************************/
//                    E-MAIL                       //
/**************************************************/

//array di possibili indirizzi mail
const mailList = ["pincopallo@gmail.com", "pippopippone@hotmail.com", "ombramanto96@tiscali.it", "esempio@gmail.com", "A"];
console.log(mailList);

//input email
const userMail_Input = document.getElementById("user-mail");
//console.log(userMail_Input);

//valore che inserirà l'utente
let userMail
//button get
const btnSubmit_input = document.getElementById("submit-btn")
//console.log(btnSubmit_input);

//funzione bottone

btnSubmit_input.addEventListener("click", function () {

    //found= false   DEVE nascere e morire dentro alla funzione, altrimenti alla fine del ciclo il valore rimane impostato all'ultima modifica.
    let found = false;

    //raccolgo il valore dell'input e lo racciudo nella variabile dichiarata prima
    userMail = userMail_Input.value
    console.log(userMail);
    //

    //ciclo { 
    for (i = 0; i < mailList.length; i++) {
        // console.log(i);
        console.log(mailList[i], [i]);

        //controllo se array[i] === user-mail
        //se il dato utente è identico a uno dei dati dell'array
        if (userMail === mailList[i]) {

            //if true ---> found = true
            //found è vero
            found = true
            console.log(found, "trovato");
        }
    }

    console.log(found);//controllo valore uscito da ciclo
    // if found =true alert= true
    if (found === true) {
        alert(`BENTORNATO 
${userMail} !`);

        //else found =false alert= false
    } else {
        alert(`INPOSSIBLILE ACCEDERE. 
Il dato inserito non è valido`);
    }
});



