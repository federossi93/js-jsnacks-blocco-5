/*Scrivi una funzione che fonda due array (aventi lo stesso numero di
elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].*/


let lettere = ["a", "b", "c", "d"]

let numeri = [1, 2, 3, 4]

let union =[]


function fusion(str, number) {
    for (let i = 0; i < 4; i++) {
        let firstElement = str[i];
        let secondElement = number[i];
        //console.log(firstElement);
        //console.log(secondElement);
        union.push(firstElement)
        union.push(secondElement)
        console.log(union);
    }
}


fusion(lettere, numeri)




// const array1 = ['luca', 'marco', 'anna'];
// const array2 = ['matteo', 'andrea', 'francesca'];
// const risultato = array1.concat(array2);

// console.log(risultato);