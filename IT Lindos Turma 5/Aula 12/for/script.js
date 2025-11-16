

var turmasItLindos = [
    ['Will', 'Roque', 'André', 'Deivid'],
    ['Vivi', 'Hugo', 'Rafa', 'Moacir', 'Gabriel', 'Cristo', 'Guilherme'],
    ['Lucas', 'Julia', 'Vanderlei','Guilherme', 'Endrio'],
    ['Carol', 'Rafa', 'Luiz', 'Alex', 'Milena', 'Camila', ]
]

for (let cont =0; cont<turmasItLindos.length; cont++) {
    for(let dentro =0;dentro<turmasItLindos[cont].length;dentro++){
        console.log(`NA TURMA ${cont+1} TEM O ${turmasItLindos[cont][dentro]}`)
    }
}