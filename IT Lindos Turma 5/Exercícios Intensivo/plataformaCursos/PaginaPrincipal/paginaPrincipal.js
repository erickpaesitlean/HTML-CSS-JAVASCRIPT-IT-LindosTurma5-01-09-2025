var idParaEditar 
function gerarTabelaCursos() {
    let urlCursos = `http://localhost:3000/cursos`
    let urlCategorias = `http://localhost:3000/categorias`
    let urlMentores = `http://localhost:3000/mentores`
    fetch(urlCursos).then(promisseCursos => promisseCursos.json()).then(cursos => {
        fetch(urlCategorias).then(promisseCategorias => promisseCategorias.json()).then(categorias => {
            fetch(urlMentores).then(promisseMentores => promisseMentores.json()).then(mentores => {

                let categoriaCursoNome = ''
                let nomeMentor = ''
                let somaPrecos = 0
                let somaCargasHorarias = 0
                for (let index in cursos) {
                    somaPrecos += Number(cursos[index].preco)
                    somaCargasHorarias += Number(cursos[index].cargaHoraria)
                    for (let indexD in categorias) {
                        if (cursos[index].categoriaId == categorias[indexD].id) {
                            categoriaCursoNome = categorias[indexD].nome
                        }
                    }

                    for (let indexM in mentores) {
                        if (cursos[index].mentorId == mentores[indexM].id) {
                            nomeMentor = mentores[indexM].nome
                        }
                    }

                    let htmlCursos = `
                        <td>${cursos[index].id}</td>
                        <td>${cursos[index].titulo}</td>
                        <td>${categoriaCursoNome}</td>
                        <td>${nomeMentor}</td>
                        <td>R$${Number(cursos[index].preco).toFixed(2)}</td>
                        <td>${cursos[index].cargaHoraria} Horas</td>
                        <td>${cursos[index].nivel}</td>
                        <td>
                            <button class="btn btn-outline-info"onclick="guardarId('${cursos[index].id}')">Editar</button>
                        </td>
                        <td>
                            <button class="btn btn-outline-danger" onclick="deletarCurso('${cursos[index].id}')">Deletar</button>
                        </td>
                    `
                    document.getElementById('corpoTabela').innerHTML += htmlCursos
                    let htmlFoot = `
                        <td colspan="9">Quantidade de cursos: ${cursos.length}| Média de preço: R$${(somaPrecos/cursos.length).toFixed(2)}| Carga horária média: ${(somaCargasHorarias/cursos.length).toFixed(0)} Horas</td>
                    `
                    document.getElementById('rodapeTabela').innerHTML = htmlFoot

                }

                for (let index in mentores) {
                    let optionsMentores = `
                        <option value="${mentores[index].nome}">${mentores[index].nome}</option>
                    `
                    document.getElementById('inputMentorNome').innerHTML += optionsMentores
                }

                for (let index in categorias) {
                    let htmlOptionsCategorias = `
                        <option value="${categorias[index].nome}">${categorias[index].nome}</option>
                    `
                    document.getElementById('inputCategoriaNome').innerHTML += htmlOptionsCategorias
                }



            })
        })
    })
}

gerarTabelaCursos()

function filtrarPorMentor() {
    document.getElementById('corpoTabela').innerHTML = ''
    let mentorSelecionado = document.getElementById('inputMentorNome').value
        fetch('http://localhost:3000/categorias').then(promisseCategorias => promisseCategorias.json()).then(categorias => {
            fetch('http://localhost:3000/mentores').then(promisseMentores => promisseMentores.json()).then(mentores => {

                let idMentor = ''
                for (let index in mentores) {
                    if (mentorSelecionado == mentores[index].nome) {
                        idMentor = mentores[index].id
                    }
                }

                fetch(`http://localhost:3000/cursos?mentorId=${idMentor}`).then(promisseCursosFiltrado => promisseCursosFiltrado.json()).then(cursosFiltrados => {
                    fetch(`http://localhost:3000/mentores/${idMentor}`).then(promisseMentorSelecionado => promisseMentorSelecionado.json()).then(mentor => {
                        if(cursosFiltrados.length == 0){
                            Swal.fire('Nenhum curso cadastrado por este mentor!')
                            document.getElementById('rodapeTabela').innerHTML = ''
                            return
                        }
                        for (let index in cursosFiltrados) {

                            let nomeCategoriaFiltrado = ''
                            for (let indexC in categorias) {
                                if (cursosFiltrados[index].categoriaId == categorias[indexC].id) {
                                    nomeCategoriaFiltrado = categorias[indexC].nome
                                }
                            }
                            let htmltCursosFiltrados = `
                        <td>${cursosFiltrados[index].id}</td>
                        <td>${cursosFiltrados[index].titulo}</td>
                        <td>${nomeCategoriaFiltrado}</td>
                        <td>${mentor.nome}</td>
                        <td>${cursosFiltrados[index].preco}</td>
                        <td>${cursosFiltrados[index].cargaHoraria} Horas</td>
                        <td>${cursosFiltrados[index].nivel}</td>
                        <td>
                            <button class="btn btn-outline-info" onclick="guardarId('${cursosFiltrados[index].id}')">Editar</button>
                        </td>
                        <td>
                            <button class="btn btn-outline-danger" onclick="deletarCurso('${cursosFiltrados[index].id}')">Deletar</button>
                        </td>                
                    `
                            document.getElementById('corpoTabela').innerHTML += htmltCursosFiltrados

                        }
                    })

                })

            })
        })
}

