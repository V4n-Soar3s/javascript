// NaN

let num1 = 10.25;// number 
let num2 = 2.5;// number 

let temp = num1 * 'Olá';// criei uma variável temporária 
console.log(Number.isNaN(temp));// apresentar o resultado no console que sera Nan - not a number = alguma coisa na nossa conta não aconteceu como deveria ter acontecido, quando utilizamos esse método perguntamos ao JS se esse número é uma conta inválida? Se for retorna true, se não false. 

// vai retornar true sempre que a conta for inválida

// vai retornar false quando a conta é executada e a conta é correta

// lembrando que não é uma boa pratica de programação fazer contas utilizando strings 