/*Scrivi una funzione che accetti una stringa come argomento e la ritorni
girata (es. Ciao -> oaiC)*/

function reverse (stringa) {
    let reversStr = stringa.split("").reverse().concat().join("")
    console.log(reversStr);
    
}


reverse("ciao")