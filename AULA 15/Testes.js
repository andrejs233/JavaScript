var num = [5, 6, 2] //Aqui amarzenamos valores sem perdelos.
num[3] = 8// Aqui criamos um indice (3) e adicionamos um numero (8).
num.push(4)//Aqui é um método interno do JS que permite eu adicionar na ultima posição
console.log(`O vetor tem ${num.length} posições`)//O (length) é um atributo que dis qualtos elementos tem o vetor.
num.sort()//Aqui ele organizou os numeros.
var pos = num.indexOf(6)//Aqui eu usei o "indexOF" para saber a posição de um numero especifico.
console.log(`O primeiro valor é ${num[0]}`)//Aqui eu posso mostrar o valor que eu quieser fatiando com []
console.log(`Os valores são: ${num} `)// <== impressão formatada.
console.log(`O valor 6 está na posição: ${pos}`)//E no caso ele mostrou posição 3 porque ele ordenou com "sort"
//se o "indexOF"não encontrar o numero especifico ele retorna como (-1).