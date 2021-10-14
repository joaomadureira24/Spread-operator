let pessoa = {
    nome: "Jonathan",
    idade: 13
}
let contato_pessoal = {
    telefone: 127685948,
    email: "jonathan@gcrixmail.com",
    cidade: "Sorocaba"
}

let pessoa_dados = {...pessoa, ...contato_pessoal};
console.log(pessoa_dados);