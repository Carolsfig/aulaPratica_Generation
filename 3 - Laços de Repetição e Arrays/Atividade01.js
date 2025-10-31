const leia = require("readline-sync")

let primeiro, ultimo, qtd_multiplos

primeiro = leia.questionInt("Digite o primeiro numero do intervalo: ")
ultimo = leia.questionInt("Digite o ultimo numero do intervalo: ")

qtd_multiplos = 0

if(primeiro > ultimo){
    console.log("Intervalo Inválido!")
} else{
    for(let indice = primeiro; indice <= ultimo; indice++){
        if((indice % 3 == 0) && (indice % 5 == 0)){
            console.log(`\n${indice} é múltiplo de 3 e 5`)
            qtd_multiplos +=1
        }
    } 
    if(qtd_multiplos == 0){
    console.log("\nNão existe nenhum múltiplo de 3 e 5 nesse intervalo.")
    }
}


