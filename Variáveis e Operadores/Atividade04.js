//Importando biblioteca
const leia = require('readline-sync')

let n1, n2, n3, n4, diferenca

console.log("Numero 1: ")
n1 = leia.questionFloat()
console.log("\nNumero 2: ")
n2 = leia.questionFloat()
console.log("\nNumero 3: ")
n3 = leia.questionFloat()
console.log("\nNumero 4: ")
n4 = leia.questionFloat()

diferenca = (n1*n2)-(n3*n4)

console.log("\nDiferença: " + diferenca)