var url = new URLSearchParams(window.location.search)
var idParam = url.get('id')

function criarOuEditar() {
    if (idParam == 'undefined') {
        document.getElementById('form-criacao').style.display = 'flex'
        fetch("http://localhost:3000/categorias").then(promisse => promisse.json()).then(categorias => {
            for (let index in categorias) {
                let htmloption = `
                <option value="${categorias[index].nome}">${categorias[index].nome}</option>
                `
                document.getElementById('selectInputCreate').innerHTML += htmloption
            }
        })
    } else {
        document.getElementById('form-edicao').style.display = 'flex'
        fetch("http://localhost:3000/categorias").then(promisse => promisse.json()).then(categorias => {
            fetch(`http://localhost:3000/produtos/${idParam}`).then(promessa => promessa.json()).then(produtoParaEditar => {
                for (let index in categorias) {
                    let htmloption = `
                <option value="${categorias[index].nome}">${categorias[index].nome}</option>
                `
                    document.getElementById('selectInputEdit').innerHTML += htmloption
                }
                document.getElementById('inputNomeEdit').value = produtoParaEditar.nome
                document.getElementById('inputPrecoEdit').value = produtoParaEditar.preco
                document.getElementById('inputTamanhoEdit').value = produtoParaEditar.tamanho
                document.getElementById('inputEstoqueEdit').value = produtoParaEditar.estoque
                let categoriaDoProduto
                for (let index in categorias) {
                    if (produtoParaEditar.categoriaId == categorias[index].id) {
                        categoriaDoProduto = categorias[index].nome
                    }
                }
                document.getElementById('selectInputEdit').value = categoriaDoProduto
            })
        })
    }
}
criarOuEditar()

function editarProduto() {
    if (idParam == 'undefined') {
        let inputNomeCreate = document.getElementById('inputNomeCreate').value
        let inputSelectCreate = document.getElementById('selectInputCreate').value
        let inputPrecoCreate = document.getElementById('inputPrecoCreate').value
        let inputTamanhoCreate = document.getElementById('inputTamanhoCreate').value
        let inputEstoqueCreate = document.getElementById('inputEstoqueCreate').value
        if (inputNomeCreate == '') {
            alert('Nome Vazio')
            return
        }
        if (inputSelectCreate == 'Categorias') {
            alert('Você deve selecionar uma categoria')
            return
        }
        if (inputPrecoCreate == '') {
            alert('Você deve inserir um preço no produto!')
            return
        }
        if (inputTamanhoCreate == '') {
            alert('Você deve inserir um tamanho para o produto')
            return
        }
        if (inputEstoqueCreate == '') {
            alert('Você deve inserir um valor no estoque do produto!')
            return
        }
    } else {
        let inputNomeEdit = document.getElementById('inputNomeEdit').value
        let inputSelectEdit = document.getElementById('selectInputEdit').value
        let inputPrecoEdit = document.getElementById('inputPrecoEdit').value
        let inputTamanhoEdit = document.getElementById('inputTamanhoEdit').value
        let inputEstoqueEdit = document.getElementById('inputEstoqueEdit').value

        if (inputNomeEdit == '') {
            alert('Você deve inserir um nome no produto!')
            return
        }
        if (inputSelectEdit == 'Categorias') {
            alert('Você deve selecionar uma categoria')
            return
        }
        if (inputPrecoEdit == '') {
            alert('Você deve inserir um preço no produto!')
            return
        }
        if (inputTamanhoEdit == '') {
            alert('Você deve inserir um tamanho para o produto')
            return
        }
        if (inputEstoqueEdit == '') {
            alert('Você deve inserir um valor no estoque do produto!')
            return
        }
    }
    let url = `http://localhost:3000/produtos`
    let nomeCategoria = document.getElementById('selectInputEdit').value
    let nomeCategoriaInputCreate = document.getElementById('selectInputCreate').value
    let idCategoria









    fetch(`http://localhost:3000/categorias?nome=${nomeCategoria}`).then(promisse => promisse.json()).then(categoria => {
        fetch("http://localhost:3000/categorias").then(promessa => promessa.json()).then(categorias => {
            let categoriaIdParaCriar
            if (categoria.length == 0) {
                idCategoria = nomeCategoriaInputCreate
                console.log(idCategoria)
                for (let index in categorias) {
                    if (idCategoria == categorias[index].nome) {
                        categoriaIdParaCriar = categorias[index].id
                    }
                }

            } else {
                idCategoria = categoria[0].id
            }

            let produtoParaEditar = {
                nome: document.getElementById('inputNomeEdit').value,
                categoriaId: idCategoria,
                preco: document.getElementById('inputPrecoEdit').value,
                tamanho: document.getElementById('inputTamanhoEdit').value,
                estoque: document.getElementById('inputEstoqueEdit').value
            }

            let produtoParaCriar = {
                nome: document.getElementById('inputNomeCreate').value,
                categoriaId: categoriaIdParaCriar,
                preco: document.getElementById('inputPrecoCreate').value,
                tamanho: document.getElementById('inputTamanhoCreate').value,
                estoque: document.getElementById('inputEstoqueCreate').value
            }

            let config = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(produtoParaCriar)
            }

            if (idParam != 'undefined') {
                url += `/${idParam}`
                config.method = 'PUT'
                config.body = JSON.stringify(produtoParaEditar)
            }
            fetch(url, config).then(promisse => promisse.json()).then(objEdicao => {
                window.location.href = `../Pagina Inicial/paginaInicial.html`
            })
        })




    })

}

function voltarPagina(){
    window.location.href = `../Pagina Inicial/paginaInicial.html`
}
