//Podemos também resolver o problema do exercicio anterior(index007) utilizando contas, exemplo: 

let num1 = 0.7;//number
let num2 = 0.1;// number 

num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9 
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

console.log(num1);// pedindo para apresentar o resultado
console.log(Number.isInteger(num1));// verificando se o valor é um inteiro ou float