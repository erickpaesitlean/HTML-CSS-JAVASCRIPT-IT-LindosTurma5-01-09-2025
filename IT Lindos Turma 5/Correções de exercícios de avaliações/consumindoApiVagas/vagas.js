function mostrarVagas() {
    let urlVagas = `http://localhost:3000/vagas`
    fetch(urlVagas).then(promisse => promisse.json()).then(vagas => {
        for (let index = 0; index < vagas.length; index++) {
            fetch(`http://localhost:3000/empresas?id=${vagas[index].empresaId}`).then(promessa => promessa.json()).then(empresas => {
                let htmlVagas = `
                <td>${vagas[index].titulo}</td>
                <td>${empresas[0].nome}</td>
                <td>${vagas[index].salario}</td>
                <td>${vagas[index].tipo}</td>
                <td>
                    <button class="btn btn-outline-info" onclick="verCandidatos(${vagas[index].id})">Ver Candidatos</button>
                </td>
            `
                document.getElementById('corpoTabela').innerHTML += htmlVagas
            })
        }
    })
}

mostrarVagas()

function buscarVagaPorEmpresa() {
    document.getElementById('corpoTabela').innerHTML = ''
    let nomeEmpresa = document.getElementById('filtroNome').value
    fetch(`http://localhost:3000/empresas?nome=${nomeEmpresa}`).then(promisse => promisse.json()).then(empresa => {
        if (empresa.length == 0) {
            alert('Nenhuma Vaga Encontrada')
            return
        }
        if (nomeEmpresa == '') {
            mostrarVagas()
            return
        }
        let somaSalarios = 0
        fetch(`http://localhost:3000/vagas?empresaId=${empresa[0].id}`).then(promessa => promessa.json()).then(vagasPorEmpresa => {
            for (let index = 0; index < vagasPorEmpresa.length; index++) {
                somaSalarios += vagasPorEmpresa[index].salario
                let htmlVaga = `
                    <td>${vagasPorEmpresa[index].titulo}</td>
                    <td>${empresa[0].nome}</td>
                    <td>${vagasPorEmpresa[index].salario}</td>
                    <td>${vagasPorEmpresa[index].tipo}</td>
                    <td>
                        <button class="btn btn-outline-info" onclick="verCandidatos(${vagasPorEmpresa[index].id})">Ver Candidatos</button>
                    </td>
                `
                document.getElementById('corpoTabela').innerHTML += htmlVaga
            }
            document.getElementById('rodapeTabela').innerHTML = `<td colspan="5">Média Salárial Das Vagas: R$${(somaSalarios / vagasPorEmpresa.length).toFixed(2)}<td>`
        })
    })
}

function buscarVagaPorTipo() {
    document.getElementById('corpoTabela').innerHTML = ''
    let tipo = document.getElementById('filtroTipo').value
    if (tipo == '') {
        mostrarVagas()
        return
    }
    fetch(`http://localhost:3000/vagas?tipo=${tipo}`).then(promisse => promisse.json()).then(vagas => {
        if (vagas.length == 0) {
            alert('Nenhuma Vaga Encontrada')
            return
        }
        let somaSalarios = 0
        for (let index = 0; index < vagas.length; index++) {
            somaSalarios += vagas[index].salario
            fetch(`http://localhost:3000/empresas?id=${vagas[index].empresaId}`).then(promessa => promessa.json()).then(empresa => {
                let htmlVaga = `
                    <td>${vagas[index].titulo}</td>
                    <td>${empresa[0].nome}</td>
                    <td>${vagas[index].salario}</td>
                    <td>${vagas[index].tipo}</td>
                    <td>
                        <button class="btn btn-outline-info" onclick="verCandidatos(${vagas[index].id})">Ver Candidatos</button>
                    </td>
                `
                document.getElementById('corpoTabela').innerHTML += htmlVaga
            })
        }
        document.getElementById('rodapeTabela').innerHTML = `<td colspan="5">Média Salárial Das Vagas: R$${(somaSalarios / vagas.length).toFixed(2)}<td>`
    })
}

function verCandidatos(vagaId) {
    document.getElementById('candidatos').innerHTML = ''
    fetch(`http://localhost:3000/candidatos?vagaId=${vagaId}`).then(promisse => promisse.json()).then(candidatos => {
        if (candidatos.length == 0) {
            alert('Nenhum Candidato Cadastrado Para Esta Vaga')
            return
        }
        for (let index = 0; index < candidatos.length; index++) {
            let htmlCandidatos = `
               <div class="card" style="width: 18rem;">
        <div class="card-header">
                Candidato ${[index+1]}
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${candidatos[index].nome}</li>
                <li class="list-group-item">${candidatos[index].idade} Anos</li>
                <li class="list-group-item">Experiência: ${candidatos[index].experiencia}</li>
            </ul>
        </div>
            `
            document.getElementById('candidatos').innerHTML += htmlCandidatos
        }
    })
}

function buscarPorNomeEtipo() {
    document.getElementById('corpoTabela').innerHTML = ''
    let nomeEmpresa = document.getElementById('nomeEmpresa').value
    let tipoContrato = document.getElementById('tipoContrato').value
    fetch(`http://localhost:3000/empresas?nome=${nomeEmpresa}`).then(promisse => promisse.json()).then(empresa => {
        fetch(`http://localhost:3000/vagas?empresaId=${empresa[0].id}&tipo=${tipoContrato}`).then(promessa => promessa.json()).then(vaga => {
            for (let index = 0; index < vaga.length; index++) {
                let htmlVaga = `
                    <td>${vaga[index].titulo}</td>
                    <td>${empresa[0].nome}</td>
                    <td>${vaga[index].salario}</td>
                    <td>${vaga[index].tipo}</td>
                `
                document.getElementById('corpoTabela').innerHTML += htmlVaga
            }
        })
    })
}