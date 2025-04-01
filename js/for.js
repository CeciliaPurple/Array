//For ... in - For ... of

const obj = {
    nome: "Maria",
    idade: 28,
    email: "maria@server.com"
}

for (let prop in obj) { //para pegar as propriedades de um OBJETO 
    console.log("propriedade: ", prop)
    console.log("valor: ", obj[prop])
}

const arr = ["Maria", "João", "José"]// para pegar as propriedads de um ARRAY
for (let n of arr) {
    console.log("elemento: ", n)
}