function agendarReuniao() {
    let dataAgora = new Date()
    dataAgora.setHours(0, 0, 0, 0)
    let tituloReuniao = document.getElementById('input-titulo').value
    let dataRuniao = document.getElementById('input-data').value
    let dataReuniaoSplit = dataRuniao.split('-')
    let dataReuniaoUsuario = new Date(dataReuniaoSplit[0], dataReuniaoSplit[1] - 1, dataReuniaoSplit[2])
    let faltaQntsDias = (dataReuniaoUsuario - dataAgora) / (1000 * 60 * 60 * 24)
    let arrayReunioes = []
    let objReunioes = {
        titulo: tituloReuniao,
        data: `${dataReuniaoSplit[2]}/${dataReuniaoSplit[1]}/${dataReuniaoSplit[0]}`,
        faltaDias: faltaQntsDias

    }
    let subtracaoDatas = dataReuniaoUsuario < dataAgora
    if (tituloReuniao == '') {
        alert('Você Deve Inserir Um Titulo Para A Reunião')
    } else if (subtracaoDatas === true) {
        alert('Você Não Pode Inserir Uma Data Passada!')
    } else if (dataRuniao == '') {
        alert('Você Deve Inserir Uma Data!')
    } else {
        arrayReunioes.push(objReunioes)
    }

    for (let index = 0; index < arrayReunioes.length; index++) {
        document.getElementById('input-titulo').value = ''
        document.getElementById('input-data').value = ''


        console.log(`Titulo: ${objReunioes.titulo}\nData: ${objReunioes.data}\nFalta: ${objReunioes.faltaDias} Dias`)
        document.getElementById('reunioes').innerHTML += `<li>Titulo: <p>${objReunioes.titulo}<p/><p>Data: ${objReunioes.data}</p><p>Falta: ${objReunioes.faltaDias} Dias<p></li>`
    }

}