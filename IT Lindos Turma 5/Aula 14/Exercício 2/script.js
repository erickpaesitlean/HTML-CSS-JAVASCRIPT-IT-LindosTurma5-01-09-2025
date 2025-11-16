var listaMercado = [
    {item: 'Arroz', preco: 10.90},
    {item: 'Feijão', preco: 8.90},
    {item: 'Suco de uva natural', preco: 18.90},
    {item: 'Açucar', preco: 5.90},
    {item: 'Maça', preco: 4.90},
    {item: 'Abacaxi', preco: 11.90},
]
function mostrarLista(){
    for(let index =0;index<listaMercado.length;index++){
        document.getElementById('listaMercado').innerHTML +=`<li>Item: ${listaMercado[index].item} Preço: ${listaMercado[index].preco}</li>`
    }

    for( let objeto of listaMercado){
        
    }
}