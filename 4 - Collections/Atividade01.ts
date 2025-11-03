import leia = require("readline-sync");

const cores : Array<string> = new Array<string>();

for(let indice = 0; indice<5; indice++){
    let valor = leia.question("Insira uma cor: ")
    cores.push(valor);
}

console.log("Listas todas as cores: ")
for (let cor of cores) {

    console.log(cor);

}

cores.sort()

console.log("Ordenar as cores: ")
for (let cor of cores) {

    console.log(cor);

}
