function somaSubMultDiv(){
    alert('=======INSIRA DOIS NÚMEROS PARA OBTER A ADIÇÃO,SUBTRAÇÃO,MULTIPLICAÇÃO E DIVISÃO DELES')
    let n1 = Number(prompt('Insira o primeiro número').replace(',','.'))
    let n2 = Number(prompt('Insira o segundo número').replace(',','.'))
    if(isNaN(n1)==true || isNaN(n2)==true){
        alert('Você não digitou um número')
    }else{
        let soma = n1+n2
        let subtracao = n1-n2
        let multiplicacao = n1*n2
        let divisao = n1/n2
        alert(`A SOMA DE: ${n1} + ${n2} É: ${soma}\nA SUBTRAÇÃO DE: ${n1} - ${n2} É: ${subtracao}\nA MULTIPLICAÇÃO DE: ${n1} * ${n2} É: ${multiplicacao}\nA DIVISÃO DE: ${n1} / ${n2} É: ${divisao.toFixed(2)}`)
    }
}

function menuOperacoes(opcao,n1,n2){
    opcao = Number(prompt('ESCOLHA A OPÇÃO DESEJADA:\n1-ADIÇÃO\n2-SUBTRAÇÃO\n3-MULTIPLICAÇÃO\n4-DIVISÃO'))
    n1 = Number(prompt('Insira o primeiro número').replace(',','.'))
    n2 = Number(prompt('Insira o segundo número').replace(',','.'))
    if(opcao==1){
        alert(n1+n2)
    }else if(opcao==2){
        alert(n1-n2)
    }else if(opcao==3){
        alert(n1*n2)
    }else if(opcao==4){
        alert(n1/n2)
    }else{
        alert('Opção Invalida')
    }
}

function somaDoisNumeros(num1,num2) {
    return num1+num2
}



function imprimirResultado(aluno,nota1,nota2) {
    passouOuNao = resolverMedia(nota1,nota2)
    return `${aluno} foi: ${passouOuNao}`
}
function resolverMedia(x,y) {
    let media = (x+y)/2
    if(media>=6){
        return 'Aprovado'
    }else{
        return 'Reprovado'
    }
}

function retornarCategoriaIMC(peso,altura){
    tabelaClassificacao = calcularIMC(peso,altura)
    return tabelaClassificacao
}
function calcularIMC(p,a) {
    let calculoImc = p / (a*a)
    let imc = calculoImc.toFixed(2)
    if(imc<18.5){
        return `Sua Altura: ${a}\nSeu Peso: ${p}\nSeu IMC é: ${imc} e Você Está Abaixo do Peso`
    }else if(imc>=18.5 && imc<=24.9){
        return `Sua Altura: ${a}\nSeu Peso: ${p}\nSeu IMC é: ${imc} e Você Está com Peso Normal`
    }else if(imc>=25 && imc<=29.9){
        return `Sua Altura: ${a}\nSeu Peso: ${p}\nSeu IMC é: ${imc} e Você Está com Sobrepeso`
    }else if(imc>=30 && imc <=34.9){
        return `Sua Altura: ${a}\nSeu Peso: ${p}\nSeu IMC é: ${imc} e Você Está com Obesidade Grau 1`
    }else if(imc>=35 && imc<=39.9){
        return `Sua Altura: ${a}\nSeu Peso: ${p}\nSeu IMC é: ${imc} e Você Está com Obesidade Grau 2`
    }else{
        return `Sua Altura: ${a}\nSeu Peso: ${p}\nSeu IMC é: ${imc} e Você Está com Obesidade Grau 3`
    }
}

var altura = Number(prompt('Insira sua Altura'))
var peso = Number(prompt('Insira seu Peso:'))
alert(retornarCategoriaIMC(peso,altura))