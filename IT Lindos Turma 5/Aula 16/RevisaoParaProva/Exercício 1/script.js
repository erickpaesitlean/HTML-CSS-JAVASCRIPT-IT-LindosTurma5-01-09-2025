
const alunos = [
    { nome: "Ana Souza", notas: [8, 7, 9] },
    { nome: "Carlos Pereira", notas: [5, 6, 4] },
    { nome: "Mariana Lima", notas: [9, 8, 10] },
    { nome: "Lucas Martins", notas: [6, 5, 7] },
    { nome: "Fernanda Oliveira", notas: [7, 8, 7] },
    { nome: "Ricardo Santos", notas: [4, 5, 6] },
    { nome: "Juliana Costa", notas: [10, 9, 10] },
    { nome: "Paulo Mendes", notas: [6, 7, 5] },
    { nome: "Camila Ribeiro", notas: [7, 7, 8] },
    { nome: "Eduardo Almeida", notas: [5, 6, 5] },
    { nome: "Sofia Carvalho", notas: [8, 9, 9] },
    { nome: "Felipe Nunes", notas: [6, 6, 7] },
    { nome: "Laura Barros", notas: [9, 8, 9] },
    { nome: "Mateus Correia", notas: [4, 5, 4] },
    { nome: "Isabela Castro", notas: [7, 6, 8] },
    { nome: "Gabriel Lima", notas: [5, 7, 6] },
    { nome: "Renata Azevedo", notas: [9, 9, 10] },
    { nome: "André Silva", notas: [6, 5, 5] },
    { nome: "Patrícia Gomes", notas: [8, 7, 8] },
    { nome: "Thiago Moreira", notas: [5, 4, 6] }
];
var maiorMedia = {
    nome: '',
    media: 0
}
var menorMedia = {
    nome: '',
    media: 10
}
function mostrarResultadoss() {
    for (let index = 0; index < alunos.length; index++) {
        let somaNotas = alunos[index].notas.reduce((n1, n2) => {
            return n1 + n2
        })
        let media = somaNotas / 3
        if (media > maiorMedia.media) {
            maiorMedia.nome = alunos[index].nome
            maiorMedia.media = media
        }
        if (media < menorMedia.media) {
            menorMedia.nome = alunos[index].nome
            menorMedia.media = media
        }
        alunos[index].media = media


        if (media >= 7) {
            console.log(`Nome: ${alunos[index].nome} Média: ${media.toFixed(2)} Resultado: Aprovado`)
            alunos[index].status = 'Aprovado'

        } else {
            console.log(`Nome: ${alunos[index].nome} Média: ${media.toFixed(2)} Resultado: Reprovado`)
            alunos[index].status = 'Reprovado'
        }


        // let soma = 0
        // for(let nota of alunos[index].notas){
        //     soma+= nota
        // }
        var contadorAprovado = 0
        var contadorReprovado = 0
        for (let indexStatus = 0; indexStatus < alunos.length; indexStatus++) {
            if (alunos[indexStatus].status == 'Aprovado') {
                contadorAprovado++
            } else {
                contadorReprovado++
            }
        }


        
    }
    let mediaTotal = 0
    let cont = 0
    for (let index = 0; index < alunos.length; index++) {
        mediaTotal += alunos[index].media
        cont++

    }
    console.log(`Média Geral Da Turma:${mediaTotal / cont}`)
    console.log(`Total Aprovados: ${contadorAprovado}`)
    console.log(`Total Reprovados: ${contadorReprovado}`)
    console.log(`A Menor Média É: ${maiorMedia.media.toFixed(2)} De: ${maiorMedia.nome}`)
    console.log(`A Menor Média É: ${menorMedia.media.toFixed(2)} De: ${menorMedia.nome}`)


    //     Média geral da turma (média de todas as médias dos alunos). CHECK

    // Total de aprovados e total de reprovados. CHECK
    // Maior média e o nome do aluno que a alcançou.
    // Menor média e o nome do aluno que a alcançou.

}

