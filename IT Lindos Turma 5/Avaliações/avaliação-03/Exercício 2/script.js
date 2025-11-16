var listaItens = []
function adicionarItemAoInventario() {
    let nomeItem = document.getElementById('input-nome').value
    let qntItem = document.getElementById('input-qnt').value
    let codicoItem = document.getElementById('input-codico').value

    let itemsIventario = {
        nome: nomeItem,
        quantidade: qntItem,
        codico: codicoItem
    }


        if (nomeItem == '') {
            alert('O Nome Não Pode Estar Vazio!')
        } else if (qntItem == '') {
            alert('A Quantidade Não Pode Estar Vazia!')
        } else if (codicoItem == '') {
            alert('O Códico Não Pode Estar Vazio!')
        } else if (codicoItem.length != 7) {
            alert('O Códico Interno Deve Ter Exatamente 7 Dígitos!')
        } else {
            alert('Item Adicionado Com Sucesso!')
            listaItens.push(itemsIventario)
            document.getElementById('input-nome').value = ''
            document.getElementById('input-qnt').value = ''
            document.getElementById('input-codico').value = ''
        }

        
    } 


function mostrarItens() {

    document.getElementById('impressaoItems').innerHTML = ''
    for (let cont in listaItens) {
        document.getElementById('impressaoItems').style.display = 'block'
        document.getElementById('impressaoItems').innerHTML += (`<p>ITEM: ${listaItens[cont].nome}</p><p>QUANTIDADE: ${listaItens[cont].quantidade}</p><p>CÓDICO: ${listaItens[cont].codico}</p><p>====================</p>`)
    }

}


