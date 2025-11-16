function calcularIdade(){
    let date = new Date()
    let dataNascimento = document.getElementById('input-data').value
    let dataDividida = dataNascimento.split('-')
    let anoAtual = date.getFullYear()
    let calculoIdade =  anoAtual - dataDividida[0]
    document.getElementById('resultado-idade').innerText = `Você tem: ${calculoIdade} Anos`
}

function exibirDataAtual(){
    let data = new Date()
    let opcoes = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    console.log(`Hoje é ${data.toLocaleDateString('pt-br',opcoes)}`)
}