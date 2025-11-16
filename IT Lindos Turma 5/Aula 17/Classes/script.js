class Funcionarios{
    constructor(nome,idade,cargo,pausa){
        this.nome = nome,
        this.idade = idade,
        this.cargo = cargo,
        this.pausa = pausa
    }

    TomarCafe(){
        if(this.pausa == true){
            console.log('Vou Beber Café!')
        }else{
            console.log('Não é Hora De Beber Café!')
        }
    }
    
}

var funcionario1 = new Funcionarios('Erick',20,'IT Lindo',true)
console.log(funcionario1)
console.log(funcionario1.TomarCafe())
