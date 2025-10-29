// Importando a biblioteca
const leia = require('readline-sync')

let nota1, nota2, nota3, nota4, media

console.log("Nota 1: ")
nota1 = leia.questionFloat()
console.log("\nNota 2: ")
nota2 = leia.questionFloat()
console.log("\nNota 3: ")
nota3 = leia.questionFloat()
console.log("\nNota 4: ")
nota4 = leia.questionFloat()

media = (nota1 + nota2 + nota3 + nota4) / 4

console.log("\nMédia Final: " + media)