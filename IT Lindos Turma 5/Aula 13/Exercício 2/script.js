var listaProdutos = []
function adicionarLista(){
    let nomeProduto = document.getElementById('input-nome').value
    let precoProduto = document.getElementById('input-preco').value

    let objValoresProdutos = {
        nomeProduto: nomeProduto,
        precoProduto: Number(precoProduto).toFixed(2)
    }

    listaProdutos.push(objValoresProdutos)
    let soma = 0
    for(let cont = 0;cont<listaProdutos.length;cont++){
        soma += listaProdutos[cont].precoProduto
        console.log(listaProdutos)
    }
    console.log(`A SOMA DE TODOS OS ITENS É: ${soma.toFixed(2)}`)
}