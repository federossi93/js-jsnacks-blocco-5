/*Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

let zucchine =[
    {
        varietè: 1,
        peso: 3,
        lunghezza:16
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
        lunghezza:18
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
        lunghezza:20
    },

    {
        varietè: 4,
        peso: 4,
        lunghezza:3
    },

    {
        varietè: 2,
        peso: 5,
        lunghezza:15
    },

    {
        varietè: 1,
        peso: 9,
        lunghezza:14
    },
]


let zucchineLunghe = zucchine.filter(zucchine => zucchine.lunghezza >= 15)
console.log(zucchineLunghe);

let sumLunghe = 0

zucchineLunghe.forEach(zucchina => {   
    let pesoTotLunghe = sumLunghe += zucchina.peso
    console.log(pesoTotLunghe + " sono il tot di lunghe");
    
})





let zucchineCorte = zucchine.filter(zucchine => zucchine.lunghezza < 15)
console.log(zucchineCorte);

let sumCorte = 0

zucchineCorte.forEach(zucchina => {   
    let pesoTotCorte = sumCorte += zucchina.peso
    console.log(pesoTotCorte + " sono il tot di corte");
    
})