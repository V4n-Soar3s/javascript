//IEEE 754-2008 = é o padrão que o JS segue para a imprecisão dos nºs com casas decimais, ex:

let num1 = 0.7;//number
let num2 = 0.1;// number 

num1 += num2;// 0.8
num1 += num2;// 0.9
num1 += num2;// 1.0
num1 += num2;// 1.1
num1 += num2;// 1.2
num1 += num2;// 1.3
num1 += num2;// 1.4
num1 += num2;// 1.5
num1 += num2;// 1.6
num1 += num2;// 1.7
num1 += num2;// 1.8
num1 += num2;// 1.9
num1 += num2;// 2.0

num1 = parseFloat(num1.toFixed(2));//informando que o nº é parcialmente flutuante escolhendo quantas casas decimais será apresentada para arredondar

console.log(num1);// pedindo para apresentar o resultado
console.log(Number.isInteger(num1));// verificando se o valor é um inteiro ou float