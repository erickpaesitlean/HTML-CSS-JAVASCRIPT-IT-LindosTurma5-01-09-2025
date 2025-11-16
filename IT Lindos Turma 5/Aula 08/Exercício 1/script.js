function sistemaRH(opcao){
    alert('=======SISTEMA RH=======\nAperte OK Para Continuar!')
    opcao = Number(prompt(`Escolha Uma Opção:
        \n1-CADASTRAR FUNCIONÁRIO
        \n2-CONSULTAR DADOS DO FUNCIONÁRIO
        \n3-ATUALIZAR DADOS
        \n4-EXCLUIR FUNCIONÁRIO
        \n5-ENCERRAR SISTEMA`))
    switch(opcao){
        case 1:
            return alert('Funcionário Cadastrado com Sucesso')
            break;
        case 2:
            return alert('Consultando Dados do Funcionário')
            break;
        case 3: 
            return alert('Dados Atualizados com Sucesso')
            break;
        case 4:
            return alert('Funcionário Excluido')
            break;
        case 5:
            return alert('Encerrando Sistema')
            break;
            default: 'Opção Inválida, Tente Novamente'
    }
} 
function categorizacao(codicoCategoria){

    codicoCategoria = prompt('Insira o Códico da Categoria:').toUpperCase()

    switch(codicoCategoria){
        case 'ALI':
            return alert('Alimentos - Setor A')
            break;
        case 'BEB':
            return alert('Bebidas - Setor B')
            break;
        case 'HIG':
            return alert('Higiene - Setor C')
            break;
        case 'LIM':
            return alert('Limpeza - Setor D')
            break;
        case 'UTI':
            return alert('Utilidades - Setor E')
            break;
            default : 'Categoria Não Encontrada'

    }
}
sistemaRH()
//categorizacao()




