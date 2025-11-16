function acharEndereco() {
    document.getElementById('inputRua').value = ''
    document.getElementById('inputBairro').value = ''
    document.getElementById('inputCidade').value = ''
    document.getElementById('inputEstado').value = ''
    let cepUser = document.getElementById('cepInput').value
    if (cepUser.length != 8) {
        alert('Cep maior que 8 digitos: tente novamente')
    } else {
        fetch(`https://viacep.com.br/ws/${cepUser}/json/`)
            .then((promisse) => promisse.json())
            .then((endereco) => {

                if (endereco.erro) {
                    alert('Você digitou o cep errado!')
                    document.getElementById('cepInput').value = ''
                } else {
                    document.getElementById('inputRua').value = endereco.logradouro
                    document.getElementById('inputBairro').value = endereco.bairro
                    document.getElementById('inputCidade').value = endereco.localidade
                    document.getElementById('inputEstado').value = endereco.estado
                }
            })
    }

}