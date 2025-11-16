class ContaBancaria{
    constructor(nomeTitular,cpfTitular,saldo){
        this.nomeTitular = nomeTitular
        this.cpfTitular = cpfTitular
        this.saldo = saldo
    }

    sacar(saque){
        if(this.saldo >= saque ){
            this.saldo -= saque
            console.log(`Saque de ${saque} realizado Com sucesso`)
            console.log(`Seu novo saldo é: ${this.saldo}`)
        }else{
            console.log('Você não tem essa quantia!')
        }
    }
    depositar(deposito){
        this.saldo += deposito
        console.log(`Depósito de ${deposito} realizado com sucesso!`)
        console.log(`Seu novo saldo é: ${this.saldo}`)
    }
}
var contaErick = new ContaBancaria('Erick',54103743808,500)
console.log(contaErick)


