var idParaEditarCaso
function gerarTabelacardapio() {
    let url = `http://localhost:3000/cardapio`
    fetch(url).then(promissecardapio => promissecardapio.json()).then(cardapio => {
        for (let index in cardapio) {
            let htmlcardapio = `
                <td>${cardapio[index].id}</td>
                <td>${cardapio[index].nome}</td>
                <td>${cardapio[index].categoria}</td>
                <td>${cardapio[index].preco}</td>
                <td>
                    <button class="btn btn-outline-info" onclick="guardarId('${cardapio[index].id}')">Editar</button>
                </td>
                <td>
                    <button class="btn btn-outline-danger" onclick="deletarCardapio('${cardapio[index].id}')">Deletar</button>
                </td>
            `
            document.getElementById('corpoTabela').innerHTML += htmlcardapio
        }
    })
}

gerarTabelacardapio()

function deletarCardapio(idCardapio) {
    document.getElementById('corpoTabela').innerHTML = ''
    let url = `http://localhost:3000/cardapio/${idCardapio}`
    fetch(url, {
        method: 'DELETE'
    }).then(promisseDelete => promisseDelete.json()).then(cardapioDeletado => {
        gerarTabelacardapio()
    })
}

function criarOuEditar() {

    if(document.getElementById('nomeCardapio').value.trim() == ''){
        alert('Insira um nome para o produto!')
        return
    }
    if(document.getElementById('categoriaCardapio').value.trim() == ''){
        alert('Insira uma categoria para o produto!')
        return
    }
    if(document.getElementById('precoCardapio').value.trim() == ''){
        alert('Insira um preço para o produto!')
        return
    }
    if(document.getElementById('precoCardapio').value.trim() <0){
        alert('O preço do produto deve ser um número positivo!')
        return
    }

    document.getElementById('corpoTabela').innerHTML = ''
    let obj = {
        nome: document.getElementById('nomeCardapio').value,
        categoria: document.getElementById('categoriaCardapio').value,
        preco: document.getElementById('precoCardapio').value,
    }
    let url = `http://localhost:3000/cardapio`
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
        gerarTabelacardapio()
        idParaEditarCaso = undefined
        document.getElementById('btnAcao').innerText = 'Cadastrar'
    })
    document.getElementById('nomeCardapio').value = ''
    document.getElementById('categoriaCardapio').value = ''
    document.getElementById('precoCardapio').value = ''
}
function guardarId(idParaEditar) {
    idParaEditarCaso = idParaEditar
    document.getElementById('btnAcao').innerText = 'Editar'
    let url = `http://localhost:3000/cardapio/${idParaEditar}`
    fetch(url).then(promisse => promisse.json()).then(CardapioEditar => {

    })

}
