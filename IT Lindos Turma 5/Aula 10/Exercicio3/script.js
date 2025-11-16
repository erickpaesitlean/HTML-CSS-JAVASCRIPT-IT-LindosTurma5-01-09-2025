function recebeDadosChamado() {
    let tituloChamado = prompt('Insira o Titulo do Chamado:')
    let descricao = prompt('Insira a Descrição do Chamado:')
    let prioridade = Number(prompt('Escolha a Prioridade Do Chamado:\n1-BAIXA\n2-MEDIA\n3-ALTA'))
    switch (prioridade) {
        case 1:
            prioridade = 'Baixa'
            break;
        case 2:
            prioridade = 'Média'
            break;
        case 3:
            prioridade = 'ALTA'
            break;
            default: return alert('Insira Uma Opção Válida'),recebeDadosChamado()
    }
    trataDadoaChamado(tituloChamado, descricao, prioridade)
}

function trataDadoaChamado(tituloChamado, descricao, prioridade) {

    let detalhes = {
        tituloChamado: tituloChamado,
        descricao: descricao
    }
    let status = {
        prioridade: prioridade,
        concluida: false
    }
    detalhes.tituloChamado
    detalhes.descricao = descricao
    status.prioridade = prioridade
    status.concluida = true
    console.log(detalhes)
    console.log(status)
}

recebeDadosChamado()