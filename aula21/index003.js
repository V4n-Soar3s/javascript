/*
 * Primitivos (são valores imutáveis) - string, number, boolean, undefine e null (bigint, symbol)
 * 
 * Strings são indexadas (possuem indices)
 * 
 * Referência (mutáveis) - arrays, objetos e function
 */

let a = [1, 2, 3]; //criei um array
let b = [...a];//quando colocamos o [...a] tornamos b uma variavel independente de a, caso a seja alterado b nao sofre alterações e caso b seja modificado a também nao sofre nenhuma alteracao // linkei o valor de a ou valor de b e tanto a quanto b estao apontados para o mesmo valor na memória - dado passado por referência
let c = b;//crio mais uma variavel que aponta para o mesmo lugar na memória 

console.log(a, b, c);

//se eu alterar o valor de a ou o valor de b vai ser aplicado aos dois por serem dados passados por referência, ex:

a.push(4);//nessa linha adicionei o valor 4 a variavel a e quando é passada por ela caso eu peça para apresentar o valor de b também será apresentado o 4 pois foi passado o valor por referência nesta linha
console.log(a, b, c);// [1,2,3,4] e [1,2,3,4]

b.pop();//removi o ultimo indice de b e a variavel a também é afetada por b
console.log(a, b, c); // nessa mensagem irá aparecer apenas [1,2,3] e [1,2,3] porque a partir do momento que é recebida a informação que foi retirado um valor de dois arrays onde um aponta para o outro é aplicada nos dois 

//Ou seja o que podemos tirar dessa conclusão é que os valores que são primitivos eles são copiados quando passamos o valor  dele para outra variável utilizando o sinal de atribuição. 

// E os valores por referência são valores passados por referência. 

