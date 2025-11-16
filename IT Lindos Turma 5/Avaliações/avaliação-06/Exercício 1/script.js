function listarVendedres() {
    let url = "http://localhost:3000/vendedores"
    fetch(url).then(promiss => promiss.json()).then(vendedores => {
        for (let index = 0; index < vendedores.length; index++) {
            let htmlVendedores = `
                <td>${vendedores[index].id}</td>
                <td>${vendedores[index].nome}</td>
                <td>${vendedores[index].unidade}</td>
                <td>${vendedores[index].percentualComissao}</td>
                <td>
                    <button onclick="mostrarVendas(${vendedores[index].id})">Mostrar Vendas</button>
                </td>
            `
            document.getElementById('corpoTabela').innerHTML += htmlVendedores
        }
    })
}

listarVendedres()

function mostrarVendas(idVendedor) {
    document.getElementById('corpoTabelaVendas').innerHTML = ''
    let url = `http://localhost:3000/vendas?vendedorId=${idVendedor}`
    fetch(url).then(promisse => promisse.json()).then(vendasVendedor => {
        let url = `http://localhost:3000/vendedores/${idVendedor}`
        fetch(url).then(promisse => promisse.json()).then(vendedores => {
            let totalVendido = 0
            document.getElementById('rodapeTabela').innerHTML += `Nome Vendedor: ${vendedores.nome}`
            for (let index = 0; index < vendasVendedor.length; index++) {
                let data = new Date(vendasVendedor[index].data)
                totalVendido += vendasVendedor[index].valorVenda
                let htmlVendas = `
            <td>${vendasVendedor[index].id}</td>
            <td>${vendasVendedor[index].vendedorId}</td>
            <td>${vendasVendedor[index].valorVenda}</td>
            <td>${data.toLocaleDateString('pt-br')}</td>
           `

                document.getElementById('corpoTabelaVendas').innerHTML += htmlVendas
            }
            let comissao = (vendedores.percentualComissao)/100
            document.getElementById('rodapeTabela').innerHTML = `<td>Total vendido: R$${(totalVendido.toFixed(2))}</td>`
            document.getElementById('rodapeTabela').innerHTML += `Comissão: R$${((comissao * totalVendido).toFixed(2))}`
        })

        
        

    })
}

function buscarPorUnidade() {
    document.getElementById('corpoTabela').innerHTML = ''
    let unidade = document.getElementById('inputUnidade').value
    let url = `http://localhost:3000/vendedores?unidade=${unidade}`
    fetch(url).then(promisse => promisse.json()).then(vendedoresPorUnidade => {

        if (vendedoresPorUnidade.length == 0) {
            alert('Unidade não existente!')
            return
        }

        if (unidade == '') {
            listarVendedres()
            return
        }
        for (let index = 0; index < vendedoresPorUnidade.length; index++) {
            let htmlVendedores = `
                <td>${vendedoresPorUnidade[index].id}</td>
                <td>${vendedoresPorUnidade[index].nome}</td>
                <td>${vendedoresPorUnidade[index].unidade}</td>
                <td>${vendedoresPorUnidade[index].percentualComissao}</td>
                <td>
                    <button onclick="">Mostrar Vendas</button>
                </td>
            `
            document.getElementById('corpoTabela').innerHTML += htmlVendedores
        }
    })



}