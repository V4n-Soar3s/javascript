//Variáveis - Aula 06

//Existem duas maneiras em JavaScript para se criar uma variável (lembrando que variável é algo que pode ser modificado ao longo do código)

let nome = 'Carlos'; // Essa seria uma das maneiras de salvar uma variável, lembrando que adicionamos aspas, pois, é uma string 
//var nome = '' //Não iremos utilizar var devido ser um pouco mais antigo mas ela também serve para criar variáveis

console.log(nome, 'nasceu em 1984.'); // Ao invés de repetir um nome varias vezes nós podemos guardar esse valor na memória e chamar esse valor quando for necessário
console.log('Em 2000', nome, 'conheceu Maria');// Neste caso substituimos o nome João pela variavel nome e toda vez que chamamos o valor é apresentado o nome que foi colocado dentro de let
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo');

//Eu posso declarar uma variável e não iniciar ela, mas como? Vide exemplo abaixo:

/* 
let nome; (estou criando a variável só estou reservando esse nome mas nao inseri nenhum valor)
Ou seja essa variável tem um valor que indica para o JavaScript que ela não tem um valor, porém não apresenta erro, pois, esta reservada. 
Ex:

let nome;
nome = 'Qualquer valor';
console.log(nome); se executarmos a mesma nos trará a mensagem undefined que significa que ela existe porém não há um valor definido, ou seja só declaramos a variavel.

*/


