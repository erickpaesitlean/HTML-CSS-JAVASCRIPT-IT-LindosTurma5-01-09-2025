function mediaAluno(nota1,nota2,nota3,nota4) {
    alert('=====CALCULADOR DE MÉDIA=====\nAperte OK para continuar')
    nota1 = Number(prompt('Insira a Nota 1:').replace(',', '.'))
    nota2 = Number(prompt('Insira a Nota 2:').replace(',', '.'))
    nota3 = Number(prompt('Insira a Nota 3:').replace(',', '.'))
    nota4 = Number(prompt('Insira a Nota 4:').replace(',', '.'))
    media = (nota1 + nota2 + nota3 + nota4) / 4.
    if (media >= 8) {
        alert('Aprovado com mérito, sua média foi: ' + media.toFixed(2))
    } else if (media >= 6 && media < 8) {
        alert('Aprovado, sua média foi: ' + media.toFixed(2) + '\nCondição para Aprovação com Mérito = Média Maior ou igual a 8')
    } else if (media >= 4 && media < 6) {
        alert('Recuperação, sua média foi: ' + media.toFixed(2) + '\nCondição para Aprovação = Média Maior ou igual a 6')
    } else {
        alert('Reprovado, sua média foi: ' + media.toFixed(2) + '\nCondição para Recuperação = Média Maior ou igual a 4')
    }
}

mediaAluno()

