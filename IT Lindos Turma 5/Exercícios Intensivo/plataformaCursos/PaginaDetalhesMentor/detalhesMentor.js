let url = new URLSearchParams(window.location.search)
let idMentor = url.get('idMentor')

function gerarTabelaCursos() {
    let url = `http://localhost:3000/cursos?mentorId=${idMentor}`
    fetch(url).then(promisse => promisse.json()).then(cursosmentor => {
        fetch("http://localhost:3000/categorias").then(promisse => promisse.json()).then(categorias => {
            fetch("http://localhost:3000/mentores").then(promisse => promisse.json()).then(mentores => {
                if(cursosmentor.length == 0){
                    document.getElementById('rodapeTabela').innerHTML = `
                        <td colspan="7">Esse mentor não tem cursos cadastrados!</td>
                    `
                    return
                }
                let nomeCategoriaCursos = ''
                let nomeMentorCurso = ''
                let somaCursos = 0
                let somaCargaHoraria = 0
                for (let index in cursosmentor) {
                    for (let indexC in categorias) {
                        if (cursosmentor[index].categoriaId == categorias[indexC].id) {
                            nomeCategoriaCursos = categorias[indexC].nome
                        }
                    }
                    for(let indexD in mentores){
                        if(cursosmentor[index].mentorId == mentores[indexD].id){
                            nomeMentorCurso = mentores[indexD].nome
                        }
                    }
                    somaCursos += Number(cursosmentor[index].preco)
                    somaCargaHoraria += Number(cursosmentor[index].cargaHoraria)
                    let htmlCursos = `
                <td>${cursosmentor[index].id}</td>
                <td>${cursosmentor[index].titulo}</td>
                <td>${nomeCategoriaCursos}</td>
                <td>${nomeMentorCurso}</td>
                <td>R$${cursosmentor[index].preco}</td>
                <td>${cursosmentor[index].cargaHoraria} Horas</td>
                <td>${cursosmentor[index].nivel}</td>
            `
                    document.getElementById('corpoTabela').innerHTML += htmlCursos
                }
                let htmlFoot = `
            <td colspan="7">Total de cursos: ${cursosmentor.length} | Média de preços: R$${(somaCursos / cursosmentor.length).toFixed(2)} | Média Carga Horária: ${(somaCargaHoraria / cursosmentor.length).toFixed(0)} Horas</td>
        `
                document.getElementById('rodapeTabela').innerHTML = htmlFoot
            })

        })


    })
}

gerarTabelaCursos()

function voltarPagina(){
    window.location.href = '../PaginaGerenciarMentores/gerenciarMentores.html'
}