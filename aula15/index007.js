//IEEE 754-2008 = é o padrão que o JS segue para a imprecisão dos nºs com casas decimais, ex:

let num1 = 0.7;//number
let num2 = 0.1;// number 

num1 += num2;// 0.8
num1 += num2;// 0.9
num1 += num2;// 1.0

num1 = parseFloat(num1.toFixed(2));// escolhendo quantas casas decimais será apresentada para arredondar

console.log(num1);// pedindo para apresentar o resultado
console.log(Number.isInteger(num1));// verificando se o valor é um inteiro ou float