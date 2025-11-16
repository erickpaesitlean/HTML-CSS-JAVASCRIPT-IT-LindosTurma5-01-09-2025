var idComandaParaAdd
var idComandaParaRemover
function gerarTabelaComandas() {
    fetch('http://localhost:3000/comandas').then(promisse => promisse.json()).then(comandas => {
        fetch('http://localhost:3000/cardapio').then(promisse => promisse.json()).then(cardapio => {
            let valorTotalComanda = 0
            for (let index in comandas) {
                document.getElementById('selectItem').innerHTML = ''
                for (let indexCa in cardapio) {
                    document.getElementById('selectItem').innerHTML += `
                        <option value="${cardapio[indexCa].nome}">${cardapio[indexCa].nome}</option>
                    `
                    for (let indexI in comandas[index].itens) {
                        if (comandas[index].itens[indexI].produtoId == cardapio[indexCa].id) {
                            valorTotalComanda += Number(comandas[index].itens[indexI].quantidade) * Number(cardapio[indexCa].preco)
                        }
                    }
                }

                let html = `
                    <td>${comandas[index].id}</td>
                    <td>${comandas[index].mesa}</td>
                    <td>${comandas[index].cliente}</td>
                    <td>${comandas[index].status}</td>
                    <td>R$${valorTotalComanda.toFixed(2)}</td>
                    <td>
                        <button onclick="guardarIdComanda('${comandas[index].id}')">Adicionar Item</button>
                    </td>
                    <td>
                        <button onclick="exibindoItemDaComanda('${comandas[index].id}')">Remover Item</button>
                    </td>
                    <td>
                        <button onclick="fecharComanda('${comandas[index].id}')">Fechar Comanda</button>
                    </td>
                `
                valorTotalComanda = 0
                document.getElementById('corpoTabela').innerHTML += html
            }
        })
    })
}

gerarTabelaComandas()
function adicionarNovaComanda() {
    document.getElementById('corpoTabela').innerHTML = ''
    let nomeItem = document.getElementById('selectItem').value
    fetch(`http://localhost:3000/cardapio?nome=${nomeItem}`).then(promisse => promisse.json()).then(item => {
        let produtoIdParaPost = ''
        for (let index in item) {
            if (item[index].nome == nomeItem) {
                produtoIdParaPost = item[index].id
            }
        }
        let comanda = {
            mesa: document.getElementById('mesaCliente').value,
            cliente: document.getElementById('nomeCliente').value,
            status: document.getElementById('selectStatus').value,
            itens: [
                {
                    produtoId: produtoIdParaPost,
                    quantidade: document.getElementById('quantidadeItem').value
                }
            ]
        }
        let config = {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(comanda)
        }
        fetch("http://localhost:3000/comandas", config).then(promisse => promisse.json()).then(comanda => {
            gerarTabelaComandas()
        })
    })

}

function guardarIdComanda(idComanda) {
    document.getElementById('selectAddItemComanda').innerHTML = ''
    idComandaParaAdd = idComanda
    fetch(`http://localhost:3000/comandas/${idComandaParaAdd}`).then(promisse => promisse.json()).then(comanda => {
        if (comanda.status == 'Fechada') {
            alert('Você não pode adicionar um item a uma comanda fechada!')
        } else {
            document.getElementById('containerAddItem').style.display = 'block'
            fetch('http://localhost:3000/cardapio').then(promisse => promisse.json()).then(cardapio => {
                for (let index in cardapio) {
                    document.getElementById('selectAddItemComanda').innerHTML += `
                    <option>${cardapio[index].nome}</option>
                `
                }
            })
        }

    })


}

function adicionarItemNaComanda() {
    document.getElementById('containerAddItem').style.display = 'none'
    document.getElementById('corpoTabela').innerHTML = ''
    fetch(`http://localhost:3000/comandas/${idComandaParaAdd}`).then(promisse => promisse.json()).then(comanda => {
        fetch('http://localhost:3000/cardapio').then(promisse => promisse.json()).then(cardapio => {
            if (comanda.status == 'Aberta') {
                let nomeItem = document.getElementById('selectAddItemComanda').value
                let qntItem = document.getElementById('quantidadeNovoItem').value
                let idItem = ''
                for (let index in cardapio) {
                    if (nomeItem == cardapio[index].nome) {
                        idItem = cardapio[index].id
                    }
                }
                let novoItem = {
                    produtoId: idItem,
                    quantidade: Number(qntItem)
                }
                comanda.itens.push(novoItem)
                let config = {
                    method: 'PUT',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(comanda)
                }
                fetch(`http://localhost:3000/comandas/${idComandaParaAdd}`, config).then(promisse => promisse.json()).then(comandaAtualizada => {
                    document.getElementById('selectAddItemComanda').value = ''
                    document.getElementById('quantidadeNovoItem').value = ''
                    alert('Item adicionado com sucesso!')
                    gerarTabelaComandas()
                })
            } else {
                alert('Você não pode adicionar itens a uma comanda fechada!')

            }

        })
    })
}

