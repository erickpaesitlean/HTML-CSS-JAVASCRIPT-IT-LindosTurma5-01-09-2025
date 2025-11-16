function recebeDadosProduto() {
    let nome = prompt('insira o Nome do Produto:')
    let preco = Number(prompt('Insira o Preço do Produto:').replace(',', '.')).toFixed(2)
    if (isNaN(preco)) {
        alert('Insira um Preço Válido!!'), recebeDadosProduto()
    } else {
        let categoria = Number(prompt('Escolha a Categoria do Produto:\n1-Alimentos\n2-Vestimentas\n3-Eletrônicos\n4-Outros'))
        if (isNaN(categoria)) {
            alert('Insira uma Categoria Válida!'), recebeDadosProduto()
        } else {
            switch (categoria) {
                case 1:
                    categoria = 'Alimentos'
                    break;
                case 2:
                    categoria = 'Vestimentas'
                    break;
                case 3: categoria = 'Eletrônicos'
                    break;
                case 4:
                    categoria = 'Outros'
                    break;
                default: alert('Insira Uma Categoria Válida!'), recebeDadosProduto()
            }

            trataProduto(nome, preco, categoria)
        }



    }

}
function trataProduto(nome, preco, categoria) {
    let infos = {
        nome: nome,
        categoria: categoria
    }
    let financeiro = {
        preco: preco,
        desconto: (preco * 0.10).toFixed(2)
    }
    infos.nome = nome
    infos.categoria = categoria
    financeiro.preco = preco
    console.log(infos)
    console.log(financeiro)

}
recebeDadosProduto()