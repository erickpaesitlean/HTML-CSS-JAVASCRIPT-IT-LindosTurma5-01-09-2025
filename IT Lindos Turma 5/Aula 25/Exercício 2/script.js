var idPessoaEdit
var pessoasArray = []
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
                    <button class="btn btn-outline-danger" onclick="deletarPessoa('${pessoas[index].id}')">Deletar</button>
                </td>
                <td>
                    <button class="btn btn-outline-warning" onclick="armazenarId(${pessoas[index].id})">Editar</button>
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

    if(idPessoaEdit){
        url += `/${idPessoaEdit}`
        config.method = 'PUT'
    }
    fetch(url, config).then(promisse => promisse.json()).then(pessoa => {
        console.log(`Pessoa: ${pessoa} Adicionada`)
        tabelaPessoas()
    })
}

function armazenarId(idPessoa){
    idPessoaEdit = idPessoa
}



