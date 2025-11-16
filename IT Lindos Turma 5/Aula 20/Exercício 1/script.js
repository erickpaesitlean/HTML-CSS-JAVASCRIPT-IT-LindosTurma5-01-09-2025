class Book{
    constructor(obj){
        this.title = obj.title
        this.author = obj.author
        this.availability = 'Disponível'
    }

    markBorrowed(){
        this.availability = 'Emprestado'
    }
    returnBook(){
        this.availability = 'Disponível'
    }
    attInforms(){
        this.title = prompt('Insira O Novo Título Do Livro')
        this.author = prompt('Insira O Novo Autor Do Livro')
    }
}
var books = []
function addBook(){
    let obj = {
        title: document.getElementById('inputTitle').value,
        author: document.getElementById('inputAuthor').value
    }
    let newBook = new Book(obj)
    books.push(newBook)
    tableGenerator()
}
function tableGenerator(){
    document.getElementById('bodyTable').innerHTML = ''
    if(books.length >0){
        document.getElementById('bodyTableForm').style.display = 'block'
    }
    for(let index = 0;index<books.length;index++){
        let tableHtml = `
        <tr class="livroTabela">
            <td>${books[index].title}</td>
            <td>${books[index].author}</td>
            <td>${books[index].availability}</td>
            <td>
                <button class="btn btn-info" onclick="books[${index}].markBorrowed();tableGenerator()")>
                    Marcar Como Emprestado
                </button>
            </td>
            <td>
                <button class="btn btn-secondary" onclick="books[${index}].returnBook();tableGenerator()">
                    Devolver
                </button>
            </td>
            <td>
                <button class="btn btn-warning" onclick="books[${index}].attInforms();tableGenerator()">
                    Editar Informações
                </button>
            </td>
        </tr>
        `
        document.getElementById('bodyTable').innerHTML += tableHtml
    }
}