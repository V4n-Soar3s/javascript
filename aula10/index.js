// Tipos de Dados Primitivos - STRINGS (TEXTO) | NUMBER (NÚMEROS) | UNDEFINED (INDEFINIDOS) | NULL (NULO) | BOOLEAN (VERDADEIRO OU FALSO) | SYMBOL 

const nome ='Vanessa'; //string 
const nome1 = "Vanessa"; // string 
const nome2 = `Vanessa`; // string 

const num1 = 10; //number
const num2 = 10.52; // number

let nomeAluno; // undefined | variavel declarada mas nao foi iniciada, ela recebe o valor pelo engine do js que é o valor indefinido que não aponta para local nenhum na memória 

const sobrenomeAluno = null; //Esse tipo de valor significa nulo, que não apontar para nenhum local na memória 

/* Qual a diferença entre undefined e Nulo?
 * Null -> utilizamos quando nós (programadores) queremos desconfigurar uma variável, colocar o valor de uma variável como nulo;
 * Undefined -> é mais definido para a linguagem Js decidir, normalmente quando precisamos declarar que um valor é nulo utilizamos null, nunca undefined; 
 */

const boolean = true; // boolean possui apenas dois valores true(verdadeiro) ou false(falso) - (Valor lógico)

// Checagem de tipos 
                //tipo e valor                   
console.log(typeof nome, nome);
                //tipo e valor  
console.log(typeof num1, num1);
               //tipo e valor  
console.log(typeof nomeAluno, nomeAluno);
                    //tipo e valor
console.log(typeof sobrenomeAluno, sobrenomeAluno);
                    //tipo e valor
console.log(typeof boolean, boolean);




