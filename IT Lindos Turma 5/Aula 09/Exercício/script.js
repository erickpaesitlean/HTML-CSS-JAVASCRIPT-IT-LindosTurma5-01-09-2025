// Um banco precisa analisar solicitações de empréstimo usando dois critérios principais,
// Análise de Score e Análise de Renda vs. Valor da Parcela
// Score do cliente?
// ≥ 800: "Aprovado automaticamente"
// 600-799: "Analisar renda"
// 400-599: "Análise manual necessária"
// < 400: "Reprovado automaticamente"
// Caso precise de análise de renda
// Parcela ≤ 15% da renda: "Aprovado"
// Parcela 16-30% da renda: "Aprovado com restrições"
// Parcela > 30% da renda: "Reprovado"

function analiseScore() {
    let scoreusuario = Number(prompt('Insira seu Score:'))
    recebeScore(scoreusuario)
}
function recebeScore(score) {

    if (score >= 800) {
        alert('Aprovado Automaticamente!')
    } else if (score >= 600) {
        let renda = Number(prompt('Insira sua renda mensal').replace(',', '.'))
        let parcela = Number(prompt('Insira a parcela que você está disposto a pagar').replace(',', '.'))
        if (parcela <= (renda * 0.15)) {
            return cliente = {
                emprestimo: parcela,
                score: score,
                renda: renda,
                situacao: 'Aprovado'
            }, alert('Aprovado'), console.log('aprovado', cliente)
        } else if (parcela <= (renda * 0.30)) {
            return cliente = {
                emprestimo: parcela.toFixed(2),
                score: score,
                renda: renda.toFixed(2),
                situacao: 'Aprovado Com Restrições'
            }, alert('Aprovado com Restrições'), console.log('Aprovado com Restrições', cliente)
        }
    } else if (score >= 400 && score <= 599) {
        return alert('Analise Manual Necessária')
    } else {
        return alert('Reprovado Automáticamente')
    }
}

analiseScore()

