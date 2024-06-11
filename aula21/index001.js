/*
 * Primitivos (são valores imutáveis) - string, number, boolean, undefine e null (bigint, symbol)
 * 
 * Strings são indexadas (possuem indices)
 */



let nome = 'Luiz';//criei uma variavel
nome[0] =  'R';// quando eu crio essa redeclaração a mesma não é considerada quando apresentada em string pois a string é imutavel, mas em arrays funcionaria 

console.log(nome[0], nome); // solicitei que seja exibida 