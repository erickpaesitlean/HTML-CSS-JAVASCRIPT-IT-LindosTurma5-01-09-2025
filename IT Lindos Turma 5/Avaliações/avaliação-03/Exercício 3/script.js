function salarioFinal() {
    let salarioFunc = document.getElementById('input-salario').value
    let transporteFunc = document.getElementById('input-transporte').value
    let refeicaoFunc = document.getElementById('input-refeicao').value
    let inss = document.getElementById('input-inss').value


    if (salarioFunc <= 0 || salarioFunc == '') {
        alert('O Campo Salário Base Não Pode Estar Vazio,Negativo Ou Zero!')
    } else if (transporteFunc <= 0 || transporteFunc == '') {
        alert('O Campo Transporte Não Pode Estar Vazio,Negativo ou Zero')
    } else if (refeicaoFunc <= 0 || refeicaoFunc == '') {
        alert('O Campo Refeição Não Pode Estar Vazio,Negativo ou Zero')
    } else if (inss < 0 || inss > 99 || inss == '') {
        alert('O Campo INSS Não Pode Estar Vazio,Negativo ou Maior Que 99')
    } else {
        let salario = Number((salarioFunc - transporteFunc) - refeicaoFunc)
        let salarioFinal = salario - (salario * (Number(inss / 100)))
        alert(`O Salário Final Do Funcionário É: R$${salarioFinal.toFixed(2)}`)
    }


}