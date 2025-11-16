let url = new URLSearchParams(window.location.search)
let idParam = url.get('id')
function gerarFormulario() {
    if (idParam == null) {
        let htmlFormCreate = `
            <h1 id="tituloForm" class="mb-3">Cadastro de Cursos</h1>
            <div class="input-group mb-3">
            <input id="tituloCreate" type="text" class="form-control" aria-label="Nome Curso" aria-describedby="basic-addon2">
            <span class="input-group-text" id="basic-addon2">Título</span>
            </div>
            <select id="selectCategoriaCreate" class="form-select form-select-lg mb-3" aria-label="Large select example">
                <option selected>Escolha a Categoria</option>
            </select>
            <select id="selectMentorCreate" class="form-select form-select-lg mb-3" aria-label="Large select example">
                <option selected>Escolha a Mentoria</option>
            </select>
            <div class="input-group mb-3">
            <input id="precoCreate" type="number" class="form-control" aria-label="Preço Curso" aria-describedby="basic-addon2">
            <span class="input-group-text" id="basic-addon2">Preço</span>
            </div>
            <div class="input-group mb-3">
            <input id="cargaCreate" type="text" class="form-control" aria-label="Carga Horária" aria-describedby="basic-addon2">
            <span class="input-group-text" id="basic-addon2">Carga Horária</span>
            </div>
            <select id="nivelCreate" class="form-select form-select-lg mb-3" aria-label="Large select example">
                <option selected>Escolha o Nível</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
            <button class="btn btn-success" onclick="cadastrarOuEditarCurso()">Cadastrar Curso</button>
        `
        document.getElementById('formulario').innerHTML = htmlFormCreate
        fetch("http://localhost:3000/categorias").then(promisseCategorias => promisseCategorias.json()).then(categorias => {
            fetch("http://localhost:3000/mentores").then(promisseMentores => promisseMentores.json()).then(mentores => {
                for (let index in categorias) {
                    let htmlOptions = `
                    <option value="${categorias[index].nome}">${categorias[index].nome}</option>
                `
                    document.getElementById('selectCategoriaCreate').innerHTML += htmlOptions
                }
                for (let index in mentores) {
                    let htmlOptions = `
                    <option value="${mentores[index].nome}">${mentores[index].nome}</option>
                `
                    document.getElementById('selectMentorCreate').innerHTML += htmlOptions
                }
            })

        })
    } else {
        let htmlFormEdit = `
        <h1 class="mb-3">Editar Curso</h1>
            <div class="input-group mb-3">
            <input id="tituloEdit" type="text" class="form-control" aria-label="Nome Curso" aria-describedby="basic-addon2">
            <span class="input-group-text" id="basic-addon2">Título</span>
            </div>
            <select id="selectCategoriaEdit" class="form-select form-select-lg mb-3" aria-label="Large select example">
                <option selected>Escolha a Categoria</option>
            </select>
            <select id="selectMentorEdit" class="form-select form-select-lg mb-3" aria-label="Large select example">
                <option selected>Escolha a Mentoria</option>
            </select>
            <div class="input-group mb-3">
            <input id="precoEdit" type="number" class="form-control" aria-label="Preço Curso" aria-describedby="basic-addon2">
            <span class="input-group-text" id="basic-addon2">Preço</span>
            </div>
            <div class="input-group mb-3">
            <input id="cargaEdit" type="text" class="form-control" aria-label="Carga Horária" aria-describedby="basic-addon2">
            <span class="input-group-text" id="basic-addon2">Carga Horária</span>
            </div>
            <select id="nivelEdit" class="form-select form-select-lg mb-3" aria-label="Large select example">
                <option selected>Escolha o Nível</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
            <button class="btn btn-success" onclick="cadastrarOuEditarCurso()">Editar Curso</button>
        `
        document.getElementById('formulario').innerHTML = htmlFormEdit
        fetch("http://localhost:3000/categorias").then(promisseCategorias => promisseCategorias.json()).then(categorias => {
            fetch("http://localhost:3000/mentores").then(promisseMentores => promisseMentores.json()).then(mentores => {
                fetch(`http://localhost:3000/cursos/${idParam}`).then(promisseCurso => promisseCurso.json()).then(curso => {
                    console.log(curso)

                    document.getElementById('tituloEdit').value = curso.titulo
                    for (let index in categorias) {
                        let htmlOptions = `
                        <option value="${categorias[index].nome}">${categorias[index].nome}</option>
                    `
                        document.getElementById('selectCategoriaEdit').innerHTML += htmlOptions
                    }
                    let mentorExistente = ''
                    for (let index in mentores) {
                        let htmlOptions = `
                        <option value="${mentores[index].nome}">${mentores[index].nome}</option>
                    `
                        document.getElementById('selectMentorEdit').innerHTML += htmlOptions
                        if (curso.mentorId == mentores[index].id) {
                            mentorExistente = mentores[index].nome
                        }
                    }

                    let categoriaExistente = ''
                    for (let index in categorias) {
                        if (curso.categoriaId == categorias[index].id) {
                            categoriaExistente = categorias[index].nome
                        }
                    }
                    document.getElementById('selectCategoriaEdit').value = categoriaExistente
                    document.getElementById('selectMentorEdit').value = mentorExistente
                    document.getElementById('precoEdit').value = curso.preco
                    document.getElementById('cargaEdit').value = curso.cargaHoraria
                    document.getElementById('nivelEdit').value = curso.nivel
                })
            })

        })
    }
}

gerarFormulario()

