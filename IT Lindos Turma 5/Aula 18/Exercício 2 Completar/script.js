class Produto {
  constructor(obj) {
    this.nome = obj.nomeProd;
    this.estoque = obj.estoqueProd;
    this.preco = obj.precoProd;
  }

  repor(qtd) {
    this.estoque += qtd;
  }

  vender(qtd) {
    if (this.estoque >= qtd) {
      this.estoque -= qtd;
    }
  }
}

var produtos = [];

function adicionaProduto() {
  let paraInserir = {
    nomeProd: document.getElementById("campoNomeProd").value,
    estoqueProd: Number(document.getElementById("campoEstoqueProd").value),
    precoProd: Number(document.getElementById("campoPrecoProd").value),
  };
  let novoProd = new Produto(paraInserir);
  produtos.push(novoProd);

  geraTabelaProdutos();
}

function geraTabelaProdutos() {
  document.getElementById("corpoTabelaProdutos").innerHTML = "";
  for (let prod in produtos) {
    let linhaHtml = `
        <tr>
            <td>${produtos[prod].nome}</td>
            <td>${produtos[prod].estoque}</td>
            <td>${produtos[prod].preco.toFixed(2)}</td>
            <td>
             <button type="button" onclick="produtos[${prod}].vender(1);geraTabelaProdutos()">Vender 1</button>
            </td>
            <td>
             <button type="button" onclick="produtos[${prod}].repor(5);geraTabelaProdutos()">Repor 5</button>
            </td>
        </tr>`;
    document.getElementById("corpoTabelaProdutos").innerHTML += linhaHtml;
  }
}
