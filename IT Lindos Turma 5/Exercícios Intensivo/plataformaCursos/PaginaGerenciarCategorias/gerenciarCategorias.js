var idParaEditarCaso
function gerarTabelaCategorias() {
    let url = `http://localhost:3000/categorias`
    fetch(url).then(promisseCategorias => promisseCategorias.json()).then(Categorias => {
        for (let index in Categorias) {
            let htmlCategorias = `
                <td>${Categorias[index].id}</td>
                <td>${Categorias[index].nome}</td>
                <td>
                    <button class="btn btn-outline-info" onclick="guardarId('${Categorias[index].id}')">Editar</button>
                </td>
                <td>
                    <button class="btn btn-outline-danger" onclick="deletarCategoria('${Categorias[index].id}')">Deletar</button>
                </td>
            `
            document.getElementById('corpoTabela').innerHTML += htmlCategorias
        }
    })
}

gerarTabelaCategorias()

function deletarCategoria(idCategoria) {
    document.getElementById('corpoTabela').innerHTML = ''
    let url = `http://localhost:3000/categorias/${idCategoria}`
    fetch(url, {
        method: 'DELETE'
    }).then(promisseDelete => promisseDelete.json()).then(CategoriaDeletado => {
        gerarTabelaCategorias()
    })
}

function criarOuEditar() {
    if(document.getElementById('nomeCategoria').value.trim() == ''){
        Swal.fire('Você deve digitar um nome!')
        return
    }
    document.getElementById('corpoTabela').innerHTML = ''
    let obj = {
        nome: document.getElementById('nomeCategoria').value,
    }
    let url = `http://localhost:3000/categorias`
    let config = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }

    if (idParaEditarCaso) {
        config.method = 'PUT'
        url += `/${idParaEditarCaso}`
    }

    fetch(url, config).then(promisse => promisse.json()).then(objCriarOuEditar => {
        gerarTabelaCategorias()
        idParaEditarCaso = undefined
        document.getElementById('btnAcao').innerText = 'Cadastrar'
    })
    document.getElementById('nomeCategoria').value = ''
}
function guardarId(idParaEditar) {
    idParaEditarCaso = idParaEditar
    document.getElementById('btnAcao').innerText = 'Editar'
    let url = `http://localhost:3000/Categorias/${idParaEditar}`
    fetch(url).then(promisse=>promisse.json()).then(CategoriaEditar=>{

    })

}

function direcionarDetalhesCategoria(idCategoria){
    window.location.href = `../PaginaDetalhesCategoria/detalhesCategoria.html?idCategoria=${idCategoria}`
}

function voltarPagina(){
    window.location.href = '../PaginaPrincipal/paginaPrincipal.html'
}