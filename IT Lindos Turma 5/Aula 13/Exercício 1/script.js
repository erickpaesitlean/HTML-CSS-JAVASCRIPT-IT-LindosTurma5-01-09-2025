
var listaProdutos = []

function CadastrarProduto() {
    let inputNome = document.getElementById('input-nome').value
    let inputPreco = document.getElementById('input-preco').value
    let inputProduto = document.getElementById('input-categoria').value
    let inputEstoque = document.getElementById('input-estoque').value

    let objProduto = { nome: inputNome, preco: Number(inputPreco), categoria: inputProduto, estoque: Number(inputEstoque) }
    if ((inputNome == '' || inputPreco == '' || inputProduto == '' || inputEstoque == '') || (isNaN(inputPreco) || isNaN(inputEstoque))) {
        console.log('Você Não Está Preenchendo Todos Os Campos Ou Está Colocando Letras Nos Campos Preço E Estoque!')
    } else {
        listaProdutos.push(objProduto)
    }
    document.getElementById('resultadoOk').innerHTML = 'Produto Adicionado Com Sucesso!'
    document.getElementById('input-nome').value = ''
    document.getElementById('input-categoria').value = ''
    document.getElementById('input-estoque').value = ''
    document.getElementById('input-preco').value = ''
}

function mostrarTodosProdutos() {
    for (let cont = 0; cont < listaProdutos.length; cont++) {
        console.log(`O Item: ${listaProdutos[cont].nome} É Da Categoria: ${listaProdutos[cont].categoria} E Custa R$${listaProdutos[cont].preco.toFixed(2)} E Tem ${listaProdutos[cont].estoque} No Estoque`)
    }
}
