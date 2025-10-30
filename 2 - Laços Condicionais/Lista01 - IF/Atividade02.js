const leia = require('readline-sync')

let num

num = leia.questionInt("Digite um numero: ")

if ((num % 2 == 0)){
    if(num<0){
        console.log("O numero é par e negativo")
    } else{
        console.log("O numero é par e positivo")
    }
}else if((num % 2 != 0)){
    if(num<0){
        console.log("O numero é ímpar e negativo")
    } else{
        console.log("O numero é ímpar e positivo")
    }
}

    
