let num1 = prompt(`Digite um número`);
num1 = Number(num1);

const numeroTitulo =  document.getElementById('numero-titulo');// neste momento estou solicitando que o js selecione este elemento do html para executar no JS, utilizando o id;
const texto = document.getElementById('texto');// chamei o id texto para o JS

numeroTitulo.innerHTML += num1;// aqui foi alterado o html interno do span

texto.innerHTML = ' ';
texto.innerHTML += `<p>A raiz quadrada do seu número é: ${num1 ** 0.5}.</p>`;//raiz quadrada
texto.innerHTML += `<p> ${num1} é inteiro: ${Number.isInteger(num1)}</p>`;//true or false 
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num1)}</p>`;// Not a number?
texto.innerHTML += `<p>Arredondando para um nº menor: ${Math.floor(num1)}</p>`;//menor
texto.innerHTML += `<p>Arredondando para um nº maior: ${Math.ceil(num1)}</p>`;//maior
texto.innerHTML += `<p> Com duas casas decimais ${num1.toFixed(2)}</p>`;//adicionando 2 casas









