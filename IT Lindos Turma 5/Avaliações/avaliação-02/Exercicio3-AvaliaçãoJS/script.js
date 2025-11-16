function entradaDados() {
    let nome = prompt('Insira o Nome do Investido:')
    let idade = Number(prompt('Insira Sua Idade:'))
    let valorDiponivel = Number(prompt('Insira O Valor Disponível Para Investimento:'))
    let tipoInvestimento = Number(prompt('Insira o Tipo de Investimento:\n1-Poupança\n2-Renda Fixa\n3-Ações'))
    tratamentoDados(nome, idade, valorDiponivel, tipoInvestimento)


}
function tratamentoDados(nome, idade, valorDiponivel, tipoInvestimento) {

    let clieteDados = {
        nome: nome,
        idade: idade,
        valorDiponivel: valorDiponivel,
        tipoInvestimento: tipoInvestimento
    }

    if (clieteDados.idade < 18) {
        return alert('Investimentos Não São Permitidos Para Menores De Idade!')
    } else {
        switch (clieteDados.tipoInvestimento) {
            case 1: clieteDados.tipoInvestimento = 'Poupança'
                console.log(`O Investidor: ${nome}, aplicou R$: ${valorDiponivel} Em ${clieteDados.tipoInvestimento} e Terá Rendimento Esperado de R$ ${valorDiponivel * (1 + 0.03)} Em 1 Ano`)
                clieteDados.rendimentoFinal = (valorDiponivel * 0.03).toFixed(2)
                break;
            case 2: clieteDados.tipoInvestimento = 'Renda Fixa'
                console.log(`O Investidor: ${nome}, aplicou R$: ${valorDiponivel} Em ${clieteDados.tipoInvestimento} e Terá Rendimento Esperado de R$ ${valorDiponivel * (1 + 0.06)} Em 1 Ano`)
                clieteDados.rendimentoFinal = (valorDiponivel * 0.06).toFixed(2)
                break;
            case 3: clieteDados.tipoInvestimento = 'Ações'
                console.log(`O Investidor: ${nome}, aplicou R$: ${valorDiponivel} Em ${clieteDados.tipoInvestimento} e Terá Rendimento Esperado de R$ ${valorDiponivel * (1 + 0.10)} Em 1 Ano`)
                clieteDados.rendimentoFinal = (valorDiponivel * 0.10).toFixed(2)
                break;
        }
    }

    console.log(clieteDados)



}
entradaDados()