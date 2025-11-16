function gerarTabelaDepartamentos(){
    let url = "http://localhost:3000/departamentos"
    fetch(url).then((promisse)=>promisse.json()).then((departamentos)=>{
        for(let index=0;index<departamentos.length;index++){
            let htmlDepartamentos = `
                <td class="linhaTabelaDepartamentos">${departamentos[index].nome} <button class="btn btn-info" onclick="verFuncionarios(${departamentos[index].id})">Ver Funcionários</button></td>
            `
            document.getElementById('corpoTabela').innerHTML += htmlDepartamentos
        }
    })
} 

gerarTabelaDepartamentos()

function verFuncionarios(id){
    document.getElementById('corpoTabelaFuncs').innerHTML = ''
    url = "http://localhost:3000/funcionarios"
    fetch(url).then((promisse)=> promisse.json()).then((funcionarios)=>{
        for(let index=0;index<funcionarios.length;index++){
            if(funcionarios[index].departamentoId == id){
                let htmlFuncs = `
                    <td class="text-center">${funcionarios[index].id}</td>
                    <td class="text-center">${funcionarios[index].nome}</td>
                    <td class="text-center">${funcionarios[index].cargo}</td>
                    <td class="text-center">R$${(funcionarios[index].salario).toFixed(2)}</td>
                    <td class="text-center">${funcionarios[index].departamentoId}</td>
                `
                document.getElementById('corpoTabelaFuncs').innerHTML += htmlFuncs
            }
        }
    })
}