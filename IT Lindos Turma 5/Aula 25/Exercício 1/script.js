var idPessoaEdit
function tabelaPessoas() {
    let url = "http://localhost:3000/pessoas"
    fetch(url).then(promisse => promisse.json()).then(pessoas => {
        for (let index = 0; index < pessoas.length; index++) {
            let htmlPessoa = `
                <td>${pessoas[index].id}</td>
                <td>${pessoas[index].nome}</td>
                <td>${pessoas[index].email}</td>
                <td>${pessoas[index].telefone}</td>
                <td>${pessoas[index].idade}</td>
                <td>${pessoas[index].cidade}</td>
                <td>${pessoas[index].estado}</td>
                <td>
                    <button class="btn btn-outline-warning" onclick="mostrarFormularioEdicao(${pessoas[index].id})">Editar</button>
                </td>
                <td>
                    <button class="btn btn-outline-danger" onclick="deletarPessoa('${pessoas[index].id}')">Deletar</button>
                </td>
            `
            document.getElementById('corpoTabela').innerHTML += htmlPessoa
        }
    })
}

tabelaPessoas()

function deletarPessoa(idPessoa) {
    document.getElementById('corpoTabela').innerHTML = ''
    let url = `http://localhost:3000/pessoas/${idPessoa}`
    fetch(url, {
        method: 'DELETE'
    }).then(promisse => promisse.json()).then(pessoa => {
        tabelaPessoas()
    })
}

function criarPessoa() {
    let url = `http://localhost:3000/pessoas`
    let pessoaParaCadastro = {
        nome: document.getElementById('input-nome').value,
        email: document.getElementById('input-email').value,
        telefone: Number(document.getElementById('input-telefone').value),
        idade: Number(document.getElementById('input-idade').value),
        cidade: document.getElementById('input-cidade').value,
        estado: document.getElementById('input-estado').value,
    }
    let config = {
        //A construção do meu obj de configurações tem 3 propriedades: method,headers e body, sendo apenas o headers um objeto e os outros apenas a transformação do meu objeto que está sendo enviado para json (JSON.stringify) e meu body o objeto que vou enviar.
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pessoaParaCadastro)
    }
    fetch(url, config).then(promisse => promisse.json()).then(pessoa => {
        console.log(`Pessoa: ${pessoa} Adicionada`)
        tabelaPessoas()
    })
}





function editarPessoa() {
    document.getElementById('corpoTabela').innerHTML = ''
    let pessoaEditada = {
        nome: document.getElementById('input-nomeEdit').value,
        email: document.getElementById('input-emailEdit').value,
        telefone: document.getElementById('input-telefoneEdit').value,
        idade: document.getElementById('input-idadeEdit').value,
        cidade: document.getElementById('input-cidadeEdit').value,
        estado: document.getElementById('input-estadoEdit').value,
    }
    let url = `http://localhost:3000/pessoas/${idPessoaEdit}`
    let config = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pessoaEditada)
    }
    fetch(url, config).then(promisse => promisse.json()).then(pessoa => {
        console.log(`${pessoa} atualizada`)
        tabelaPessoas()
    })
}
function mostrarFormularioEdicao(idPessoa) {
    document.getElementById('formularioEditInvisivel').style.display = 'block'
    idPessoaEdit = idPessoa
    fetch(`http:localhost:3000/pessoas/${idPessoa}`).then(promisse => promisse.json()).then(pessoa => {
            document.getElementById('input-nomeEdit').value = pessoa.nome
            document.getElementById('input-emailEdit').value = pessoa.email
            document.getElementById('input-telefoneEdit').value = pessoa.telefone
            document.getElementById('input-idadeEdit').value = pessoa.idade
            document.getElementById('input-cidadeEdit').value =  pessoa.cidade
            document.getElementById('input-estadoEdit').value = pessoa.estado
    })
}