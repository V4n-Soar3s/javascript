//operador de comparação == igualdade (não devemos utilizar, pois, o mesmo converte strings em numeros e quando solicitamos que seja realizada uma comparação pode dar erro devido essa correção)

const num1 = 10;// criei a primeira variavel
const num2 = 10;//criamos a segunda variavel 
const comp = num1 == num2; // utilizamos == para comparar ambas
console.log(comp); // teremos o retorno na saida de false or true


//*Esse tipo de condição não é utilizada, pois, a mesma tem por costume corrigir caso seja uma string e um number e informar que ambos sao iguais trazendo o valor verdadeiro, devido isso o correto é utilizar igualdade estrita, vide exemplo: 

const num3 = 15;//number
const num4 = '15';//string // com a igualdade estrita neste caso ela considera falso pois se trata de uma string devido isso é a que devemos utilizar
const comp1 = num3 === num4;//utilizamos === para comparar os valores
console.log(comp1);//retornara o resultado true or false 