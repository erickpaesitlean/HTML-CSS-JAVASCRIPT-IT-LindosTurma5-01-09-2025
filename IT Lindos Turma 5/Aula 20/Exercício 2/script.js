class ProdVendido{
    constructor(obj){
        this.nomeProd = obj.nomeProd
        this.qntProd = obj.qntProd
        this.valorProd = obj.valorProd
        this.descontoProd = obj.descontoProd
    }

    calcularValorTotalVenda(){
        return (Number(this.qntProd * this.valorProd)) 
    }
    aplicarDesconto(){
        let total =Number(this.calcularValorTotalVenda() - (this.calcularValorTotalVenda()*(this.descontoProd/100)))
        this.valorFinalComDesconto = total
        return total
        
    }
    calcularTotalFinal(){

    }
}
var produtos =[]
function addProd(){
    let obj = {
        nomeProd: document.getElementById('inputNome').value,
        qntProd: document.getElementById('inputQnt').value,
        valorProd: document.getElementById('inputValor').value,
        descontoProd: document.getElementById('inputDesconto').value
    }
    let prod = new ProdVendido(obj)
    produtos.push(prod)
    gerarTabela()
}

function gerarTabela(){
    if(produtos.length >0){
        document.querySelector('table').style.display = 'block'
    }
    document.getElementById('bodyTable').innerHTML = ''
    for(let index =0;index<produtos.length;index++){
        let tableHTML = `
        <tr>
            <td>${produtos[index].nomeProd}</td>
            <td>${produtos[index].qntProd}</td>
            <td>${produtos[index].valorProd}</td>
            <td>${produtos[index].descontoProd}%</td>
            <td>${produtos[index].calcularValorTotalVenda()}</td>
            <td>${produtos[index].aplicarDesconto()}</td>
        </tr>
        `
        document.getElementById('bodyTable').innerHTML += tableHTML
        let mediaTable = `
        <tr>
            <th colspan="2">Média:</th>
            <td>R$${mediaTotal().toFixed(2)}</td>
            <th colspan="2">Soma Total Dos Valores:</th>
            <td>R$${valorTotalTodasVendas().toFixed(2)}</td>
        </tr>
        `
        document.getElementById('mediaTable').innerHTML = mediaTable
    }
    
}

function mediaTotal(){
    let soma = 0
    for(let index =0;index<produtos.length;index++){
        soma+=produtos[index].valorFinalComDesconto
    }
    return soma/produtos.length
}
function valorTotalTodasVendas(){
    let soma = 0
    for(let index=0;index<produtos.length;index++){
        soma+= produtos[index].valorFinalComDesconto
    }
    return soma
}