// Aprendendo outras coisas sobre função 

//função que faça a soma entre dois valores 

function soma(x, y) {//criei uma função com nome soma e defini dois parametros x e y que irao receber valores no console
    const resultado = x + y;   // criei uma variavel que realize a soma dos dois valores que serao recebidos
    return resultado; //solicitei que a função me retorne o resultado dos valores que foram informados 
}

console.log(soma(2, 2));//4
console.log(soma(3, 1));//4
console.log(soma(5, 20));//25

// Sempre que a engine do js encontrar a palavra return encerra a nossa função e nada que esteja abaixo dela dentro da função é executado 
