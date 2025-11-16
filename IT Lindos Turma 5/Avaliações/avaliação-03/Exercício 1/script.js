function calcularTotal(){
    let nomeProduto = document.getElementById('input-nome').value
    let qntProduto = document.getElementById('input-qnt').value
    let precoProduto = document.getElementById('input-preco').value

    let total = Number(qntProduto * precoProduto)
    alert(`${qntProduto}KG DE ${nomeProduto} É: R$${total.toFixed(2)}`)
}



