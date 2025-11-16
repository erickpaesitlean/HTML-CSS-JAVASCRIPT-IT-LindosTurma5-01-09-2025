/*Recebe dois números
Recebe um sinal de operador
Caso receba informações inválidas, avisar o usuário onde esta errado
No final mostrar para o usuário o valor


Conversor de moeda
Pergunte ao usuário o valor em reais e para qual moeda ele quer converter:
1 → Dólar (USD$ 1  =  R$ 5.3)
2 → Euro (EU$ 1 = R$ 6.2 )
3 → Peso Argentino (ARG$ 1 = R$ 0,0035)
Calcular o valor convertido.
Mostre o resultado no console

function calculadoraMuitoFacil() {
    entrada = eval(prompt('Insira a Conta'))
    return alert(`O Resultado é: ${entrada}`)
}

function entradaDeDadosCalculadora() {
    alert('=======CALCULADORA=======')
    let num1 = Number(prompt('INSIRA O PRIMEIRO NÚMERO:').replace(',', '.'))
    if(isNaN(num1)){
        alert('Numero Um Inválido')
        return entradaDeDadosCalculadora()
    }else{
        let num2 = Number(prompt('INSIRA O SEGUNDO NÚMERO:').replace(',', '.'))
        let operacao = Number(prompt('ESCOLHA A OPERAÇÃO:\n1-SOMA\n2-SUBTRAÇÃO\n3-MULTIPLICAÇÃO\n4-DIVISÃO'))
        operacaoCalculadora(num1,num2,operacao)
    }
    
    if(isNaN(num2)){
        alert('Numero Dois Inválido')
        return entradaDeDadosCalculadora()
    }else{
        operacaoCalculadora(num1,num2,operacao)
    }
    
    
    
}
function operacaoCalculadora(num1, num2, operacao) {


    switch (operacao) {
        case 1:
            return alert(`A SOMA DE ${num1} + ${num2} É : ${num1 + num2}`)
            break;
        case 2:
            return alert(`A SUBTRAÇÃO DE ${num1} - ${num2} É : ${num1 - num2}`)
            break;
        case 3:
            return alert(`A MULTIPLICAÇÃO DE ${num1} * ${num2} É : ${num1 * num2}`)
            break;
        case 4:
            return alert(`A DIVISÃO DE ${num1} / ${num2} É : ${num1 / num2}`)


    }
}

//entradaDeDadosCalculadora()

//calculadora()






function entradaValorEmReais() {
    let valorReal = Number(prompt('INSIRA O VALOR EM REAIS:').replace(',', '.'))
    let tipoMoeda = Number(prompt('INSIRA QUAL CONVERSÃO DE MOEDA DESEJA FAZER:\n1-DÓLAR\n2-EURO\n3-PESO ARGENTINO'))
    calculosMoedas(valorReal.toFixed(2), tipoMoeda)
}

function calculosMoedas(valorReal, tipoMoeda) {
    let calculoDolar = valorReal / 5.30
    let calculoEuro = valorReal / 6.25
    let calculoPesoArgentino = valorReal / 0.0036
    switch (tipoMoeda) {
        case 1:
            return alert(`A CONVERSÃO DE R$${valorReal} REAIS em DÓLAR É: $${calculoDolar.toFixed(2)}`)
        case 2:
            return alert(`A CONVERSÃO DE R$${valorReal} REAIS em EURO É: €${calculoEuro.toFixed(2)}`)
        case 3:
            return alert(`A CONVERSÃO DE R$${valorReal} REAIS EM PESO ARGENTINO É: ARS ${calculoPesoArgentino.toFixed(2)}`)
        default: alert('OPÇÃO INVÁLIDA! CLIQUE OK PARA INSERIR NOVAMENTE!'), entradaValorEmReais()
        
    }
}



entradaValorEmReais()*/
function receberValor(){
    
    let valor1 = Number(prompt('Insira o primeiro número'))
    let valor2 = Number(prompt('Insira o segundo número'))
    let operacao = Number(prompt('ESCOLHA A OPERAÇÃO:\n1-SOMA\n2-SUBTRAÇÃO\n3-MULTIPLICAÇÃO\n4-DIVISÃO'))
    trataValores(valor1,valor2,operacao)

}
function trataValores(valor1,valor2,operacao){
    let operacoesObj = {
        soma: function(){
           let soma = valor1 + valor2
           return alert(`A SOMA DE ${valor1} + ${valor2} É: ${soma}`)
            
        },
        subtracao: function(){
            let subtracao = valor1 - valor2
            return alert(`A SUBTRAÇÃO DE ${valor1} - ${valor2} É: ${subtracao}`)
        },
        multiplicacao: function(){
            let multiplicacao = valor1*valor2
            return alert(`A MULTIPLICAÇÃO DE ${valor1} * ${valor2} É: ${multiplicacao}`)
        },
        divisao: function(){
            let divisao = valor1 / valor2
            return alert(`A DIVISÃO DE ${valor1} / ${valor2} É: ${divisao}`)
        }

    }
    switch(operacao){
        case 1:
            return operacoesObj.soma()
        case 2:
            return operacoesObj.subtracao()
        case 3: 
            return operacoesObj.multiplicacao()
        case 4: 
            return operacoesObj.divisao()
            
    }
}

receberValor()







