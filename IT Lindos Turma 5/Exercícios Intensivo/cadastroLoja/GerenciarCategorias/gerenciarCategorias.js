var idCategoriaParaEditar 
function gerarTabelaCategorias(){
    let url = `http://localhost:3000/categorias`
    fetch(url).then(promisse=>promisse.json()).then(categorias=>{
        for(let index in categorias){
            let htmlCategorias = `
                <td>${categorias[index].id}</td>
                <td>${categorias[index].nome}</td>
                <td>
                    <button class="btn btn-outline-warning" onclick="armazenarIdCasoEditar('${categorias[index].id}')">Editar</button>
                </td>
                <td>
                    <button class="btn btn-outline-danger" onclick="deletarCategoria('${categorias[index].id}')">Deletar</button>
                </td>
            `
            document.getElementById('corpoTabela').innerHTML += htmlCategorias
        }
    })
}

gerarTabelaCategorias()

function deletarCategoria(idCategoria){
    document.getElementById('corpoTabela').innerHTML = ''
    let url = `http://localhost:3000/categorias/${idCategoria}`
    fetch(url,{
        method: 'DELETE'
    }).then(promisse=>promisse.json()).then(categoriaParaExcluir=>{
        gerarTabelaCategorias()
    })
}

function criarOuEditarCategoria(){
    document.getElementById('corpoTabela').innerHTML = ''
    let url = `http://localhost:3000/categorias`
    let obj = {
        nome: document.getElementById('inputNomeCategoria').value
    }
    let config = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }

    if(idCategoriaParaEditar){
        config.method = 'PUT'
        url += `/${idCategoriaParaEditar}`
    }

    fetch(url,config).then(promisse=>promisse.json()).then(objParaCadastrarOuEditar=>{
        console.log(`${objParaCadastrarOuEditar} Excluido`)
        gerarTabelaCategorias()
    })
}

function armazenarIdCasoEditar(idCategoria){
    idCategoriaParaEditar = idCategoria
}

function voltarPagina(){
    window.location.href = `../Pagina Inicial/paginaInicial.html`
}


