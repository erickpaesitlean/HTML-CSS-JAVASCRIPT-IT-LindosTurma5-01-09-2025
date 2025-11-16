// Date - Data
// Quando criamos uma nova data com o Date, estamos criando uma INSTÂNCIA do tipo de objeto
// com a classe Date. 
// Isso é uma das bases da POO ou OOP (Programação Orientada a Objeto ou Object Orientated Program)

// Cria um objeto com padrão de data, com métodos e propriedades
var agora = new Date() // Retorna uma data do AGORA

var comecoTurma5 = new Date(2025, 8, 1) // ano, mes, dia

var comecoTurma5ComHoras = new Date(2025, 8, 1, 9, 30, 40) // ano, mes, dia, hora, minuto, segundo

var dataNatal = new Date('2025-12-25')

var dataAniversarioSantoAndre = new Date('2025-04-08T12:00:00.000Z')

console.log(comecoTurma5ComHoras.getFullYear()) //2025
console.log(comecoTurma5ComHoras.getMonth()) // 8 (Setembro)
console.log(comecoTurma5ComHoras.getDate()) // 1
console.log(comecoTurma5ComHoras.getDay()) // 1 (Segunda-feira)

console.log(comecoTurma5ComHoras.getHours()) // 9
console.log(comecoTurma5ComHoras.getMinutes()) // 30
console.log(comecoTurma5ComHoras.getSeconds()) // 40

console.log(comecoTurma5ComHoras.toDateString()) // 'Mon Sep 01 2025'
console.log(comecoTurma5ComHoras.toLocaleDateString('pt-BR')) // '01/09/2025'

console.log( comecoTurma5ComHoras.toISOString() ) // '2025-09-01T12:30:40.000Z'


// Dividir string em array
function pegaDataAniversario(){
    let campoAniversario = document.getElementById('campoAniversario').value
    let dataDividida = campoAniversario.split('-')
    console.log(dataDividida)
    console.log( `${dataDividida[2]}/${dataDividida[1]}/${dataDividida[0]}` ) // 25/12/2025
    console.log(dataDividida.reverse().join('/')) // 25/12/2025
}


// Faça uma página onde o usuário informe a data de nascimento e calcule sua idade com base
// no ano atual



// Crie uma página que exiba na tela a data atual no formato:
// "Hoje é DIA de MÊS POR EXTENSO de ANO"
// Ex: "Hoje é 11 de Setembro de 2025"