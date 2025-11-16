function exibirPessoas() {
    let url = "http://localhost:3000/pessoas"
    fetch(url).then((promisse) => promisse.json()).then((pessoas) => {
        for (let index = 0; index < pessoas.length; index++) {
            let htmlPessoas = `
                <td>${pessoas[index].id}</td>
                <td>${pessoas[index].nome}</td>
                <td>${pessoas[index].email}</td>
                <td>
                    <button class="btn btn-outline-info" onclick="detalhes([${pessoas[index].id}])">Detalhes</button>
                </td>
            `
            document.getElementById('corpoTabela').innerHTML += htmlPessoas
        }
    })
}

exibirPessoas()

function detalhes(id) {
    let url = `http://localhost:3000/pessoas/${id}`
    fetch(url).then((promisse) => promisse.json()).then((pessoas) => {
        let htmlPessoa = `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            Informações
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${pessoas.id}</li>
            <li class="list-group-item">${pessoas.nome}</li>
            <li class="list-group-item">${pessoas.email}</li>
            <li class="list-group-item">${pessoas.telefone}</li>
            <li class="list-group-item">${pessoas.idade}</li>
            <li class="list-group-item">${pessoas.cidade}</li>
            <li class="list-group-item">${pessoas.estado}</li>
        </ul>
    </div>
            `
        document.getElementById('informsPessoa').innerHTML = htmlPessoa
    })
}