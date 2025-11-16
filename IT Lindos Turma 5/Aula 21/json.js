var pessoa = {nome:'Erick',idade: 20}
var pjson = JSON.stringify(pessoa)
//console.log(pjson)

var nomes = ['Lucas','Erick','Vinicius']
var nomeJson = JSON.stringify(nomes)
//console.log(nomeJson)

var pessoaTransform = JSON.parse(pjson)
//console.log(pessoaTransform)
//console.log(pessoaTransform.nome)

//OQ É API REST (SISTEMA DE COMUNICAÇÃO) FAZ O PEDIDO PARA API E ELA RETORNA COM O SEU PEDIDO, EXEMPLO: GARÇOM. E REST É APENAS UM CONJUNTO DE REGRAS DE PADRONIZAÇÃO DE CONSTRUÇÃO DE API'S

//fetch retorna promisse
//eu pego essa promisse e transformo em um json
function pegarUsuarios(){
    fetch("https://jsonplaceholder.typicode.com/users")//FAZENDO A REQUISIÇÃO COM O FETCH
    .then((respota) => respota.json()) //AQUI NAO FOI PASSADO AS CHAVES DA ARROW FUNCTION PQ DESTE MODO ELE JA ENTENDE QUE É UM RETORNO DIRETO, JA COM AS CHAVES NECESSITARIA DO RETURN PARA INFORMAR
    .then((usuarios)=>{ // AQUI EU ESTOU ARMAZENANDO NO PARAMETRO USUARIOS O RETORNO DE RESPOTA.JSON


// Extra: Transforme o resultado da requisição em uma tabela (<table>) no lugar da <ul>,
// exibindo as seguintes colunas: ID, NOME, USERNAM, EMAIL, TELEFONE, ENDEREÇO
// O campo Endereço deve ser montado no formato "Rua, Cidade" (exemplo: "Kulas Light, Gwenborough").


        for(let index=0;index<usuarios.length;index++){
            document.getElementById('listaUsuariosApi').innerHTML += `
            <td class="p-2">${usuarios[index].id}</td>
            <td>${usuarios[index].name}</td>
            <td>${usuarios[index].username}</td>
            <td>${usuarios[index].email}</td>
            <td>${usuarios[index].phone}</td>
            <td>${usuarios[index].address.street},${usuarios[index].address.city}</td>
            `
        }
    })
}

function viaCep(){
    fetch("https://viacep.com.br/ws/06317090/json/")
    .then((resposta)=> resposta.json())
    .then((cep)=>{
        console.log(cep.logradouro)
    })
}

pegarUsuarios()

