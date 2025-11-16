var idEditFunc
function gerarTabelaFuncionarios() {
    let url = `http://localhost:3000/funcionarios`
    let urlDep = `http://localhost:3000/departamentos`
    fetch(url).then(promessa => promessa.json()).then(funcionarios => {
        fetch(urlDep).then(promisse => promisse.json()).then(departamentos => {
            let nomeDepartamento
            for (let i in funcionarios) {
                for (let j in departamentos) {
                    if (funcionarios[i].departamentoId == departamentos[j].id) {
                        nomeDepartamento = departamentos[j].nome
                    }
                }
                let htmlFunc = `
                    <td>${funcionarios[i].nome}</td>
                    <td>${funcionarios[i].cargo}</td>
                    <td>${funcionarios[i].salario}</td>
                    <td>${nomeDepartamento}</td>
                    <td>
                        <button onclick="guardarIdEdit('${funcionarios[i].id}')">Editar</button>
                    </td>
                    <td>
                        <button onclick="deletarFuncionario('${funcionarios[i].id}')">Deletar</button>
                    </td>
                `
                document.getElementById('corpoTabela').innerHTML += htmlFunc
            }

            document.getElementById('selectInput').innerHTML = ''

            for (let index in departamentos) {
                let htmlOptions = `
                    <option value="${departamentos[index].nome}">${departamentos[index].nome}</option>
                `
                document.getElementById('selectInput').innerHTML += htmlOptions
            }

        })
    })
}

gerarTabelaFuncionarios()

function filtroDepartamento() {
    document.getElementById('corpoTabela').innerHTML = ''
    let dep = document.getElementById('inputDep').value
    let url = `http://localhost:3000/departamentos?nome=${dep}`
    fetch(url).then(promisse => promisse.json()).then(departamentos => {
        fetch("http://localhost:3000/funcionarios").then(promessa => promessa.json()).then(funcionarios => {
            for (let index in funcionarios) {
                if (departamentos[0].id == funcionarios[index].departamentoId) {
                    let htmlFuncs = `
                        <td>${funcionarios[index].nome}</td>
                        <td>${funcionarios[index].cargo}</td>
                        <td>${funcionarios[index].salario}</td>
                        <td>${departamentos[0].nome}</td>
                    `

                    document.getElementById('corpoTabela').innerHTML += htmlFuncs
                }
            }
        })
    })
}

function criarOuExcluirFunc(idFunc) {
    document.getElementById('corpoTabela').innerHTML = ''
    let url = `http://localhost:3000/funcionarios`
    let departamentoValor = document.getElementById('selectInput').value
    let idDep

    fetch("http://localhost:3000/departamentos").then(promessa => promessa.json()).then(deps => {
        for (let index in deps) {
            if (departamentoValor == deps[index].nome) {
                idDep = deps[index].id
            }
        }
        let pessoaParaCadastro = {
            nome: document.getElementById('inputNome').value,
            cargo: document.getElementById('inputCargo').value,
            salario: document.getElementById('inputSalario').value,
            departamentoId: idDep
        }
        let config = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pessoaParaCadastro)
        }

        if (idEditFunc) {
            url += `/${idEditFunc}`
            config.method = 'PUT'
        }

        fetch(url, config).then(promisse => promisse.json()).then(funcionario => {
            gerarTabelaFuncionarios()
        })
    })

}



function deletarFuncionario(idFunc) {
    document.getElementById('corpoTabela').innerHTML = ''
    let url = `http://localhost:3000/funcionarios/${idFunc}`
    fetch(url, {
        method: 'DELETE'
    }).then(promisse => promisse.json()).then(funcDeletado => {
        gerarTabelaFuncionarios()
    })
}

function guardarIdEdit(idFuncionario) {
    idEditFunc = idFuncionario
}
