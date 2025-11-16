function calcularData(){
    let dataAgora = new Date()
        dataAgora.setHours(0, 0, 0, 0)
    let dataU = document.getElementById('input-date').value
    let dataUsuarioArray = dataU.split('-')
    let dataUser = new Date(dataUsuarioArray[0],dataUsuarioArray[1]-1,dataUsuarioArray[2])
    if(dataUser.getTime() > dataAgora.getTime()){
        document.getElementById('input-resultado').innerText = 'Você Está No Futuro'
    }else if(dataUser.getTime() == dataAgora.getTime()){
        document.getElementById('input-resultado').innerText = 'Você Está No Presente'
    }else{
        document.getElementById('input-resultado').innerText = 'Você Está No Passado'
    }
    console.log(dataUsuarioArray)
}

function calcularTempo(){
    let dataAgora = new Date()

    let dataU  = document.getElementById('input-data-evento').value
    let dataUsuarioArray = dataU.split('-')
    let dataUser = new Date(dataUsuarioArray[0],dataUsuarioArray[1]-1,dataUsuarioArray[2])
    let tempoDias= (dataUser - dataAgora) / (1000*60*60*24)
    console.log(tempoDias)
    let tempoDiasString = tempoDias.toString()
    let splitDias = tempoDiasString.split('.')
    console.log(`${splitDias[0]} Dias`)
    let tempoHoras = 24 * parseFloat(splitDias[1])
    let tempoHorasString = tempoHoras.toString()
    console.log()
    tempoHoras = '0'+tempoHoras.toString()
    console.log(60 * Number(tempoHoras))
    
}