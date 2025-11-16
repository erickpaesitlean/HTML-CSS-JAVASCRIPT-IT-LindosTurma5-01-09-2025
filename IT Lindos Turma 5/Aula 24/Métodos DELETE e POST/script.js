function gerarLista(){
    document.getElementById('corpoTabela').innerHTML = ''
    let url = `http://localhost:3000/produtos`
    fetch(url).then(promisse => promisse.json()).then(produtos=>{
        for(let i=0;i<produtos.length;i++){
            let htmlLista = `
                <td>${produtos[i].id}</td>
                <td>${produtos[i].nome}</td>
                <td>${produtos[i].preco}</td>
                <td>${produtos[i].categoria}</td>
                <td>${produtos[i].estoque}</td>
                <td>
                    <button onclick="deletarProduto('${produtos[i].id}')">Deletar</button>
                </td>
            `
            document.getElementById('corpoTabela').innerHTML += htmlLista
        }
    })
}

gerarLista()

function deletarProduto(idProduto){
    let url = `http://localhost:3000/produtos/${idProduto}`
    fetch(url,{
        method: 'DELETE'
    }).then(promisse=>promisse.json()).then(item=>{
        console.log(item)
        gerarLista()
    })
}

function criaProduto(){
    let obj = {
        nome: document.getElementById('inputNome').value,
        preco: Number(document.getElementById('inputPreco').value),
        categoria: document.getElementById('inputCategoria').value,
        estoque: Number(document.getElementById('inputEstoque').value)
    }
    let url = `http://localhost:3000/produtos`
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(obj)
    }
    fetch(url,options).then(promisse=>promisse.json()).then(itemAdicionado=>{
        console.log('Produto Adicionado')
        console.log(itemAdicionado)
        alert('Produto Adicionado')
        gerarLista()
    })
}