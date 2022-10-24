/*Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione
compresa tra “a” e “b”
*/

let numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function numeriSelezione(num, min, max) {
    let selezionati = []

    selezionati.push(num.slice(min, max))
    return selezionati
}

console.log(numeriSelezione(numbers, 2, 5 ));

