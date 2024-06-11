/*
 * Primitivos (são valores imutáveis) - string, number, boolean, undefine e null (bigint, symbol)
 * 
 * Strings são indexadas (possuem indices)
 */

let a = 'A';// declarei uma variavel
let b = a;// informei que a variavel b terá o mesmo valor que a primeira variavel a, quando estou utilizando um dado primitivo estou fazendo uma cópia 

console.log(a, b);// vai ser apresentado o mesmo valor A A

a =  'Outra coisa';// alterei apenas o valor de a
console.log(a, b);// o valor de a sera alterado mas o valor de b continuará a mesma coisa pois nós fizemos uma cópia de a para o valor de b 