function filtrarPorCategoria(){
    document.getElementById('corpoTabela').innerHTML = ''
    let categoriaSelecionada = document.getElementById('inputCategoriaNome').value
    fetch("http://localhost:3000/categorias").then(promisseCategorias=>promisseCategorias.json()).then(categorias=>{
        let idCategoria = ''
        for(let index in categorias){
            if(categoriaSelecionada == categorias[index].nome){
                idCategoria = categorias[index].id
            }
        }
        fetch(`http://localhost:3000/cursos?categoriaId=${idCategoria}`).then(promisseCursosPorCategoria=>promisseCursosPorCategoria.json()).then(cursosPorCategoria=>{
            fetch('http://localhost:3000/mentores').then(promisseMentores=>promisseMentores.json()).then(mentores=>{

                if(cursosPorCategoria.length == 0){
                    Swal.fire('Nenhum curso cadastrado com essa categoria!')
                    document.getElementById('rodapeTabela').innerHTML = ''
                    return
                }

                console.log(cursosPorCategoria)
                let mentorCurso = ''
                let nomeCategoria = ''
                for(let index in categorias){
                    for(let indexC in cursosPorCategoria){
                        if(categorias[index].id == cursosPorCategoria[indexC].categoriaId){
                            nomeCategoria = categorias[index].nome
                        }
                    }
                }
                for(let index in cursosPorCategoria){
                    for(let indexC in mentores){
                        if(cursosPorCategoria[index].mentorId == mentores[indexC].id){
                            mentorCurso = mentores[indexC].nome
                        }
                    }
                }
                for(let index in cursosPorCategoria){
                    let htmlCursosPorCategoria = `
                        <td>${cursosPorCategoria[index].id}</td>
                        <td>${cursosPorCategoria[index].titulo}</td>
                        <td>${nomeCategoria}</td>
                        <td>${mentorCurso}</td>
                        <td>${cursosPorCategoria[index].preco}</td>
                        <td>${cursosPorCategoria[index].cargaHoraria}</td>
                        <td>${cursosPorCategoria[index].nivel}</td>
                        <td>
                            <button class="btn btn-outline-info">Editar</button>
                        </td>
                        <td>
                            <button class="btn btn-outline-danger" onclick="deletarCurso('${cursosPorCategoria[index].id}')">Deletar</button>
                        </td>
                    `
                    document.getElementById('corpoTabela').innerHTML += htmlCursosPorCategoria
                }
            })
        })
    })
}

function deletarCurso(idCurso) {
    document.getElementById('corpoTabela').innerHTML = ''
    let url = `http://localhost:3000/cursos/${idCurso}`
    fetch(url, {
        method: 'DELETE'
    }).then(promisse => promisse.json()).then(CursoDeletado => {
        Swal.fire('Curso deletado')
        console.log(CursoDeletado)
        gerarTabelaCursos()
    })
}

function criarOuEditar(){
    if(idParaEditar){
        window.location.href = `../PaginaCriaçãoEedição/criacaoEdicao.html?id=${idParaEditar}`
    }else{
        window.location.href = `../PaginaCriaçãoEedição/criacaoEdicao.html`
    }
}
function guardarId(idCurso){
    idParaEditar = idCurso
    criarOuEditar()
}

function direcionarMentores(){
    window.location.href = '../PaginaGerenciarMentores/gerenciarMentores.html'
}

function direcionarGerenciarCategorias(){
    window.location.href = '../PaginaGerenciarCategorias/gerenciarCategorias.html'
}