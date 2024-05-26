let varA = 'A'; // valor de a tenha o valor de b
let varB = 'B'; // valor de b tenha o valor de c
let varC = 'C'; // valor de c aponte para o valor de a 

const varATemp = varA;
varA = varB; //B
varB = varC; // C
varC = varATemp; // B

console.log(varA, varB, varC);