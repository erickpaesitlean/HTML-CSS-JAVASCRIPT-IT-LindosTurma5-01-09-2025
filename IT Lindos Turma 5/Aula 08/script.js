//CONDIÇÃO CASO (switch case)

function diaSemana(dia){
    switch(dia){
        case 1:
            return 'Domingo'
            break;
        case 2:
            return 'Segunda-Feira'
            break;
        case 3:
            return 'Terça-Feira'
            break;
        case 4:
            return 'Quarta-Feira'
            break;
        case 5:
            return 'Quinta-Feira'
            break;
        case 6:
            return 'Sexta-Feira'
            break;
        case 7:
            return 'Sábado'
            break;
            default : 'Opção Inválida'
    }   
}

console.log(diaSemana(6))