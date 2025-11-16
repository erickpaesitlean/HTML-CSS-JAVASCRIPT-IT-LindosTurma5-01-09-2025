function getProdutos() {
    document.getElementById('corpoTabelaProd').innerHTML = ''
    let url = `http://localhost:3000/produtos`
    fetch(url).then(resp => resp.json()).then(produtos => {
        for (let prod of produtos) {
            document.getElementById('corpoTabelaProd').innerHTML += `
            <tr>
                <td>${prod.id}</td>
                <td>${prod.nome}</td>
                <td>${prod.preco}</td>
                <td>${prod.categoria}</td>
                <td>${prod.estoque}</td>
                <td>
                    <button type="button" onclick="deletaProduto('${prod.id}')">Deletar</button>
                </td>
            </tr>`
        }
    })
}

getProdutos()

function deletaProduto(idProduto) {
    let url = `http://localhost:3000/produtos/${idProduto}`
    Swal.fire({
        title: "Excluir Item",
        text: "Você Quer Mesmo Excluir Este Produto?",
        icon: "question",
        showCancelButton: true,
        cancelButtonText: `Não Quero`,
        confirmButtonText: `Quero`
    }).then(resposta => {
        console.log(resposta)
        if (resposta.isConfirmed == true) {
            fetch(url, {
                method: `DELETE`
            }).then(resp => resp.json()).then(() => {
                getProdutos()
            })
        }
    })

}

function criaProduto() {
    //
    let objParaEnviar = {
        nome: document.getElementById('campoNomePrd').value,
        preco: Number(document.getElementById('campoPrecoPrd').value),
        categoria: document.getElementById('campoCategoriaPrd').value,
        estoque: Number(document.getElementById('campoEstoquePrd').value)
    }
    //

    let url = `http://localhost:3000/produtos`
    let config = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objParaEnviar)
    }

    fetch(url,config).then(promisse=>promisse.json()).then(obj=>{
        Swal.fire({
            title: 'Sucesso!',
            text: 'Você Adicionou Um Novo Produto!',
            icon: 'success',
            theme: 'bootstrap-4-dark'
        })
        getProdutos()
    })

}
