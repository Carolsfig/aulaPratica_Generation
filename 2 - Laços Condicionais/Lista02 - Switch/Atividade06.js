const leia = require('readline-sync')

let nome, cargo, salario, codigo, reajuste

nome = leia.question("Nome do Colaborador: ")
codigo = leia.questionInt("Codigo do cargo: ")
salario = leia.questionFloat("Salario: ")


switch(codigo){
    case 1:
        cargo = "Gerente"
        reajuste = 0.10
        break;
    case 2:
        cargo = "Vendedor"
        reajuste = 0.07
        break;            
    case 3:
        cargo = "Supervisor"
        reajuste = 0.09
        break;    
    case 4:
        cargo = "Motorista"
        reajuste = 0.06
        break;    
    case 5:
        cargo = "Estoquista"
        reajuste = 0.05
        break;    
    case 6:
        cargo = "Técnico de TI"
        reajuste = 0.08
        break;    
    default:
        console.log("Opção Inválida - Escolha código de 1 a 6")
        process.exit();
        break;
}

salario = salario + (reajuste * salario)

console.log("Nome do colaborador: " + nome)
console.log("Cargo: " + cargo)
console.log("Salário: R$ " + salario)
