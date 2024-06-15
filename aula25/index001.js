/*
 && ->  todas as expressões precisam ser verdadeiras para que and retorne true
 || ->  todas as expressões precisam ser false para que o OR retorne false 
 */

 console.log('Luiz Otávio' && 0 && 'Maria');//nesse caso ele retornara a informação false pois 0 é considerada uma expressão falsa

 console.log(`Luiz Otávio` && true && `Maria`);//nesse caso ele retornara maria pois todas as expressões sao verdadeiras e ele ira apresentar o ultimo valor da expressao verdadeira que foi checada

 //quais sao os valores que avaliam em falso no JS?
/*

Falsy values

False - literal
0 - zero
'' " " - aspas tanto simples, duplas ou crase sao avaliadas como false 
null// undefined 
NaN

*/

console.log('Luiz' && 'Maria');//os dois sao verdadeiros e retorna o ultimo valor que foi checado
console.log('Luiz' && undefined && 'Maria');





