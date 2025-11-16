var produtoId
function tabelaProdutos() {
    let urlProds = `http://localhost:3000/produtos`
    let urlCats = `http://localhost:3000/categorias`
    fetch(urlProds).then(promessa => promessa.json()).then(produtos => {
        fetch(urlCats).then(promisse => promisse.json()).then(categorias => {
            let nomeCategoria = ''
            let somaEstoquePorItem = 0
            for (let index in produtos) {
                for (let indexD in categorias) {
                    if (produtos[index].categoriaId == categorias[indexD].id) {
                        nomeCategoria = categorias[indexD].nome
                        break
                    }
                }
                somaEstoquePorItem += Number(produtos[index].preco) * Number(produtos[index].estoque)
                let htmlProds = `
                    <td>${produtos[index].id}</td>
                    <td>${produtos[index].nome}</td>
                    <td>${nomeCategoria}</td>
                    <td>${produtos[index].preco}</td>
                    <td>${produtos[index].tamanho}</td>
                    <td>${produtos[index].estoque}</td>
                    <td>
                        <button class="btn btn-outline-warning" onclick="guardaIdProduto('${produtos[index].id}')">Editar</button>
                    </td>
                    <td>
                        <button class="btn btn-outline-danger" onclick="deletarProduto('${produtos[index].id}')">Deletar</button>
                    </td>
                `
                document.getElementById('corpoTabela').innerHTML += htmlProds
            }
                let htmlFoot = `
                    <td colspan="8"><strong>Total Do Estoque Em R$: ${somaEstoquePorItem.toFixed(2)}</strong></td>
                `
                document.getElementById('rodapeTabela').innerHTML = htmlFoot
        })

    })
}
tabelaProdutos()

function deletarProduto(idProduto) {
    document.getElementById('corpoTabela').innerHTML = ''
    let url = `http://localhost:3000/produtos/${idProduto}`
    fetch(url, {
        method: 'DELETE'
    }).then(promisse => promisse.json()).then(produtoDeletado => {
        console.log(produtoDeletado)
        tabelaProdutos()
    })
}

function criarOuEditar() {
    window.location.href = `../Pagina Formulario/index.html?id=${produtoId}`
}

function guardaIdProduto(idProduto) {
    produtoId = idProduto
    criarOuEditar()
}

function filtroPorCategoria() {
    document.getElementById('corpoTabela').innerHTML = ''
    let nomeCategoria = document.getElementById('inputCategoria').value
    let urlProds = `http://localhost:3000/produtos`
    let urlCats = `http://localhost:3000/categorias`
    fetch(urlProds).then(promisse => promisse.json()).then(produtos => {
        fetch(urlCats).then(promessa => promessa.json()).then(categorias => {
            let idCategoriaPorNome = ''
            for (let indexD in categorias) {
                if (nomeCategoria == categorias[indexD].nome) {
                    idCategoriaPorNome = categorias[indexD].id
                    break
                }
            }
            fetch(`http://localhost:3000/produtos?categoriaId=${idCategoriaPorNome}`).then(promisse => promisse.json()).then(produtosPorCategoria => {
                let nomeCategoriaFiltro
                for (let index in categorias) {
                    if (idCategoriaPorNome == categorias[index].id) {
                        nomeCategoriaFiltro = categorias[index].nome
                    }
                }
                for (let index in produtosPorCategoria) {
                    let htmlFiltrado = `
                        <td>${produtosPorCategoria[index].id}</td>
                        <td>${produtosPorCategoria[index].nome}</td>
                        <td>${nomeCategoriaFiltro}</td>
                        <td>${produtosPorCategoria[index].preco}</td>
                        <td>${produtosPorCategoria[index].tamanho}</td>
                        <td>${produtosPorCategoria[index].estoque}</td>
                        <td>
                            <button class="btn btn-outline-warning" onclick="guardaIdProduto('${produtos[index].id}')">Editar</button>
                        </td>
                        <td>
                            <button class="btn btn-outline-danger" onclick="deletarProduto('${produtos[index].id}')">Deletar</button>
                        </td>
                    `
                    document.getElementById('corpoTabela').innerHTML += htmlFiltrado
                }

            })
        })

    })
}

function direcionarCategoria(){
    window.location.href = `../GerenciarCategorias/gerenciarCategorias.html`
}