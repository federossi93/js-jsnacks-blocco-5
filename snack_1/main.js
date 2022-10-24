/*Crea un array di 10 oggetti che rappresentano una zucchina, indicando
per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

const zucchine =[
    {
        varietè: 1,
        peso: 3,
        lunghezza:5
    },

    {
        varietè: 1,
        peso: 5,
        lunghezza:3
    },

    {
        varietè: 2,
        peso: 10,
        lunghezza:8
    },

    {
        varietè: 2,
        peso: 2,
        lunghezza:3
    },

    {
        varietè: 3,
        peso: 1,
        lunghezza:1
    },

    {
        varietè: 3,
        peso: 7,
        lunghezza:5
    },
    
    {
        varietè: 4,
        peso: 3,
        lunghezza:5
    },

    {
        varietè: 4,
        peso: 4,
        lunghezza:3
    },

    {
        varietè: 2,
        peso: 5,
        lunghezza:8
    },

    {
        varietè: 1,
        peso: 9,
        lunghezza:14
    },
]

let sum = 0

zucchine.forEach(zucchina => {
    console.log(zucchina);    
    let pesoTot = sum += zucchina.peso
    console.log(pesoTot + " sono il tot");
    
})

