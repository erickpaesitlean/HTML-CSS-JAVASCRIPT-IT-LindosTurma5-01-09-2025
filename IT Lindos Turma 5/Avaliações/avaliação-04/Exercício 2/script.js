 const produtos = [
        { id: 1, nome: "Arroz 5kg", preco: 24.90 },
        { id: 2, nome: "Feijão Preto 1kg", preco: 8.50 },
        { id: 3, nome: "Açúcar Refinado 1kg", preco: 5.20 },
        { id: 4, nome: "Café Torrado 500g", preco: 12.30 },
        { id: 5, nome: "Macarrão Espaguete 500g", preco: 4.10 },
        { id: 6, nome: "Óleo de Soja 900ml", preco: 6.70 },
        { id: 7, nome: "Sal Refinado 1kg", preco: 3.10 },
        { id: 8, nome: "Leite Integral 1L", preco: 5.90 },
        { id: 9, nome: "Farinha de Trigo 1kg", preco: 5.40 },
        { id: 10, nome: "Margarina 500g", preco: 7.50 },
        { id: 11, nome: "Molho de Tomate 340g", preco: 3.80 },
        { id: 12, nome: "Detergente 500ml", preco: 2.90 },
        { id: 13, nome: "Sabão em Pó 1kg", preco: 12.00 },
        { id: 14, nome: "Papel Higiênico 12un", preco: 18.90 },
        { id: 15, nome: "Shampoo 350ml", preco: 14.50 },
        { id: 16, nome: "Condicionador 350ml", preco: 15.20 },
        { id: 17, nome: "Sabonete 90g", preco: 2.50 },
        { id: 18, nome: "Desodorante Aerosol", preco: 13.90 },
        { id: 19, nome: "Escova de Dentes", preco: 7.80 },
        { id: 20, nome: "Creme Dental 90g", preco: 6.20 },
        { id: 21, nome: "Carne Bovina 1kg", preco: 39.90 },
        { id: 22, nome: "Frango Congelado 1kg", preco: 14.90 },
        { id: 23, nome: "Peito de Frango 1kg", preco: 18.50 },
        { id: 24, nome: "Linguiça Toscana 1kg", preco: 22.30 },
        { id: 25, nome: "Ovos 12un", preco: 12.00 },
        { id: 26, nome: "Manteiga 200g", preco: 10.90 },
        { id: 27, nome: "Queijo Mussarela 500g", preco: 26.90 },
        { id: 28, nome: "Presunto 500g", preco: 22.50 },
        { id: 29, nome: "Iogurte 170g", preco: 3.20 },
        { id: 30, nome: "Refrigerante 2L", preco: 8.90 },
        { id: 31, nome: "Suco Natural 1L", preco: 7.50 },
        { id: 32, nome: "Água Mineral 1,5L", preco: 3.00 },
        { id: 33, nome: "Biscoito Recheado 130g", preco: 2.90 },
        { id: 34, nome: "Chocolate Barra 100g", preco: 6.50 },
        { id: 35, nome: "Cereal Matinal 300g", preco: 12.40 },
        { id: 36, nome: "Granola 250g", preco: 11.90 },
        { id: 37, nome: "Arroz Integral 1kg", preco: 9.50 },
        { id: 38, nome: "Feijão Carioca 1kg", preco: 7.90 },
        { id: 39, nome: "Vinagre 750ml", preco: 4.20 },
        { id: 40, nome: "Azeite 500ml", preco: 19.90 },
        { id: 41, nome: "Ketchup 400g", preco: 7.10 },
        { id: 42, nome: "Maionese 500g", preco: 8.20 },
        { id: 43, nome: "Mostarda 400g", preco: 6.70 },
        { id: 44, nome: "Batata Congelada 1kg", preco: 15.90 },
        { id: 45, nome: "Pizza Congelada", preco: 22.90 },
        { id: 46, nome: "Sorvete 2L", preco: 27.50 },
        { id: 47, nome: "Pão de Forma 500g", preco: 8.40 },
        { id: 48, nome: "Farofa Pronta 500g", preco: 6.10 },
        { id: 49, nome: "Milho Verde Lata", preco: 4.80 },
        { id: 50, nome: "Ervilha Lata", preco: 4.50 }
    ];
    const mercados = [
        { nome: "Mercado Central", estoque: [1, 5, 8, 10, 15, 22, 30, 35, 40, 45] },
        { nome: "Super Econômico", estoque: [2, 6, 9, 13, 20, 23, 27, 31, 36, 48] },
        { nome: "Bom Preço", estoque: [3, 7, 11, 14, 19, 25, 32, 38, 41, 50] },
        { nome: "HiperMais", estoque: [1, 4, 8, 12, 16, 24, 29, 33, 42, 47] },
        { nome: "Mercadão Popular", estoque: [2, 5, 9, 17, 21, 28, 34, 39, 43, 49] },
        { nome: "Atacadão Center", estoque: [3, 6, 10, 18, 22, 26, 30, 35, 44, 46] },
        { nome: "Extra Fácil", estoque: [1, 7, 11, 15, 23, 27, 31, 37, 40, 45] },
        { nome: "MaxiCompra", estoque: [4, 8, 12, 16, 24, 28, 33, 38, 42, 48] },
        { nome: "Preço Justo", estoque: [5, 9, 13, 17, 25, 29, 34, 39, 43, 49] },
        { nome: "Compre Bem", estoque: [6, 10, 14, 18, 26, 30, 35, 37, 44, 50] },
        { nome: "SuperMais", estoque: [1, 5, 11, 15, 22, 29, 36, 40, 43, 47] },
        { nome: "Popular Market", estoque: [2, 6, 12, 16, 23, 28, 32, 38, 42, 46] },
        { nome: "MegaMix", estoque: [3, 7, 13, 17, 24, 30, 35, 39, 44, 48] },
        { nome: "HiperBom", estoque: [4, 8, 14, 18, 25, 31, 33, 36, 41, 50] },
        { nome: "Top Mercado", estoque: [5, 9, 15, 19, 26, 32, 37, 40, 45, 49] }
    ];


function buscarProduto() {
    document.getElementById('estabelecimentos').innerHTML = ''
   

    let produto = document.getElementById('input-produto').value
    let idProduto = 0

        
        for (let index = 0; index <produtos.length;index++){
            if(produto == produtos[index].nome){
                idProduto = produtos[index].id
            }
        }
        
        
        for(let index = 0; index <produtos.length;index++){
            for(let indexDentro = 0;indexDentro<mercados[index].estoque.length;indexDentro++){
                if(idProduto == mercados[index].estoque[indexDentro]){
                    document.getElementById('titulo').innerText = `Mercados Que ${produtos[idProduto-1].nome} Está Disponíveis:`
                    document.getElementById('estabelecimentos').innerHTML += `<li>${mercados[index].nome} <p>Preço: R$${produtos[idProduto-1].preco.toFixed(2)}</p></li>`
                }
            }
        }
    

}