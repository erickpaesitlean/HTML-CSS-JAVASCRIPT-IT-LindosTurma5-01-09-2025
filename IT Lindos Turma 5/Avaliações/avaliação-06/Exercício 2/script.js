function listarPessoas(){
    let url = `http://localhost:3000/pessoas` 
    fetch(url).then(promisse=> promisse.json()).then(pessoas=>{
        for(let index=0;index<pessoas.length;index++){
            let htmlPessoas = `
                <td>${pessoas[index].id}</td>
                <td>${pessoas[index].nome}</td>
                <td>${pessoas[index].email}</td>
                <td>${pessoas[index].telefone}</td>
                <td>${pessoas[index].cep}</td>

                <td>
                    <button onclick="buscarEndereco('${pessoas[index].cep}')">Buscar Endereço</button>
                </td>
            `
            document.getElementById('corpoTabela').innerHTML += htmlPessoas
        }
    })
}
listarPessoas()

function buscarEndereco(cep){
   let url = `https://viacep.com.br/ws/${cep}/json/`
   fetch(url).then(promisse=>promisse.json()).then(endereco=>{
        let htmlEndereco = `
            <p>Rua: ${endereco.logradouro}</p>
            <p>Bairro: ${endereco.bairro}</p>
            <p>Cidade: ${endereco.localidade}</p>
            <p>Estado: ${endereco.estado}</p>
        `
        document.getElementById('endereco').innerHTML = htmlEndereco
   })
    
}