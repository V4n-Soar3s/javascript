//operadores de comparação != diferente (não utilizamos pois checa apenas o valor e nao checa o tipo)

const num1 = 10;//number
const num2 = 10;//number
const comp = num1 != num2;// faço a comparação
console.log(comp);//retorna false pq a expressao nao tem numeros diferentes uns dos outros 

//operador de comparação !== diferente estrito (é utilizado pois checa valor e tipagem)

const num3 = 10;// number
const num4 = '10';//string
const comp1 = num3 !== num4;//comparei
console.log(comp1);// trara a resposta true pois verificou valor e tipo e identificou que os dois sao diferentes 