function exibindoItemDaComanda(idComanda) {
    document.getElementById('containerRemoveItem').style.display = 'block'
    document.getElementById('listaItemsDaComanda').innerHTML = ''
    idComandaParaRemover = idComanda
    fetch(`http://localhost:3000/comandas/${idComandaParaRemover}`).then(promisse => promisse.json()).then(comanda => {
        fetch('http://localhost:3000/cardapio').then(promisse => promisse.json()).then(cardapio => {
            for (let indexC in cardapio) {
                for (let index in comanda.itens) {
                    if (cardapio[indexC].id == comanda.itens[index].produtoId) {
                        let htmlItens = `
                            <li>
                                ${cardapio[indexC].nome}
                                <button onclick="removerItemDaComanda(${index},'${idComandaParaRemover}')">Remover ${index}</button>
                            </li>
                        `
                        document.getElementById('listaItemsDaComanda').innerHTML += htmlItens
                    }
                }
            }
        })
    })
}

function removerItemDaComanda(indexItem, idComanda) {
    document.getElementById('corpoTabela').innerHTML = ''
    fetch(`http://localhost:3000/comandas/${idComanda}`).then(promisse => promisse.json()).then(comanda => {
        comanda.itens.splice(indexItem, 1)
        let config = {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(comanda)
        }
        fetch(`http://localhost:3000/comandas/${idComanda}`, config).then(promisse => promisse.json()).then(comandaAtualizada => {
            console.log(comandaAtualizada)
            alert('Item removida com sucesso!')
            gerarTabelaComandas()
            document.getElementById('containerRemoveItem').style.display = 'none'
        })
    })
}

function fecharComanda(idComanda) {
    document.getElementById('corpoTabela').innerHTML = ''
    console.log(idComanda)
    fetch(`http://localhost:3000/comandas/${idComanda}`).then(promisse => promisse.json()).then(comanda => {
        
        if(comanda.itens[0].produtoId == "" && comanda.itens[0].quantidade == ""){
            alert('Você não pode fechar uma comanda que não tenha nenhum item')
            return gerarTabelaComandas()
        }
        
        comanda.status = 'Fechada'
        let config = {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(comanda)
        }
        fetch(`http://localhost:3000/comandas/${idComanda}`, config).then(promisse => promisse.json()).then(comanda => {
            gerarTabelaComandas()
        })
    })
}

function filtroPorStatus() {
    document.getElementById('corpoTabela').innerHTML = ''
    let valueFiltro = document.getElementById('selectFiltroStatus').value
    fetch(`http://localhost:3000/comandas?status=${valueFiltro}`).then(promisse => promisse.json()).then(comandasFiltradas => {
        fetch('http://localhost:3000/cardapio').then(promisse => promisse.json()).then(cardapio => {
            let somaTotal = 0
            for (let index in comandasFiltradas) {
                for (let indexC in cardapio) {
                    for (let indexI in comandasFiltradas[index].itens) {
                        if (comandasFiltradas[index].itens[indexI].produtoId == cardapio[indexC].id) {
                            somaTotal += Number(cardapio[indexC].preco) * Number(comandasFiltradas[index].itens[indexI].quantidade)
                        }
                    }
                }
                let htmlFiltrado = `
                <td>${comandasFiltradas[index].id}</td>
                <td>${comandasFiltradas[index].mesa}</td>
                <td>${comandasFiltradas[index].cliente}</td>
                <td>${comandasFiltradas[index].status}</td>
                <td>R$${somaTotal.toFixed(2)}</td>
                <td>
                    <button onclick="guardarIdComanda('${comandasFiltradas[index].id}')">Adicionar Item</button>
                </td>
                <td>
                    <button onclick="exibindoItemDaComanda('${comandasFiltradas[index].id}')">Remover Item</button>
                </td>
                <td>
                    <button onclick="fecharComanda('${comandasFiltradas[index].id}')">Fechar Comanda</button>
                </td>
            `
                document.getElementById('corpoTabela').innerHTML += htmlFiltrado
                somaTotal = 0
            }
        })
    })
}


