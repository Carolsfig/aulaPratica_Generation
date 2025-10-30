const leia = require('readline-sync')

let codigo, qtd, valor_total, preco, produto



codigo = leia.questionInt("Digite o codigo do Produto: ")
qtd = leia.questionFloat("Quantidade: ")


switch(codigo){
    case 1:
        produto = "Cachorro quente"
        preco = 10
        break;
    case 2:
        produto = "X-Salada"
        preco = 15
        break;            
    case 3:
        produto = "X-Bacon"
        preco = 18
        break;
    case 4:
        produto = "Bauru"
        preco = 12
        break;
    case 5:
        produto = "Refrigerante"
        preco = 8
        break;
    case 6:
        produto = "Suco de Laranja"
        preco = 13
        break;
    default:
        console.log("Opção Inválida - Escolha código de 1 a 6")
        process.exit();
        break;
}
valor_total = qtd * preco
console.log("Produto: " + produto)
console.log("Valor total: R$ " + valor_total)