var contadorAberto = 0
var contadorEmAnalise = 0
var contadorEncerrado = 0
class Chamado{
    constructor(obj){
        this.titulo = obj.titulo
        this.desc = obj.desc
        this.responsavel = obj.responsavel
        this.etapa = 'Aberto'
    }
    avancarEtapa(){
        if(this.etapa =='Aberto'){
            this.etapa = 'Em Análise'
            gerarTabela()
            return
        }
        if(this.etapa == 'Em Análise'){
            this.etapa = 'Encerrado'
            gerarTabela()
            return
        }
        if(this.etapa == 'Encerrado'){
            alert('Esse chamado já esta encerrado! Não pode avançar de etapa!')
        }
        
       
    }
    voltarEtapa(){
        if(this.etapa == 'Aberto'){
            alert('Você não pode voltar um chamado em aberto!')
        }
        if(this.etapa == 'Em Análise'){
            this.etapa = 'Aberto'
            contadorEmAnalise--
            gerarTabela()
            return
        }
        if(this.etapa == 'Encerrado'){
            alert('Você não pode voltar um chamado encerrado!')
            return
        }
    }
    alterarDesc(){
        this.desc = prompt('Insira a nova descrição:')
        gerarTabela()
    }
    mudarResponsavelAtual(){

    }
}
var chamados = []
function criarChamado(){
    let obj = {
        titulo: document.getElementById('tituloValor').value,
        desc: document.getElementById('descValor').value,
        responsavel: document.getElementById('responsavelValor').value
    }
    if(obj.titulo.trim() == ''){
        alert('O titulo do chamado não pode estar em branco!')
        return
    }
    if(obj.desc.trim() == ''){
        alert('A descrição não pode estar vazia!')
        return
    }
    if(obj.responsavel.trim() == ''){
        alert('O responsável não pode estar vazio!')
        return
    }
    if(obj.titulo.length >=3){
        let chamado = new Chamado(obj)
        chamados.push(chamado)
        alert('Chamado aberto com sucesso!')
        document.getElementById('tituloValor').value = ''
        document.getElementById('descValor').value = ''
        document.getElementById('responsavelValor').value = ''
        gerarTabela()

    }else{
        alert('O título deve ter pelo menos 3 caractéres!')
        return
    }
}

function gerarTabela(){
    document.getElementById('corpoTabela').innerHTML = ''
    for(let index =0;index<chamados.length;index++){
        let htmlChamados = `
            <td>${chamados[index].titulo}</td>
            <td>${chamados[index].desc}</td>
            <td>${chamados[index].responsavel}</td>
            <td>${chamados[index].etapa}</td>
            <td>
                <button onclick="chamados[${index}].avancarEtapa()">Avançar Etapa</button>
            </td>
            <td>
                <button onclick="chamados[${index}].voltarEtapa()">Voltar Etapa</button>
            </td>
            <td>
                <button onclick="chamados[${index}].alterarDesc()">Alterar Descrição</button>
            </td>

        `
        document.getElementById('corpoTabela').innerHTML += htmlChamados
        situacoesChamados()
    }
    
}
function situacoesChamados(){
    document.getElementById('contadoresEtapas').innerHTML = ''
    for(let index =0;index<chamados.length;index++){
    if(chamados[index].etapa == 'Aberto'){
        contadorAberto++
        document.getElementById('contadoresEtapas').innerHTML =
     `<p>Em Aberto: <span>${contadorAberto}</span></p>
      <p>Em Análise: <span>${contadorEmAnalise}</span></p>
      <p>Encerrado: <span>${contadorEncerrado}</span></p>
     `
        return
    }
    if(chamados[index].etapa == 'Em Análise'){
        contadorEmAnalise++
        contadorAberto--
        document.getElementById('contadoresEtapas').innerHTML +=
     `<p>Em Aberto: <span>${contadorAberto}</span></p>
      <p>Em Análise: <span>${contadorEmAnalise}</span></p>
      <p>Encerrado: <span>${contadorEncerrado}</span></p>
     `
        return
    }
    if(chamados[index].etapa == 'Encerrado'){
        contadorEncerrado++
        contadorEmAnalise--
        document.getElementById('contadoresEtapas').innerHTML +=
     `<p>Em Aberto: <span>${contadorAberto}</span></p>
      <p>Em Análise: <span>${contadorEmAnalise}</span></p>
      <p>Encerrado: <span>${contadorEncerrado}</span></p>
     `
        return
    }

}
    
}
