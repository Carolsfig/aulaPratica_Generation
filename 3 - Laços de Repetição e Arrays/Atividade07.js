const leia = require("readline-sync")

let vetor = ["2", "5", "1", "3", "4", "9", "7", "8", "10", "6"], numero, num;

numero = leia.questionInt("Digite o numero que voce deseja encontrar: ")

num = 0

for(let indice = 0; indice < 10; indice++){
    if(numero == vetor[indice]){
        console.log(`O número ${numero} esta localizado na posição: ${indice + 1}`)
        num +=1
    }
}

if(num == 0){
    console.log(`\nO número ${numero} não foi localizado!`)
}