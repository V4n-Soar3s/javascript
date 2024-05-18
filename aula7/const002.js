/*Podemos pegar o valor de uma variavel ou de uma constante e atribuir ao valor de outra variavel ou outra constante, vide exemplo abaixo:*/
//  Operadores aritméticos mais utilizados: + - * / 

const primeiroNumero = '5'; // number 
const segundoNumero= 10; 
const resultado = primeiroNumero * segundoNumero; 
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(typeof (primeiroNumero + segundoNumero));

//para ter certeza do tipo de algum dado podemos utilizar o comando abaixo: 
console.log(typeof primeiroNumero);//qual é o tipo da variavel primeiro numero? (essa é a pergunta que se faz quando utilizamos essa função)
console.log(typeof segundoNumero);


//O sinal de soma é utilizado para concatenar strings e para fazer somas