function cadastrarOuEditarCurso() {
    let url
    let obj = {}
    let config = {}

    fetch("http://localhost:3000/categorias").then(promisseCategorias => promisseCategorias.json()).then(categorias => {
        fetch("http://localhost:3000/mentores").then(promisseMentores => promisseMentores.json()).then(mentores => {
            if (idParam == null) {
                if (document.getElementById('tituloCreate').value.trim() == '') {
                    Swal.fire('Insira o nome do curso!')
                    return
                }
                if (document.getElementById('tituloCreate').value.length < 3) {
                    Swal.fire('O tituo do curso deve ter ao menos 3 dígitos!')
                    return
                }
                if (document.getElementById('selectCategoriaCreate').value == 'Insira a categoria') {
                    Swal.fire('Insira a categoria do curso!')
                    return
                }
                if (document.getElementById('selectMentorCreate').value == 'Insira a mentoria') {
                    Swal.fire('Insira a mentoria do curso!')
                    return
                }
                if (document.getElementById('precoCreate').value.trim() == '') {
                    Swal.fire('Insira um preço para o curso!')
                    return
                }
                if (document.getElementById('precoCreate').value < 0) {
                    Swal.fire('O preço do curso não pode ser negativo!')
                    return
                }
                if (document.getElementById('cargaCreate').value.trim() == '') {
                    Swal.fire('Insira a carga horária do curso!')
                    return
                }
                if (document.getElementById('cargaCreate').value < 0) {
                    Swal.fire('A carga horária do curso não pode ser negativa!')
                    return
                }


                let nomeCategoriaTransformadoEmID = document.getElementById('selectCategoriaCreate').value
                for (let index in categorias) {
                    if (nomeCategoriaTransformadoEmID == categorias[index].nome) {
                        nomeCategoriaTransformadoEmID = categorias[index].id
                    }
                }
                let nomeMentorTrnsformadoEmId = document.getElementById('selectMentorCreate').value
                for(let index in mentores){
                    if(nomeMentorTrnsformadoEmId == mentores[index].nome){
                        nomeMentorTrnsformadoEmId = mentores[index].id
                    }
                }
                console.log(nomeMentorTrnsformadoEmId)
                obj.titulo = document.getElementById('tituloCreate').value
                obj.categoriaId = nomeCategoriaTransformadoEmID
                obj.mentorId = nomeMentorTrnsformadoEmId
                obj.preco = document.getElementById('precoCreate').value
                obj.cargaHoraria = document.getElementById('cargaCreate').value
                obj.nivel = document.getElementById('nivelCreate').value
                config.method = 'POST'
                config.headers = {
                    "Content-Type": "application/json"
                }
                config.body = JSON.stringify(obj)
                url = 'http://localhost:3000/cursos'
                fetch(url, config).then(promisseCreateOrEdit => promisseCreateOrEdit.json()).then(obj => {
                    window.location.href = `../PaginaPrincipal/paginaPrincipal.html`
                })

            } else {
                if (document.getElementById('tituloEdit').value.trim() == '') {
                    Swal.fire('Insira o nome do curso!')
                    return
                }
                if (document.getElementById('tituloEdit').value.length < 3) {
                    Swal.fire('O tituo do curso deve ter ao menos 3 dígitos!')
                    return
                }
                if (document.getElementById('selectCategoriaEdit').value == 'Insira a categoria') {
                    Swal.fire('Insira a categoria do curso!')
                    return
                }
                if (document.getElementById('selectMentorEdit').value == 'Insira a mentoria') {
                    Swal.fire('Insira a mentoria do curso!')
                    return
                }
                if (document.getElementById('precoEdit').value.trim() == '') {
                    Swal.fire('Insira um preço para o curso!')
                    return
                }
                if (document.getElementById('precoEdit').value < 0) {
                    Swal.fire('O preço do curso não pode ser negativo!')
                    return
                }
                if (document.getElementById('cargaEdit').value.trim() == '') {
                    Swal.fire('Insira a carga horária do curso!')
                    return
                }
                if (document.getElementById('cargaEdit').value < 0) {
                    Swal.fire('A carga horária do curso não pode ser negativa!')
                    return
                }
                let nomeCategoriaTransformadoEmIdEdit = document.getElementById('selectCategoriaEdit').value
                for (let index in categorias) {
                    if (nomeCategoriaTransformadoEmIdEdit == categorias[index].nome) {
                        nomeCategoriaTransformadoEmIdEdit = categorias[index].id
                    }
                }
                fetch(`http://localhost:3000/cursos/${idParam}`).then(promisseCurso => promisseCurso.json()).then(curso => {
                    console.log(curso)
                    let nomeMentorTransformadoEmIdEdit = document.getElementById('selectMentorEdit').value
                    for (let index in mentores) {
                        if (nomeMentorTransformadoEmIdEdit == mentores[index].nome) {
                            nomeMentorTransformadoEmIdEdit = mentores[index].id
                        }
                    }


                    obj.titulo = document.getElementById('tituloEdit').value
                    obj.categoriaId = nomeCategoriaTransformadoEmIdEdit
                    obj.mentorId = nomeMentorTransformadoEmIdEdit
                    obj.preco = document.getElementById('precoEdit').value
                    obj.cargaHoraria = document.getElementById('cargaEdit').value
                    obj.nivel = document.getElementById('nivelEdit').value
                    config.method = 'PUT'
                    config.headers = {
                        "Content-Type": "application/json"
                    }
                    config.body = JSON.stringify(obj)
                    url = `http://localhost:3000/cursos/${idParam}`
                    fetch(url, config).then(promisseCreateOrEdit => promisseCreateOrEdit.json()).then(obj => {
                        window.location.href = `../PaginaPrincipal/paginaPrincipal.html`
                    })
                })


            }


        })
    })




}