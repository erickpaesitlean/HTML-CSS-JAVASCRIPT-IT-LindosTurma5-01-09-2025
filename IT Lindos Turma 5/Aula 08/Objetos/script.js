
var pessoa = {
    nome: 'Erick',
    sobrneome: 'Paes',
    idade: 20,
    oculos: true,
    fazerAniversario: function(){
        this.idade++
    },
    tiposCartao: CreditoOuDebito = {
        credito: 'Pagar na Fatura',
        debito: 'Descontar da Conta'
    }
}

console.log(pessoa.tiposCartao.credito)


