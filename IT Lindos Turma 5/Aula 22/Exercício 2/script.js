// Crie uma página em HTML e JavaScript que busque dados de produtos de um JSON Server e mostre as informações na tela
// Ao carregar a página, faça uma requisição GET para o servidor e exiba todos os produtos em uma tabela

function produtosJson() {
    let url = "http://localhost:3000/produtos"
    fetch(url)
        .then((promisse) => promisse.json())
        .then((produtos) => {
            let somaPrecos = 0
            for (let index = 0; index < produtos.length; index++) {

                somaPrecos += produtos[index].preco
                let htmlLista = `
                <td>${produtos[index].id}</td>
                <td>${produtos[index].nome}</td>
                <td>R$${produtos[index].preco}</td>
                <td>${produtos[index].categoria}</td>
            `
                document.getElementById('corpoTabela').innerHTML += htmlLista
                document.getElementById('rodapeTabela').innerHTML = `<td class="text-center" colspan="4">Média De Preços: R$${(somaPrecos / produtos.length).toFixed(2)}</td>`
            }

        })
}
produtosJson()

function filtrarPorCategoria() {
    let categoriaUser = document.getElementById('categoriaInput').value
    let url = `http://localhost:3000/produtos?categoria=${categoriaUser}`
    fetch(url).then((promisse) => promisse.json()).then((prodCategoria) => {
        document.getElementById('corpoTabela').innerHTML = ''
        let soma = 0
        if (prodCategoria.length == 0) {
            document.getElementById('categoriaInput').value = ''
            alert('Essa categoria não existe')
            document.getElementById('cabecaTabela').innerHTML = `
                <th>ID</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Categoria</th>
                `
            produtosJson()
            
        } else {
            document.getElementById('categoriaInput').value = ''
            document.getElementById('cabecaTabela').innerHTML = `
                <th>ID</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Estoque em R$</th>
                <th>Média Preço Unitário</th>
                <th>Estoque</th>
                `
            for (let index = 0; index < prodCategoria.length; index++) {
                
                let htmlLista = `
                    <td>${prodCategoria[index].id}</td>
                    <td>${prodCategoria[index].nome}</td>
                    <td>R$${prodCategoria[index].preco}</td>
                    <td>${prodCategoria[index].categoria}</td>
                    <td>R$${(prodCategoria[index].preco * prodCategoria[index].estoque).toFixed(2)}</td>
                    <td>${(Number(prodCategoria[index].estoque) * Number(prodCategoria[index].preco)) / prodCategoria[index].estoque}</td>
                    <td>${prodCategoria[index].estoque}</td>
    
    
                `
                soma += prodCategoria[index].preco
                document.getElementById('rodapeTabela').innerHTML = `<td class="text-center" colspan="7">Média De Preços: R$${(soma / prodCategoria.length).toFixed(2)}</td>`
                document.getElementById('corpoTabela').innerHTML += htmlLista
            }
        }

    })
}