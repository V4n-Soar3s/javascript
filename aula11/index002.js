/** 
 * Operadores Aritméticos: 
 * Soma (+) -> ele faz a adição e a concatenação 
 * Subtração (-) -> 
 * Divisão (/)
 * Multiplicação (*)
 * Potenciação (**) -> sempre que quisermos elevar um número a outro número usamos **
 * Resto da divisão (%) -> 
 * ** Precedência dos operadores aritméticos ***
 * 1º () - tudo o que tiver dentro do parenteses vai ser executado primeiro 
 * 2º ** - depois fazemos a potenciação 
 * 3º * - multiplicação 
 * 4º / - divisão 
 * 5º % - resto da divisão 
 * 6º + e - | soma e subtração 
**/


// operador de incremento = ++ | Pré-incremento (++contador) e pós-incremento (contador++)
//let contador = 1; // melhor maneira 
//contador++;
//console.log(contador);

// se eu quiser fazer o incremento de mais de um valor seria desta forma: 

const passo = 50; //criamos um steap (passo)
let contador = 0;

contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);