const alunos = [
    { id: 1, nome: "Ana Souza" },
    { id: 2, nome: "Carlos Pereira" },
    { id: 3, nome: "Mariana Lima" },
    { id: 4, nome: "Lucas Martins" },
    { id: 5, nome: "Fernanda Oliveira" },
    { id: 6, nome: "Ricardo Santos" },
    { id: 7, nome: "Juliana Costa" },
    { id: 8, nome: "Paulo Mendes" },
    { id: 9, nome: "Camila Ribeiro" },
    { id: 10, nome: "Eduardo Almeida" }
];
const cursos = [
    { titulo: "JavaScript Básico", alunosId: [1, 2, 7] },
    { titulo: "HTML e CSS", alunosId: [1, 7, 9] },
    { titulo: "React Iniciante", alunosId: [2, 10] },
    { titulo: "Banco de Dados", alunosId: [3, 8] },
    { titulo: "JavaScript Avançado", alunosId: [3, 8] },
    { titulo: "Node.js", alunosId: [4, 9] },
    { titulo: "Lógica de Programação", alunosId: [5, 6] },
    { titulo: "React Avançado", alunosId: [5] },
    { titulo: "Python para Iniciantes", alunosId: [6] }
];


function procurarAluno() {
    let nomeAluno = document.getElementById('nome-aluno').value
    let idAluno = 0
    for (let index = 0; index < alunos.length; index++) {
        if (nomeAluno == alunos[index].nome) {
            Number(idAluno = alunos[index].id)
        }
    }


    if (idAluno > 0) {
        for (let index = 0; index < cursos.length; index++) {
            for (let i = 0; i < cursos[index].alunosId.length; i++) {
                if (idAluno == cursos[index].alunosId[i]) {
                    console.log(cursos[index].titulo)
                }
            }
        }
    }
    // if (idAluno > 0) {
    //     for(let curso of cursos){
    //         for(let aluno of curso.alunosId){
    //             if(idAluno == aluno){
    //                 console.log(curso.titulo)
    //             }
    //         }
    //     }
    // }

}