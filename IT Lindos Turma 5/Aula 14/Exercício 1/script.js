function adicionaNoEstoque() {
    let nome = document.getElementById('campoNome').value
    let qnt = document.getElementById('campoQuantidade').value
    let itemHTML = `<li>Item: ${nome} | Estoque: ${qnt}</li>`
    if (qnt == 0) {
        document.getElementById('listaItem').innerHTML += `<li class = "vermelho">Item: ${nome} | Estoque: ${qnt}</li>`
    }else if(qnt<10){
        document.getElementById('listaItem').innerHTML += `<li class = "amarelo">Item: ${nome} | Estoque: ${qnt}</li>`
    }else if(qnt>=10){
        document.getElementById('listaItem').innerHTML += `<li class = "verde">Item: ${nome} | Estoque: ${qnt}</li>`
    }
}