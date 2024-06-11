/*
 * Primitivos (são valores imutáveis) - string, number, boolean, undefine e null (bigint, symbol)
 * 
 * Strings são indexadas (possuem indices)
 * 
 * Referência (mutáveis) - arrays, objetos e function
 */

//objetos

const a = {
    nome: 'Vanessa', 
    sobrenome: 'Soares'
}; //criei uma variavel

const b = {...a};//informei que b tem como referencia a mas tornei ele independente caso a seja alterado

a.nome = 'Joao'//alterei o nome em a
console.log(a);
console.log(b); // ira aparecer vanessa pois o valor de b nao depende de a
