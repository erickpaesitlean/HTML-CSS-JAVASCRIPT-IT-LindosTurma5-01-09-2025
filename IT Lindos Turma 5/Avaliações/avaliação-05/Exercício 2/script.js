class Projeto {
    constructor(obj){
        this.nome = obj.nome
        this.cliente = obj.cliente
        this.orcamento = obj.orcamento
        this.valorGasto = obj.valorGasto
        this.responsavel = obj.responsavel
        this.status = 'Em Andamento'
    }
    retornaSaldoRestante(){
        this.orcamento - this.valorGasto
    }
    atualizarValorGasto(){
        if(this.status != 'Encerrado'){
            let valorGasto = Number(prompt('Insira quanto mais você gastou:'))
            if(valorGasto<0){
                alert('Você não pode inserir números negativos!')
            }else{
                this.valorGasto = valorGasto + Number(this.valorGasto)
            }
            gerarTabelaProjetos()
        }
    }
    mudarResponsavelDoProjeto(){
        this.responsavel = prompt('Insira o novo responsável pelo projeto!')
        gerarTabelaProjetos()
    }
    alterarStatus(){
        if(this.orcamento - this.valorGasto >=0){
            this.status = 'Encerrado'
            gerarTabelaProjetos()
        }else{
            alert('Você não pode encerrar um projeto estando negativo!')
        }
    }
    reabrirProjetos(){
        if(this.orcamento - this.valorGasto >=0){
            this.status = 'Em Andamento'
            gerarTabelaProjetos()
        }else{
            alert('Você não pode reabrir projetos estando negativo!')
        }
    }
}
var projetos = []
function criarProjeto(){
    let obj = {
        nome:document.getElementById('nomeProjeto').value,
        cliente: document.getElementById('clienteProjeto').value,
        orcamento: document.getElementById('orcamentoProjeto').value,
        valorGasto: document.getElementById('valorGastoInicial').value,
        responsavel: document.getElementById('responsavelProjeto').value
    }

    if(obj.nome.trim() == ''){
        alert('O nome não pode estar vazio!')
        return
    }
    if(obj.cliente.trim() == ''){
        alert('O nome do cliente não pode estar vazio!')
        return
    }
    if(obj.orcamento.trim() == ''){
        alert('O orçamento do projeto não pode estar vazio!')
        return
    }
    if(obj.valorGasto.trim() == '' ){
        alert('O valor gasto inicial não pode estar vazio!')
        return
    }
    if(obj.responsavel.trim() == ''){
        alert('O nome do responsável não pode estar vazio!')
        return
    }
    if(obj.nome.trim().length <3 && obj.cliente.trim().length <3){
        alert('O nome do projeto e do cliente devem ter no mínimo 3 caractéres')
        return
    }
    if(obj.orcamento && obj.valorGasto <0){
        alert('O orçamento e o valor inicial gasto deve ser positivos!')
        return
    }
    if(obj.valorGasto > obj.orcamento){
        alert('O valor gasto inicialmente não pode ser maior que o orçamento!')
        return
    }else{
        let nomeSobrenome = obj.cliente.split(' ')
        if(nomeSobrenome.length >=2){
            let projeto = new Projeto(obj)
            projetos.push(projeto)
            gerarTabelaProjetos()
        }else{
            alert('O nome do cliente deve ter ao menos 2 palavras (nome e sobrenome)')
        }
        
    }
    
    // let nomeSobrenome = obj.nome.split(' ')
    // console.log(nomeSobrenome)
}

function gerarTabelaProjetos(){
    document.getElementById('corpoTabela').innerHTML = ''
    let classe = ''
   
    for(let index =0;index<projetos.length;index++){
        if(projetos[index].retornaSaldoRestante() <0){
            classe = 'class="vermelho"'

        }
        let htmlProjetos = `
            <td ${classe}>${projetos[index].nome}</td>
            <td>${projetos[index].cliente}</td>
            <td>${projetos[index].orcamento}</td>
            <td>${projetos[index].valorGasto}</td>
            <td>${projetos[index].responsavel}</td>
            <td>${projetos[index].status}</td>
            <td>
                <button onclick="projetos[${index}].atualizarValorGasto()">Atualizar Valor Gasto</button>
            </td>
            <td>
                <button onclick="projetos[${index}].mudarResponsavelDoProjeto()">Mudar Responsável</button>
            </td>
            <td>
                <button onclick="projetos[${index}].alterarStatus()">Encerrar Projeto</button>
            </td>
            <td>
                <button onclick="projetos[${index}].reabrirProjetos()">Reativar Projeto</button>
            </td>
        `
        document.getElementById('corpoTabela').innerHTML += htmlProjetos
        somaOrcamentos()
        totalGasto()
        saldoGeralDosProjetos()
    }
}


function somaOrcamentos(){
    document.getElementById('valores').innerHTML = ''
    let soma = 0
    for(let index =0;index<projetos.length;index++){
        soma+= Number(projetos[index].orcamento)
    }
    document.getElementById('valores').innerHTML += `<p>Soma De Todos Os Orçamentos: R$${soma}</p>`
}
function totalGasto(){
    let somaValoresGasto = 0
    for(let index =0;index<projetos.length;index++){
        somaValoresGasto+= Number(projetos[index].valorGasto)
    }
    document.getElementById('valores').innerHTML += `<p>Soma De Todos Os Valores Gastos: R$${somaValoresGasto}</p>`
}
function saldoGeralDosProjetos(){
    let saldoGeral = 0
    for(let index=0;index<projetos.length;index++){
        saldoGeral+= projetos[index].orcamento - projetos[index].valorGasto
    }
    document.getElementById('valores').innerHTML += `<p>Soma Saldo Geral: R$${saldoGeral}</p>`
}