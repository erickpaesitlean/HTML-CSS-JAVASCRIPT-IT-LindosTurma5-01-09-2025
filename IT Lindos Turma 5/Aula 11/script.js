var nomesTurma5 = [
    'ERICK',
    'RENAN J,',
    'RENAN P',
    'THEO',
    'LUCAS',
    'GABRIEL',
    'SEPHORA',
    'LEONARDO',
    'CRISTIANO',
    'VICTOR',
    'VINICIUS',
    'PEDRO'
]

console.log(nomesTurma5[nomesTurma5.length -1])// RETORNA O VALOR DO ULTIMO ITEM DO ARRAY, PARA PEGAR O INDICE BASTA NAO PASSAR INDICE
console.log(nomesTurma5.indexOf('ERICK'))// 0
//SE ELE NAO ENCONTRAR O VALOR PASSADO PARA O INDEXOF, IRÁ RETORNAR -1
console.log(nomesTurma5.indexOf('Erick'))//-1
console.log(nomesTurma5.includes('THEO')) //true
console.log(nomesTurma5.includes('Theo')) //false

//Insiro um Valor
nomesTurma5.push('PINHEIRO')
console.log(nomesTurma5)
nomesTurma5.unshift('BIRA')
console.log(nomesTurma5)
nomesTurma5.pop()// Remove o ultimo item
console.log(nomesTurma5)
nomesTurma5.shift()// Remove o primeiro item
console.log(nomesTurma5)


console.log(nomesTurma5.join())

