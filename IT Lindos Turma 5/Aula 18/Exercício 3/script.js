class Tarefas {
  constructor(obj) {
    this.titulo = obj.title;
    this.descricao = obj.description;
    this.status = obj.status;
  }

  fineshedTask(index) {
    tasks[index].status = "Concluida";
    generateTableTasks();
    contadorConc++;
    contadorPen--;
    atualizaContadorTaskConcluida()
    atualizaContadorTaskPendente()
    atualizarTarefasTotais()
  }
  descriptionAlter(index) {
    tasks[index].descricao = prompt("Insira Sua Nova Descrição");
    generateTableTasks();
  }
  restartTask(index) {
    tasks[index].descricao = "";
    tasks[index].status = "Pendente";
    contadorConc--;
    contadorPen++
    atualizaContadorTaskConcluida()
    atualizaContadorTaskPendente()
    atualizarTarefasTotais
    generateTableTasks();
  }
}

var tasks = [];
var contadorConc = 0;
var contadorPen = 0;
function atualizaContadorTaskConcluida() {
  document.getElementById("span-concluida").innerHTML = contadorConc;
}
function atualizaContadorTaskPendente() {
  document.getElementById("span-pendente").innerHTML = contadorPen;
}
function atualizarTarefasTotais(){
    document.getElementById("span-total").innerHTML = contadorPen+contadorConc
}
function addTask() {
  let obj = {
    title: document.getElementById("titleTask").value,
    description: document.getElementById("descriptionTask").value,
    status: "Pendente",
  };
  contadorPen++;
  var newTask = new Tarefas(obj);
  tasks.push(newTask);
  atualizaContadorTaskPendente()
  atualizaContadorTaskConcluida()
  atualizarTarefasTotais()
  generateTableTasks();
}

function generateTableTasks() {
  document.getElementById("bodyTableTasks").innerHTML = "";
  for (let index = 0; index < tasks.length; index++) {
    let elementTask = `
            <tr>
                <td>${tasks[index].titulo}</td>
                <td>${tasks[index].descricao}</td>
                <td>${tasks[index].status}</td>
                <td><button onclick="tasks[${index}].fineshedTask(${index})">Marcar Como Finalizada</button></td>
                <td><button onclick="tasks[${index}].descriptionAlter(${index})">Editar</button></td>
                <td><button onclick="tasks[${index}].restartTask(${index})">Reiniciar Tarefa</button></td>
            </tr>
        `;

    document.getElementById("bodyTableTasks").innerHTML += elementTask;
  }
}
