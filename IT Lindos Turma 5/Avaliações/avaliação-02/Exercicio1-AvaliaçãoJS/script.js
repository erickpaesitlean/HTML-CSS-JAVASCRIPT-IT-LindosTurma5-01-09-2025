function acessoParque(){
    let idade = Number(prompt('Insira Sua Idade'))
     let passeEspecial = Number(prompt('Possui Algum Passe Especial?\n1-Acesso Rápido\n2-Idoso\n3-Estudante'))
     if(idade>=18 && passeEspecial == 1){
        alert('Passe: Acesso Rápido\nVocê pode entrar imediatamente! Pois é Maior de Idade e Tem Acesso Rápido!')
     }else if(idade>=60 && passeEspecial == 2){
        alert('Passe: Idoso\nUm Instrutor Irá Te Acompanhar! Aguarde um Minuto!')
     }else if(idade<18 && passeEspecial == 3){
        alert('Passe: Estudante\nAguarde Na Fila De Estudantes!')
     }else{
        alert('Seu Passe Especial Não é Condizente Com a Idade!')
     }
}

acessoParque()