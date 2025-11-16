//HTML DOM
//Document Object Model
//Acesso um elemento pelo ID
// var textLorem = document.getElementById('primeiraDiv')
// //Altero Todo O Elemento Interno Do Meu Elemento Por Uma Tag Link
// textLorem.innerHTML =  '<a href="#">Link</a>'
// //Alterar A Estilização Do Elemento
// textLorem.style.backgroundColor = 'red'

function mostrarValor(){
    let nota1 = document.getElementById('campoNota1').value
    let nota2 = document.getElementById('campoNota2').value
    let nota1Form = parseFloat(nota1)
    let nota2Form = parseFloat(nota2)
    document.getElementById('resultadoMedia').textContent = (`A MÉDIA É: ${(nota1Form + nota2Form) / 2 }`)
    
}

var cont = 0
function contador(){
    let elementCont = document.getElementById('contador')
    elementCont.innerHTML = cont+=1
    if(cont==10){
        document.getElementById('contador').innerHTML = 'Maximo'
        document.getElementById('btnClick').remove()
    }
}