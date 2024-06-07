//Caso eu queira que a minha função faça algo e retorne um valor eu tenho que dentro dela utilizar a palavra return, vide exemplo: 

function saudacao(nome){//crie a função e defini um parâmetro
    return `Bom dia ${nome}!`;// solicitei que a função crie a frase bom dia com o nome que eu enviei e envie o valor para a minha variável
}

const variavel = saudacao('Vanessa');//criei uma variavel com o meu nome
console.log(variavel); //solicitei que seja exibido o valor que guardei na variavel 