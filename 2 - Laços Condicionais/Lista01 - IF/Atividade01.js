// Importando a biblioteca
const leia = require('readline-sync')

let A, B, C, soma

A = leia.questionInt("Digite o numero A: ")

B = leia.questionInt("Digite o numero B: ")

C = leia.questionInt("Digite o numero C: ")

soma = A+B



if(soma>C){
    console.log(+ A + " + " + B + " = " + soma + " > " + C)
    console.log("A Soma de A + B é Maior do que C")
} else if(soma == C){
    console.log(+ A + " + " + B + " = " + soma + " = " + C)
    console.log("A Soma de A + B é Igual a C")
}else{
    console.log(+ A + " + " + B + " = " + soma + " < " + C)
    console.log("A Soma de A + B é Menor do que C")
}

