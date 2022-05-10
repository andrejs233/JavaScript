var valores = [8, 1, 6, 9, 7, 5, 3]
for(var pos=0; pos < valores.length; pos++) {//Aqui estamos fazendo um laço de repetição para indicar a posição e o valor que essa posição tem.
    console.log(`A posição:${pos} tem o valor: ${valores[pos]}`)
}
console.log(`${"=*="}`)

for(var pos in valores) {//Esse funciona do mesmo jeito do for porem só serve para 'objetos' e 'array'
    console.log(`A posição:${pos} tem o valor: ${valores[pos]}`)
}