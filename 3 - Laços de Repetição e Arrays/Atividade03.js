const leia = require("readline-sync")

let idade, menor, maior
idade = 0
menor = 0
maior = 0

while(idade >= 0){
    idade = leia.questionInt("\nDigite uma idade: ")
    if((idade < 21) && (idade > 0)){
        menor += 1
    }else if(idade > 51){
        maior += 1
    }
}

console.log(`\nTotal de pessoas menores de 21 anos: ${menor}`)
console.log(`\nTotal de pessoas maiores de 50 anos: ${maior}`)