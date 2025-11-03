import leia = require("readline-sync");

const setnumbers : Set<number> = new Set<number>();

for(let indice = 0; indice<10; indice++){
    let valor = leia.questionInt("Insira um numero nao repetido: ")
    setnumbers.add(valor);
}

console.log("\nListar dados do Set: ")
for(let num of setnumbers){
    console.log(num);
}
