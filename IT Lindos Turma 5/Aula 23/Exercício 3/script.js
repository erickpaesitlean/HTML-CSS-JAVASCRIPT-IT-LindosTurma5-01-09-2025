// O CLIENTE NÃO  PRECISA DE INFORAÇÕES DE FORA
// O PRODUTO É REFERENTE AO PEDIDO E O PEDIDO É REFERENTE AO CLIENTE E O CLIENTE NÃO PRECISA DE NADA

function tabelaListaPedidos(){
    let url = "http://localhost:3000/pedidos"
    fetch(url).then((promisse)=> promisse.json()).then((pedidos)=>{
        for(let index=0;index<pedidos.length;index++){
            let data = new Date(pedidos[index].data)
            let htmlPedido = `
                <td>${pedidos[index].id}</td>
                <td>${pedidos[index].clienteId}</td>
                <td>${data.toLocaleDateString('pt-br')}</td>
                <td>${pedidos[index].status}</td>
                <td>
                    <button onclick="getProdutoPorPedido(${pedidos[index].id})">Ver Detalhes</button>
                </td>
            `
            document.getElementById('corpoTabela').innerHTML += htmlPedido
        }
    })
}

tabelaListaPedidos()

function getProdutoPorPedido(id){
    let url = `http://localhost:3000/produtos?pedidoId=${id}`
    fetch(url).then((promisse)=> promisse.json()).then((pedido)=>{
        for(let index=0;index<pedido.length;index++){
            let htmlPedido = `
                <td>${pedido[index].nome}</td>
                <td>${pedido[index].preco}</td>
                <td>${pedido[index].quantidade}</td>
            `
            document.getElementById('corpoTabelaProdutos').innerHTML += htmlPedido
        }
    })
}

