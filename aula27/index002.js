//se eu preciso checar uma coisa independente eu crio um novo if para aquela coisa
// se eu preciso de mais condições else if 
// se nao eu crio else 

const numero = 5;

if(numero < 10){//podemos criar mais de uma condição sem estar ligada ou presa a outra
    console.log('O número é menor que 10.');
}

if (numero >= 0 && numero <=5) {//se isso ocorrer faça isso
    console.log('O número está entre 0 e 5.');
} else if(numero >=6 && numero <=8) {
    console.log('O número está entre 6 e 8.');
}else if(numero >=9 && numero <=11){//verdadeira
    console.log('O número está entre 9 e 11.');
}else {
    console.log('O número não está entre 0 e 11.');
}

console.log('...Aqui vai o resto do código')