//objetos  com function 


//Essa função é chamada de factory pq ela retorna//cria objetos, ela é uma fábrica de objetos
function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};// quando o nome dos valores dentro do return forem os mesmos podemos deixar tudo numa linha só que a função já entende que o valor esta atrelado a aquele parametro
}

const pessoa1 = criaPessoa('Vanessa', 'Soares', 28);// criei uma variavel para enviar argumentos para os parametros da função 
const pessoa2 = criaPessoa('Luna', 'Gonçalves', 32);
const pessoa3 = criaPessoa('Bruna', 'Oliveira', 29);
const pessoa4 = criaPessoa('Vitor', 'Emanuel', 23);
const pessoa5 = criaPessoa('Izabel', 'Aparecida', 15);

console.log(pessoa1.nome, pessoa1.sobrenome);
console.log(pessoa2.nome, pessoa2.idade);