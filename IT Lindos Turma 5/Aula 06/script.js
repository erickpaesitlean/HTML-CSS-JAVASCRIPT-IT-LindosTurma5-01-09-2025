//Manipulação de dados
//Number
var numero = 20
console.log(numero.toString())
console.log(numero.toFixed())
console.log(numero)

//String
var nome = 'Erick'
console.log(nome.length)
console.log(nome.indexOf('ck'))
console.log(nome.indexOf('Erick'))
console.log(nome.indexOf('Erick '))
console.log(nome.includes("Eri"))
//PRECISA LOCALIZAR OU SAIBA SE TEM OU NÃO, O INDEXOF E O INCLUDES SAO OPÇÕES PARA ESSES PROBLEMAS

//Transformações de String
console.log(nome.toUpperCase())//Maiúsculo
console.log(nome.toLowerCase())//Minúsculo
var nomeComEspaco = '   ERICK    '
console.log(nomeComEspaco.trim().length)
var texto = 'Ola mundo, de oi para o mundo'
console.log(texto.replace('mundo','Planeta')) //TROCA A PALAVRA SELECIONADA 
console.log(texto.replaceAll('mundo','Planeta'))//TROCA TODAS AS PALAVRAS SELECIONADAS

//Exercício da linha 1 com replace
/*var totalCompra = Number(prompt('Qual o total da compra?').replace(',','.'))
console.log('Você ganhou '+totalCompra*2+" Pontos")*/


//EXERCICIOS PARA TREINAR O REPLACE 

var nomeProduto = prompt('Insira o nome do produto').toLowerCase()
var nomeErrado = nomeProduto.replace('tomat','tomate').replace('alfaci','alface').replace('primenta','pimenta').replace('amburguer','hamburguer')
alert(nomeErrado)


var critica = prompt('Insira sua critica sobre a página').toLowerCase()
formatado = alert(critica.replace(/fdp|krl|crl|fodeo|vagabundo|lixo|imundo/g,"****************************************************"))

