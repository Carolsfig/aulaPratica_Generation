import { Queue } from "./Queue";
import leia = require("readline-sync");

const fila = new Queue<string>()

let opcao : number = -1;
let nome : string;

while(opcao != 0){
    console.log("\n------------ Menu ------------\n 1 - Adicionar Cliente na Fila\n 2 - Listar todos os Clientes\n 3 - Retirar Cliente da Fila\n 0 - Sair");

    console.log("\nEntre com a opção desejada: ")
    opcao = leia.questionInt();

    switch(opcao){
    case 1:
        console.log("\nDigite o nome: ");
        nome = leia.question();
        fila.enqueue(nome);
        console.log("\nCliente adicionado!")
        break;
    case 2:
        if(fila.count() == 0){
            console.log("\nA fila está vazia!");
        }else{
            console.log("\nLista de todos os clientes na fila: ")
            fila.printQueue();
        }
        break;
    case 3:
        if(fila.count() == 0){
            console.log("\nA fila está vazia!");
        }else{
            fila.dequeue();
            console.log("\nUm cliente foi removido da fila!");
        }
        break;
    case 0:
        console.log("\nEncerrando...")
        process.exit(0);
        break;
    default:
        console.log("\nOpção Inválida. Encerrando...");
        process.exit(1);
        break;
    }

}



