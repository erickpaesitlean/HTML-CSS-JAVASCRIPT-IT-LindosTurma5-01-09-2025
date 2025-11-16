var idParaEditarCaso
function gerarTabelaMentores() {
    let url = `http://localhost:3000/mentores`
    fetch(url).then(promisseMentores => promisseMentores.json()).then(mentores => {
        for (let index in mentores) {
            let htmlMentores = `
                <td>${mentores[index].id}</td>
                <td>${mentores[index].nome}</td>
                <td>${mentores[index].especialidade}</td>
                <td>${mentores[index].email}</td>
                <td>${mentores[index].experiencia} Anos</td>
                <td>
                    <button class="btn btn-outline-info" onclick="guardarId('${mentores[index].id}')">Editar</button>
                </td>
                <td>
                    <button class="btn btn-outline-danger" onclick="deletarMentor('${mentores[index].id}')">Deletar</button>
                </td>
                <td>
                    <button class="btn btn-outline-warning" onclick="direcionarDetalhesMentor('${mentores[index].id}')">Ver Detalhes</button>
                </td>
            `
            document.getElementById('corpoTabela').innerHTML += htmlMentores
        }
    })
}

gerarTabelaMentores()

function deletarMentor(idMentor) {
    document.getElementById('corpoTabela').innerHTML = ''
    let url = `http://localhost:3000/mentores/${idMentor}`
    fetch(url, {
        method: 'DELETE'
    }).then(promisseDelete => promisseDelete.json()).then(mentorDeletado => {
        gerarTabelaMentores()
    })
}

function criarOuEditar() {

    if (document.getElementById('nomeMentor').value.trim() == '') {
        Swal.fire('Insira o nome do mentor!')
        return
    }
    else if(document.getElementById('especialidadeMentor').value.trim() == '') {
        Swal.fire('Insira a especialidade do mentor!')
        return
    }
    else if(document.getElementById('emailMentor').value.trim() == '') {
        Swal.fire('Insira o email do mentor!')
        return
    }
    else if(document.getElementById('experienciaMentor').value.trim() == '') {
        Swal.fire('Insira os anos de experiência!')
        return
    }
    else if(isNaN(document.getElementById('experienciaMentor').value.trim())) {
        Swal.fire('Insira os anos de experiência em números!')
        return
    }
    else if(document.getElementById('experienciaMentor').value <=0){
        Swal.fire('A experiencia deve ser mais que 0 e não pode ser negativo!')
        return
    }
   

    document.getElementById('corpoTabela').innerHTML = ''
    let obj = {
        nome: document.getElementById('nomeMentor').value,
        especialidade: document.getElementById('especialidadeMentor').value,
        email: document.getElementById('emailMentor').value,
        experiencia: document.getElementById('experienciaMentor').value
    }
    let url = `http://localhost:3000/mentores`
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
        gerarTabelaMentores()
        idParaEditarCaso = undefined
        document.getElementById('btnAcao').innerText = 'Cadastrar'
    })
    document.getElementById('nomeMentor').value = ''
    document.getElementById('especialidadeMentor').value = ''
    document.getElementById('emailMentor').value = ''
    document.getElementById('experienciaMentor').value = ''
}
function guardarId(idParaEditar) {
    idParaEditarCaso = idParaEditar
    document.getElementById('btnAcao').innerText = 'Editar'
    let url = `http://localhost:3000/mentores/${idParaEditar}`
    fetch(url).then(promisse => promisse.json()).then(mentorEditar => {

    })

}

function direcionarDetalhesMentor(idMentor) {
    window.location.href = `../PaginaDetalhesMentor/detalhesMentor.html?idMentor=${idMentor}`
}
function voltarPagina() {
    window.location.href = '../PaginaPrincipal/paginaPrincipal.html'
}
