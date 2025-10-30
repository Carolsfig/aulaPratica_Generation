// Importando biblioteca
const leia = require('readline-sync')

let salariobruto, addnoturno, horasextras, descontos, salarioliquido

console.log("Salário Bruto: ")
salariobruto = leia.questionFloat()
console.log("\nAdicional noturno: ")
addnoturno = leia.questionFloat()
console.log("\nHoras extras: ")
horasextras = leia.questionFloat()
console.log("\nDescontos: ")
descontos = leia.questionFloat()

salarioliquido = salariobruto + addnoturno + (horasextras*5) - descontos

console.log("\nSalário Liquido: " + salarioliquido)