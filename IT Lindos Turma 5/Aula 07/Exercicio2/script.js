function verificacaoAcesso(idade,assinatura,funcionario,finalDeSemana){
    let passandoDados = mensagem(idade,assinatura,funcionario,finalDeSemana)
    return passandoDados
}

function mensagem(idd,ass,func,finalDeSemana){
    if(func==true){
        return 'Você é Funcionário, Pode Entrar!'
    }else if(idd>=18 && ass==true && finalDeSemana==false){
        return 'Pode Entrar! Você Não é Funcionário Mas É Maior de Idade,Assinante e Não é Final de Semana.'
    }else if(idd<18){
        return 'Menor de Idade! Não Pode Entrar!'
    }else if(ass==false){
        return 'Não Assinante! Não Pode Entrar!'
    }else if(finalDeSemana==true && func==false){
        return 'Você Não Pode Entrar Final De Semana Pois Não é Um Funcionário!'
    }
}
alert('VERIFICAÇÃO DE ACESSO')
var idade = Number(prompt('Insira Sua Idade'))
var assinante = Number(prompt('Você é assinante?\n1-SIM\n0-NÃO'))
var funcionario = Number(prompt('Você é Funcionário?\n1-SIM\n0-NÃO'))
var finalDeSemana = Number(prompt('É Final de Semana?\n1-SIM\n0-NÃO'))
alert((verificacaoAcesso(idade,assinante,funcionario,finalDeSemana)))




