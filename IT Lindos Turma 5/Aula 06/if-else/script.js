if(1==1){
    console.log('1 é igual a 1')
}else{
    console.log('o numero nao é igual a 1')
}

//SINTAXES
/*
if(){

}else if(){

}else{

}

*/
/*console.log(10==10)
console.log('Erick'!="Erick")
console.log('Victor'>"Erick")
console.log('lorem ispamdaoma'<'a')
console.log(10==='10')
console.log(20 > 'abc')

var num = Number(prompt('Insira um numero para saber se ele é par ou impar:'))
console.log(num % 2 == 0 ? 'O número é Par': 'O número é impar')*/

var numero = Number(prompt('Insira um numer para saber se ele é positivo, negativo ou zero'))
if(numero==0){
    alert('O numero é zero')
}else if(numero>=0){
    alert('o numero é positivo')
}else{
    alert('o numero é negativo')
}
