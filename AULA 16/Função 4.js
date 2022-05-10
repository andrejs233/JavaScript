function fatorial(n) {//Função -> patâmetro
    var fat = 1
    for(var c = n; c> 1; c--) {//Ação
        fat *= c
    }
    return fat//Retorno para função
}
console.log(fatorial(5))//Chamada para função
//5! = 5 x 4 x 3 x 2 x 1 = 120