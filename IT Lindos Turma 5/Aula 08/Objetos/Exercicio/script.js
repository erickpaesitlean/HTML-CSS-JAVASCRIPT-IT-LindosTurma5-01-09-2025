function transporte(tipoTransporte, placa, modelo, cor, valorPassagens, qntPassagens, mensagem) {
    tipoTransporte = Number(prompt(`=======TIPO DE TRANSPORTE=======\n
        1-CARRO\n
        2-MOTO\n
        3-BICICLETA\n
        4-TRANSPORTE`))
    mensagem = `INFORMAÇÕES REGISTRADAS!\nOBRIGADO VOLTE SEMPRE!`
    switch (tipoTransporte) {
        case 1:
            placa = prompt('Insira a Placa do Seu Carro').trim()
            modelo = prompt('Insira o Modelo do seu Carro').trim()
            cor = prompt('Insira a cor do seu Carro').trim()
            return carro = {
                placaCarro: placa,
                modeloCarro: modelo,
                corCarro: cor
            }, alert(mensagem), console.log(carro)
            break;
        case 2:
            placa = prompt('Insira a Placa da sua Moto').trim()
            modelo = prompt('Insira o Modelo da sua Moto').trim()
            return moto = {
                placaMoto: placa,
                modeloMoto: modelo
            }, alert(mensagem), console.log(moto)
            break;
        case 3:
            alert('Vagas Limitadas no Bicicletário!')
            break;
        case 4:
            valorPassagens = Number(prompt('Insira o Valor da Passagem:').replace(',', '.'))
            qntPassagens = Number(prompt('Quantas Passagens Desta Você Precisa?'))
            if (valorPassagens >= 0 && qntPassagens >= 0) {
                let totalPassagens = valorPassagens * qntPassagens
                alert(`Serão Depositados ${totalPassagens} Por Dia Para Você Traballhar!`)
            } else {
                alert('Informe Números Válidos!\nCLIQUE "OK" PARA RETORNAR AO INÍCIO')
            }
            break;
        default: 'Erro'
    }
}
transporte()