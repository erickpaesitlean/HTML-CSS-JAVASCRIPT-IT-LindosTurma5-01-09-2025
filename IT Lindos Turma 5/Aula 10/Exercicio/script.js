function receberPerfil() {
    let nome = prompt('Insira seu Nome:')
    let idade = Number(prompt('Insira sua Idade:'))
    if (isNaN(idade)) {
        return alert('Idade Inválida!'), receberPerfil()
    } else {
        let cidade = prompt('Insira sua Cidade')
        criarPerfil(nome, idade, cidade)
    }

}
function criarPerfil(nome, idade, cidade) {
    let dadosPessoais = {
        nome: '',
        idade: 0,
        localizacao: {
            cidade: ''
        }
    }

    dadosPessoais.nome = nome
    dadosPessoais.idade = idade
    dadosPessoais.localizacao.cidade = cidade
    console.log(dadosPessoais)
}

receberPerfil()























































