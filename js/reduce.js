let arr = [1, 2, 3, 4]
let inicial = 0 //valor inicial do acumulador

//REDUCE serve para fazer a soma dos elementos
let soma = arr.reduce((acumulador, valorAtual, indice) => {
    console.log(
        "Indice: ", indice,
        "Valor Atual: ", valorAtual, 
        "Acumulador: ", acumulador)
    return acumulador + valorAtual
}, inicial)
console.log(soma)