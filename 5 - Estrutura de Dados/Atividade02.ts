import { Stack } from "./Stack";
import leia = require("readline-sync");

const pilha = new Stack<string>();

let opcao : number = -1;
let nome : string;

while(opcao != 0){
    console.log("\n------------ Menu ------------\n 1 - Adicionar Livro na Pilha\n 2 - Listar todos os Livros\n 3 - Retirar Livro da Pilha\n 0 - Sair");

    console.log("\nEntre com a opção desejada: ")
    opcao = leia.questionInt();

    switch(opcao){
    case 1:
        console.log("\nDigite o nome: ");
        nome = leia.question();
        pilha.push(nome);
        console.log("\nLivro adicionado!")
        break;
    case 2:
        if(pilha.count() == 0){
            console.log("\nA pilha está vazia!")
        }else{
            console.log("\nLista dos livros na pilha: ")
            pilha.printStack();
        }
        break;
    case 3:
        if(pilha.count() == 0){
            console.log("\nA pilha está vazia!");
        }else{
            pilha.pop();
            console.log("\nUm Livro foi retirado da pilha!")
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
