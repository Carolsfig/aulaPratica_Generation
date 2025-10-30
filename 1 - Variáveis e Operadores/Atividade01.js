// Importando a biblioteca
const leia = require('readline-sync')

let salario, abono, novosalario

// Entrada dos dados
console.log("Digite o salário: ")
salario = leia.questionFloat()

console.log("\nDigite o abono: ")
abono = leia.questionFloat()

novosalario = salario + abono

console.log("\nNovo salário: " + novosalario)