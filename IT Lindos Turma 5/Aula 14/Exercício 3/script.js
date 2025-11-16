const funcionarios = [
  { nome: "Ana Souza", cargo: "Desenvolvedora", salario: 5200 },
  { nome: "Carlos Pereira", cargo: "Analista", salario: 4800 },
  { nome: "Mariana Lima", cargo: "Designer", salario: 4500 },
  { nome: "Lucas Martins", cargo: "Desenvolvedor", salario: 5500 },
  { nome: "Fernanda Oliveira", cargo: "Gerente de Projetos", salario: 7200 },
  { nome: "Ricardo Santos", cargo: "Suporte Técnico", salario: 3500 },
  { nome: "Juliana Costa", cargo: "Analista", salario: 5000 },
  { nome: "Paulo Mendes", cargo: "Desenvolvedor", salario: 5300 },
  { nome: "Camila Ribeiro", cargo: "Designer", salario: 4600 },
  { nome: "Eduardo Almeida", cargo: "Tester", salario: 4000 },
  { nome: "Sofia Carvalho", cargo: "Desenvolvedora", salario: 5600 },
  { nome: "Felipe Nunes", cargo: "Analista", salario: 5100 },
  { nome: "Laura Barros", cargo: "Designer", salario: 4700 },
  { nome: "Mateus Correia", cargo: "Desenvolvedor", salario: 5800 },
  { nome: "Isabela Castro", cargo: "Gerente de Projetos", salario: 7500 },
  { nome: "Gabriel Lima", cargo: "Suporte Técnico", salario: 3600 },
  { nome: "Renata Azevedo", cargo: "Analista", salario: 4950 },
  { nome: "André Silva", cargo: "Desenvolvedor", salario: 5400 },
  { nome: "Patrícia Gomes", cargo: "Designer", salario: 4550 },
  { nome: "Thiago Moreira", cargo: "Tester", salario: 4100 },
  { nome: "Beatriz Rocha", cargo: "Desenvolvedora", salario: 5700 },
  { nome: "Rodrigo Carvalho", cargo: "Analista", salario: 5200 },
  { nome: "Letícia Santos", cargo: "Designer", salario: 4650 },
  { nome: "Henrique Teixeira", cargo: "Desenvolvedor", salario: 5900 },
  { nome: "Cláudia Mendes", cargo: "Gerente de Projetos", salario: 7300 },
  { nome: "João Vitor", cargo: "Suporte Técnico", salario: 3400 },
  { nome: "Elisa Ribeiro", cargo: "Analista", salario: 5050 },
  { nome: "Marcelo Freitas", cargo: "Desenvolvedor", salario: 5600 },
  { nome: "Aline Lopes", cargo: "Designer", salario: 4800 },
  { nome: "Fábio Costa", cargo: "Tester", salario: 4200 },
  { nome: "Carolina Figueiredo", cargo: "Desenvolvedora", salario: 6000 },
  { nome: "Igor Fernandes", cargo: "Analista", salario: 5300 },
  { nome: "Vanessa Melo", cargo: "Designer", salario: 4700 },
  { nome: "Pedro Henrique", cargo: "Desenvolvedor", salario: 6100 },
  { nome: "Daniela Rocha", cargo: "Gerente de Projetos", salario: 7600 },
  { nome: "Lucas Barbosa", cargo: "Suporte Técnico", salario: 3550 },
  { nome: "Marcos Oliveira", cargo: "Analista", salario: 5150 },
  { nome: "Raquel Sousa", cargo: "Desenvolvedora", salario: 5750 },
  { nome: "Gustavo Nascimento", cargo: "Designer", salario: 4900 },
  { nome: "Carla Martins", cargo: "Tester", salario: 4300 },
  { nome: "Amanda Almeida", cargo: "Desenvolvedora", salario: 6200 },
  { nome: "Vitor Santos", cargo: "Analista", salario: 5400 },
  { nome: "Larissa Lima", cargo: "Designer", salario: 4750 },
  { nome: "Felipe Ferreira", cargo: "Desenvolvedor", salario: 6300 },
  { nome: "Patrícia Barros", cargo: "Gerente de Projetos", salario: 7400 },
  { nome: "Diego Matos", cargo: "Suporte Técnico", salario: 3650 },
  { nome: "Nathalia Ribeiro", cargo: "Analista", salario: 5250 },
  { nome: "João Pedro", cargo: "Desenvolvedor", salario: 5800 },
  { nome: "Camila Lopes", cargo: "Designer", salario: 4950 },
  { nome: "Alexandre Moraes", cargo: "Tester", salario: 4400 }
];

function filtragem(){
    // let opcao = document.getElementById('opcao').value 
    // if(opcao =='Desenvolvedor'){
    //     let desenvolvedor = funcionarios.filter(funcionarios => funcionarios.cargo =='Desenvolvedor')
    //     console.log(desenvolvedor)
    // }else if(opcao == 'Desenvolvedora'){
    //     let desenvolvedora = funcionarios.filter(funcionarios => funcionarios.cargo == 'Desenvolvedora')
    //     console.log(desenvolvedora)
    // }else if(opcao == 'Analista'){
    //     let analista = funcionarios.filter(funcionarios => funcionarios.cargo == 'Analista')
    //     console.log(analista)
    // }else if(opcao == 'Designer'){
    //     let designer = funcionarios.filter(funcionarios => funcionarios.cargo == 'Designer')
    //     console.log(designer)
    // }else if(opcao == 'Tester'){
    //     let tester = funcionarios.filter(funcionarios => funcionarios.cargo == 'Tester')
    //     console.log(tester)
    // }else if(opcao == 'Suporte Técnico'){
    //     let suporteTec = funcionarios.filter(funcionarios => funcionarios.cargo == 'Suporte Técnico')
    //     console.log(suporteTec)
    // }else if(opcao == 'Gerente de Projetos'){
    //     let gerenteProjetos = funcionarios.filter(funcionarios => funcionarios.cargo == 'Gerente De Projetos')
    //     console.log(gerenteProjetos)
    // }
    let opcao = document.getElementById('opcao').value
    let semResultado = true
    let soma = 0
    let cont = 0
    for(let index = 0;index<funcionarios.length;index++){
        if(opcao == funcionarios[index].cargo){
            document.getElementById('listaFuncs').innerHTML += `<li><p>Nome: ${funcionarios[index].nome}</p><p>Cargo: ${funcionarios[index].cargo}</p><p>Salário: ${funcionarios[index].salario}</p></li>`
            soma += funcionarios[index].salario
            cont++
            let media = soma / cont
            document.getElementById('mediaSalarial').innerHTML = `Média Salarial: ${media.toFixed(2)}`
            semResultado = false
        }
    }

    if(semResultado == true){
        document.getElementById('listaFuncs').innerHTML = '<li>Cargo Inválido</li>'
    }
}


function mostrarSalarios(){
    let valorMinimo = document.getElementById('entre1').value
    let valorMax = document.getElementById('entre2').value
    document.getElementById('tituloSalarios').innerHTML = `Salários Entre: ${valorMinimo} e ${valorMax}`
    for(let index = 0;index<funcionarios.length;index++){
        if(funcionarios[index].salario >= valorMinimo && funcionarios[index].salario <= valorMax){
            document.getElementById('listaSalariosEntre').innerHTML += `<p>Nome: ${funcionarios[index].nome}</p><p>Salário: ${funcionarios[index].salario}</p><p>=================</p>`
        }
    }
}