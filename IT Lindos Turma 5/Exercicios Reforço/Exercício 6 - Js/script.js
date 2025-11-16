var totalCompra = Number(prompt('Insira o valor gasto'))
alert('Você recebeu '+totalCompra*2+" pontos por comprar no nosso estabelecimento, consulte para saber seus benefícios!")

alert('Calculador De IMC')
var altura = Number(prompt('Insira sua altura'))
var peso = Number(prompt('Insira seu peso'))
var imcFormula = peso/(altura^2)
alert('Seu IMC é: '+imcFormula.toFixed(2))