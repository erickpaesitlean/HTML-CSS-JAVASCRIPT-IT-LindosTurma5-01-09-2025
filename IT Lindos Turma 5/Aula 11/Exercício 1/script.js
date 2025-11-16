function treinandoArray(){
    let carros = []
    let nomeCarro1 = prompt('Insira um nome de um carro:')
    carros.push(nomeCarro1)
    alert(carros)
    console.log(carros)
    let nomeCarro2 = prompt('Insira mais um nome de um carro:')
    carros.push(nomeCarro2)
    alert(carros)
    console.log(carros)

}


var carrinhosArray = []
function carrinhos(){
    let carro1 = prompt('Insira o nome do carro')
    if(carrinhosArray.includes(carro1)){
        alert('Ja existe esse carro no sistema!')
    }else{
        carrinhosArray.push(carro1)
        console.log(carrinhosArray)
    }

}

/*var frutas = ['Maça','Banana','Pera','Abacate','Arroz']
    let contador = 0
    //Enquanto a condição dos parenteses do while for true, será repetido o códico dentro dele
    while(frutas.length > contador){
        console.log(`A Fruta ${frutas[contador]} Está na Lista`)
        contador++
    }
*/

function listarCarros(){
    let contador = 0
    while(carrinhosArray.length>contador){
        console.log(`O Carro ${carrinhosArray[contador]} Está na Lista!`)
        contador++
    }
}

carrinhos()
carrinhos()
carrinhos()
carrinhos()
carrinhos()
listarCarros()






