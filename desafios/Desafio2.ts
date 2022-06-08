// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

// Minha resposta

enum Profissao {
    Atriz,
    Padeiro
}

interface Pessoa {
    name: string,
    idade: number,
    profissao?: Profissao
}

const pessoa5: Pessoa = {
    name: "Anna liz",
    idade: 18,
    profissao: Profissao.Atriz
}

const pessoa6: Pessoa = {
    name: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}

console.log(pessoa5)
console.log(pessoa6)