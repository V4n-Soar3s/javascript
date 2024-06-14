/*

Operadores Lógicos 
&& -> AND -> E - Todas as expressões precisam ser verdadeiras para retornar true quando utilizamos and
|| - OR -> OU 
! -> NOT -> NÃO


Eles sao utilizados para checar mais de uma comparação 
*/

// && - AND - E 
const expressaoAnd = true && true && false && true; // se uma das expressões for falsa ela retorna como false
console.log(expressaoAnd);

//|| - OR - OU

const expressaoOr = false || false || true || false || false; // se uma das condições for verdadeira ela retorna como true
console.log(expressaoOr);

// ! - NOT - NÃO = inverte uma expressão 

console.log(!true);//inverti o valor do true



