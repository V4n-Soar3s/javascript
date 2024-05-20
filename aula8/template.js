//template strings = uma string que vc pode adicionar variáveis dentro dela 

const nome = 'Vanessa'; // nome
const sobrenome = 'Soares'; // sobrenome
const idade = 29; // idade
const peso = 85; //peso
const alturaEmM = 1.63; //altura em metro
let imc;
let anoNascimento;

imc = peso / (alturaEmM*alturaEmM);
anoNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg.` );
console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${imc}.`); // template strings 
console.log(`${nome} nasceu em ${anoNascimento}.`);

