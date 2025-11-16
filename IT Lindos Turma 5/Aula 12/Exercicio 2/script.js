var listaComprasArray = []
function listaDeCompras(){
    let pergunta 
    while(pergunta!="FIM"){
        let item = prompt('Insira Um Item Na Lista De Compras:')
        pergunta = prompt('Quer Encerrar? Se Sim Digite "FIM"').toUpperCase()
        listaComprasArray.push(item)
    }
    console.log(listaComprasArray)    
}

