var idPessoa
function gerarTabelaDepartamentos() {
    let url = `http:/localhost:3000/departamentos`
    fetch(url).then(promisse => promisse.json()).then(departamentos => {
        for (let index in departamentos) {
            let htmlDepartamentos = `
                <td>${departamentos[index].id}</td>
                <td>${departamentos[index].nome}</td>
                <td>${departamentos[index].local}</td>
                <td>
                    <button onclick="armazenarId('${departamentos[index].id}')">Editar</button>
                </td>
                <td>
                    <button onclick="deletarDepartamento('${departamentos[index].id}')">Deletar</button>
                </td>
            `
            document.getElementById('corpoTabela').innerHTML += htmlDepartamentos
        }
    })
}
function deletarDepartamento(idDepartamento) {
    fetch(`http://localhost:3000/funcionarios?departamentoId=${idDepartamento}`).then(promessa => promessa.json()).then(funcionarios => {
        let temFuncionariosAtivos = false
        for (let index in funcionarios) {
            if (idDepartamento == funcionarios[index].departamentoId) {
                temFuncionariosAtivos = true
            }
        }

        if (temFuncionariosAtivos == true) {
            alert('Voce nao pode deletar um departamento com funcionarios ativos')
        } else {
            document.getElementById('corpoTabela').innerHTML = ''
            let url = `http://localhost:3000/departamentos/${idDepartamento}`
            fetch(url, {
                method: 'DELETE'
            }).then(promisse => promisse.json()).then(departamentos => {
                gerarTabelaDepartamentos()
            })
        }


    })

}

function criarOuEditar() {
    document.getElementById('corpoTabela').innerHTML = ''
    let url = `http://localhost:3000/departamentos`
    let nomeDep = document.getElementById('inputNome').value
    let nomeLocal = document.getElementById('inputLocal').value
    if (nomeDep == '') {
        alert('Você não pode deixar o nome do departamento em branco')
        gerarTabelaDepartamentos()
    }else if(nomeLocal.length < 3){
        alert('Você deve inserir um local com mais de 2 caracteres')
        gerarTabelaDepartamentos()
    }else{
        let obj = {
        nome: nomeDep,
        local: nomeLocal
    }
    let config = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }

    if (idPessoa) {
        url += `/${idPessoa}`
        config.method = 'PUT'
    }

    fetch(url, config).then(promisse => promisse.json()).then(departamento => {
        gerarTabelaDepartamentos()
        idPessoa = undefined
    })
    }
    

    
}
function armazenarId(idPessoaEditar) {
    idPessoa = idPessoaEditar
}

gerarTabelaDepartamentos()

