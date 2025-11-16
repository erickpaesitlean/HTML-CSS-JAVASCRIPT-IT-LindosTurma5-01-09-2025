const eventos = [
  {
    titulo: "Workshop de JavaScript",
    descricao: "Evento introdutório sobre fundamentos do JS para iniciantes.",
    data: "2025-10-05T14:00:00Z",
  },
  {
    titulo: "Conferência Front-End",
    descricao: "Palestras sobre as principais tendências do desenvolvimento web.",
    data: "2025-01-12T18:30:00Z"
  },
  {
    titulo: "Bootcamp React",
    descricao: "Treinamento intensivo em React e desenvolvimento de SPAs.",
    data: "2025-09-30T13:00:00Z"
  },
  {
    titulo: "Hackathon de Inovação",
    descricao: "Competição de desenvolvimento com foco em soluções criativas.",
    data: "2025-12-01T09:00:00Z"
  },
  {
    titulo: "Meetup de DevOps",
    descricao: "Encontro para discutir práticas modernas de DevOps e CI/CD.",
    data: "2026-01-15T17:00:00Z"
  },
  {
    titulo: "Tech Summit 2025",
    descricao: "Evento anual com palestras de líderes da indústria de tecnologia.",
    data: "2025-10-20T10:00:00Z"
  },
  {
    titulo: "Workshop de Banco de Dados",
    descricao: "Aprofundamento em modelagem de dados e otimização de queries.",
    data: "2025-07-25T15:00:00Z"
  },
  {
    titulo: "Web Performance Day",
    descricao: "Sessões sobre otimização de sites e melhoria de performance.",
    data: "2025-12-10T16:00:00Z"
  },
  {
    titulo: "Semana do Backend",
    descricao: "Série de palestras e workshops focados em desenvolvimento backend.",
    data: "2025-10-08T09:30:00Z"
  },
  {
    titulo: "Encontro de Comunidades Tech",
    descricao: "Reunião de várias comunidades de tecnologia para networking.",
    data: "2025-11-05T19:00:00Z"
  }
];


function listarEventos(){
    let dataAgora = new Date()
    dataAgora.setHours(0,0,0,0)
    for(let index = 0;index<eventos.length;index++){
        let splitDatas = eventos[index].data.split('-')
        console.log(splitDatas)
        let splitHoras = splitDatas[2].split('T')
        console.log(splitHoras)
        let splitHorasFinal = splitHoras[1].split('Z')
        console.log(splitHorasFinal)
        let dataReuniao = new Date(splitDatas[0],splitDatas[1]-1,splitHoras[0])
        let aconteceuOuNao = dataReuniao < dataAgora
        if(aconteceuOuNao == false){
            console.log(`${eventos[index].titulo}\n${eventos[index].descricao}\n${splitHoras[0]}/${splitDatas[1]}/${splitDatas[0]}\n${splitHorasFinal[0]}`)
            document.getElementById('listarEventos').innerHTML += `<li><p>${eventos[index].titulo}</p><p>${eventos[index].descricao}<p/><p>${splitHoras[0]}/${splitDatas[1]}/${splitDatas[0]}<p>${splitHorasFinal[0]}<p/></li>`
        }
        
        

    }
}