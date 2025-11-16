function gerarLista() {
    let nomeEmpresa = document.getElementById('nomeEmpresa').value
    let url = `http://localhost:3000/vagas`
    fetch(url).then(promisse => promisse.json()).then(vagas => {
        for (let index = 0; index < vagas.length; index++) {
            fetch(`http://localhost:3000/empresas/${vagas[index].empresaId}`).then(promissa => promissa.json()).then(empresas => {
                if (nomeEmpresa == '') {
                    let htmlLista = `
                    <td>${vagas[index].titulo}</td>
                    <td>${empresas.nome}</td>
                    <td>${vagas[index].salario}</td>
                    <td>${vagas[index].tipo}</td>
                `
                    document.getElementById('corpoTabela').innerHTML += htmlLista
                    return
                }
                if (nomeEmpresa == empresas.nome) {
                    document.getElementById('corpoTabela').innerHTML = ''
                    for (let index = 0; index < vagas.length; index++) {
                        let htmlLista = `
                    <td>${vagas[index].titulo}</td>
                    <td>${empresas.nome}</td>
                    <td>${vagas[index].salario}</td>
                    <td>${vagas[index].tipo}</td>
                `
                        document.getElementById('corpoTabela').innerHTML += htmlLista
                        return
                    }
                }
            })
        }
    })
}

gerarLista()
