function entradaDados(){
    let nome = prompt('Insira Seu Nome:')
    let idade = Number(prompt('Insira Sua Idade:'))
    let peso = Number(prompt('Insira Seu Peso:').replace(',','.'))
    let altura = Number(prompt('Insira Sua Altura:').replace(',','.'))
    entradaValidacaoCPF(nome,idade,peso,altura)
}
function entradaValidacaoCPF(nome,idade,peso,altura){
    let cpf = Number(prompt('Insira Seu CPF:'))
    
    if(isNaN(cpf)){
       return alert('Você Não Digitou um Número!')
    }else if(cpf.toString().length >11 || cpf.toString().length <11){
        return alert('Seu CPF Não Tem 11 Números')
    }else{
        tratamentoDados(nome,idade,peso,altura,cpf)
    }

    
    
}
function tratamentoDados(nome,idade,peso,altura,cpf){
    let dadosPaciente = {
        nome: nome,
        idade: idade,
        peso: peso,
        altura: altura,
        cpf: cpf
    }

    if(dadosPaciente.idade>=18){
        let nomeContatoEmergencia = prompt('Insira o Nome do Contato de Emergência:')
        let celularContatoEmergencia = Number(prompt('Insira o Celular do Contato de Emergência:'))
        let parentestoContatoEmergencia = prompt('Qual o Grau de Parentesco?')
        dadosPaciente.contatoEmergencia = {
            nomeContatoEmergencia: nomeContatoEmergencia,
            celularContatoEmergencia: celularContatoEmergencia,
            parentestoContatoEmergencia: parentestoContatoEmergencia
        }
        console.log(dadosPaciente)
    }else{
        let nomeContatoMenor = prompt('Insira o Nome do Responsável Pelo Menor:')
        let idadeContatoMenor = Number(prompt('Insira a Idade do Responsável Pelo Menor:'))
        let celularContatoMenor = Number(prompt('Insira o Celular do Responsável Pelo Menor:'))
        let cpfContatoMenor = Number(prompt('Insira o CPF do Responsável Pelo Menor:'))
        if(isNaN(cpfContatoMenor)){
            return alert('Você Não Digitou Números!')
        }else if(cpfContatoMenor.toString().length >11 || cpfContatoMenor.toString().length <11){
            return alert('Seu CPF Não Tem 11 Números')
        }else{
            dadosPaciente.cadastroResponsavel = {
                nomeContatoMenor: nomeContatoMenor,
                idadeContatoMenor: idadeContatoMenor,
                celularContatoMenor: celularContatoMenor,
                cpfContatoMenor: cpfContatoMenor
            }

            console.log(dadosPaciente)
        }

        
    }

}

entradaDados()