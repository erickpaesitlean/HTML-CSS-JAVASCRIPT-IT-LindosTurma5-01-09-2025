var listaNumeros = []

function soma10numeros() {
    let contador = 10
    let soma = 0
    while (listaNumeros.length < 10) {
        let pegarNumero = Number(prompt('Insira Um Número:'))
        listaNumeros.push(pegarNumero)
        contador++
    }

    contador = 0
    while(contador < listaNumeros.length){
        soma+= listaNumeros[contador]
        contador++
    }
    console.log(soma)



    /*let somaArray = listaNumeros.reduce((n1,n2)=>{
        return n1+n2                                     //Soma com método reduce() Pega os 2 Primeiros numeros e soma com o próximo até nao sobrar nenhum, so aceita dois valores como paranmetros!
        [1,2,3,4,5]
    [3,3,4,5]
    [6,4,5]
    [10,5]
       15
    }) // Isso é uma Função de Callback


    console.log(`A SOMA DE TODOS OS NÚMEROS DO ARRAY É: ${somaArray}`)*/  
}


console.log(listaNumeros)
soma10numeros()

