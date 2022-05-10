/*Aqui podemos ver que podemos dar nome ao parâmetros usando "Objeto", podemos até colocar função dentro dos parâmetros*/
var amigo = {nome:'André', sexo:'M', peso:70.0,
engordar(p){
    console.log('Engordou!')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)
