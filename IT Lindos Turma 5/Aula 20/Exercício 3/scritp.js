class Produto{
    constructor(obj){
        this.nome = obj.nome
        this.preco = obj.preco
        this.quantidade = obj.quantidade
    }
}

class Carrinho{
    constructor(){
        this.produto = []
    }
    adicionarAoCarrinho(prod){
        this.produto.push(prod)
    }
    precoTotal(){
        console.log(this.produto[0].preco * this.produto[0].quantidade)
    }
    exibirProdutos(){
        for(let index=0;index<this.produto.length;index++){
            console.log(this.produto[index])
        }
    }
}
function criarProduto(){
    let obj = {
        nome: 'Erick',
        preco: 10,
        quantidade: 5
    }

    let novoProduto = new Produto(obj)
    let acessaCarrinho = new Carrinho()
    acessaCarrinho.adicionarAoCarrinho(novoProduto)
    acessaCarrinho.precoTotal()
    console.log(acessaCarrinho.produto)
    
}





