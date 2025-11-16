function recebeValorTransacoes() {
    let usuarioSaldo = Number(prompt('Insira o Valor Atual da Sua Conta!'))
    if (isNaN(usuarioSaldo) || usuarioSaldo < 0) {
        alert('Você Não Está Inserindo Um Número ou Seu Saldo Atual é Negativo!')
        return usuarioSaldo
    }
    let tipoDeTransacao = Number(prompt('Escolha a Categoria da Transação:\n1-DEPÓSITO\n2-SAQUE'))
    if (isNaN(tipoDeTransacao)) {
        return alert('Insira um Número!')
    } else {
        switch (tipoDeTransacao) {
            case 1: tipoDeTransacao = 'Depósito'
                break;
            case 2: tipoDeTransacao = 'Saque'
                break;
            default: return alert('Escolha Uma Opção Válida!')
        }
    }

    let valorDaTransacao = Number(prompt('Insira o Valor da Transação'))
    if (isNaN(valorDaTransacao)) {
        return alert('Insira um Número!')
    } else {
        if (valorDaTransacao > 0) {
            let categoriaDaTransacao = Number(prompt('Escolha a Categoria da Transação\n1-Alimentação\n2-Transporte\n3-Moradia\n4-Salário\n5-Extras'))
            switch (categoriaDaTransacao) {
                case 1:
                    categoriaDaTransacao = 'Alimentação'
                    break;
                case 2:
                    categoriaDaTransacao = 'Transporte'
                    break;
                case 3:
                    categoriaDaTransacao = 'Moradia'
                    break;
                case 4:
                    categoriaDaTransacao = 'Salário'
                    break;
                case 5:
                    categoriaDaTransacao = 'Extras'
                    break;
                default: alert('Insira uma Opção Válida de Categoria!')
                    break;
            }

            let descOpcional = Number(prompt('Quer Adicionar uma Descrição? (Opcional)\n1-SIM\n2-Não'))
            let inserirDesc = ''
            switch (descOpcional) {
                case 1:
                    inserirDesc = prompt('Insira sua Descrição:')
                    trataValoresTransacao(tipoDeTransacao, valorDaTransacao, categoriaDaTransacao, inserirDesc, usuarioSaldo)
                    break;
                case 2:
                    alert('OK Volte Sempre!')
                    trataValoresTransacao(tipoDeTransacao, valorDaTransacao, categoriaDaTransacao, 'Não Optou por Descrição', usuarioSaldo)
                    break;
                default: return 'Insira Uma Opção Válida!'
            }


        } else {
            return alert('Você Deve Informar um Número Maior que 0')
        }

    }

}
function trataValoresTransacao(tipoDeTransacao, valorDaTransacao, categoriaDaTransacao, inserirDesc, usuarioSaldo) {

    let transacaoObj = {
        tipoDeTransacao: tipoDeTransacao,
        valorDaTransacao: valorDaTransacao,
        categoriaDaTransacao: categoriaDaTransacao,
        descricao: inserirDesc
    }



    if (tipoDeTransacao == 'Depósito') {
        console.log(transacaoObj)
        console.log('Transação de Depósito Feita com Sucesso!')
        console.log(`Saldo Antes da Transação de Depósito: ${usuarioSaldo}`)
        console.log(`Saldo Atual do Usuário Ápos o Depósito: ${usuarioSaldo += transacaoObj.valorDaTransacao}`)
    } else {
        console.log(transacaoObj)
        console.log('Transação de Saque Feita Com Sucesso!')
        console.log(`Saldo Antes da Transação de Saque: ${usuarioSaldo}`)
        console.log(`Saldo Atual do Usuário Ápos o Saque: ${usuarioSaldo -= transacaoObj.valorDaTransacao}`)
        if (categoriaDaTransacao == 'Transporte' && valorDaTransacao > 500) {
            console.log('Você Está Gastando Muito com Transporte, Dê uma Maneirada!')
        } else if (categoriaDaTransacao == 'Extras' && valorDaTransacao > 800) {
            console.log('Você Está Gastando Muito com Extras, Dê uma Maneirada!')
        }
    }

}

recebeValorTransacoes()