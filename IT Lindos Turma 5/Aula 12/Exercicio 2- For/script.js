function somaDeMax15Nums() {
    let listaValores = []

    for (let i = 0; i <= 15; i++) {
        let item = (prompt('Insira o valor da compra:\nCaso Queira Encerrar O Programa Digite FIM')).toUpperCase()
        if (item == 'FIM') {
            alert('Encerrado')
            i = 16
        } else {
            let precoform = parseFloat(item)
            listaValores.push(precoform)
        }
    }
    // let soma = listaValores.reduce((n1, n2) => {
    //     return n1 + n2
    // })

    let soma = 0
    for(let i = 0;i<listaValores.length;i++){
        soma = Number(soma+= listaValores[i])
    }

    console.log(`TOTAL DOS PREÇOS: R$${soma.toFixed(2)}`)
    let media = soma / listaValores.length
    console.log(`MÉDIA DOS PREÇOS: R$${media.toFixed(2)}`)

}

somaDeMax15Nums()

