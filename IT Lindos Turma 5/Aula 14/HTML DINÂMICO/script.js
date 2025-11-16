function adicionaNoEstoque(){
    let nome = document.getElementById('campoNome').value
    let qnt = document.getElementById('campoQuantidade').value
    let itemHTML = `<li>Item: ${nome} | Estoque: ${qnt}</li>`
    document.getElementById('listaItem').innerHTML += itemHTML
}