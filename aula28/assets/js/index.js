//capturar evento de submit do formulario

/**
 * IMC
Menos do que 18,5
Entre 18,5 e 24,9
Entre 25 e 29,9
Entre 30 e 34,9
Entre 35 e 39,9
Mais do que 40

Resultado
Abaixo do peso
Peso normal
Sobrepeso
Obesidade grau 1
Obesidade grau 2
Obesidade grau 3
 */

const form = document.querySelector('#formulario');//criei a variavel para chamar meu formulario

form.addEventListener('submit', function (evento) {//posso chamar de event ou e 
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#ipeso');
    const inputAltura = evento.target.querySelector('#ialtura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});//criamos uma função para parar o evento no caso vamos escutar o submit, deve ser criada uma função, seja criando ou adicionando ela. 

function getNivelImc(imc) {
    const nivel = [`Abaixo do peso`, `Peso normal`, `Sobrepeso`, `Obesidade grau 1`, `Obesidade grau 2`, `Obesidade grau 3`]

    if (imc >= 39.9) return nivel['5'];// quando o if for muito pequeno podemos colocá-lo em apenas uma linha
    if (imc >= 34.9) return nivel['4'];// quando colocamos um return numa function se a condição for verdadeira ela para de executar, caso nao seja ela sequer executar passa para a próxima condição da lista 
    if (imc >= 29.9) return nivel['3'];
    if (imc >= 24.9) return nivel['2'];
    if (imc >= 18.5) return nivel['1'];
    if (imc < 18.5) return nivel['0'];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {//funcao que cria parágrafos
    const p = document.createElement('p'); //estou criando um paragrafo
    return p;
}

//como puxar o resultado



function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add(`paragrafo-resultado`);//se for valido adiciona essa clase
    }else {//se nao for add essa
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}// toda vez que for enviado será criado um paragrafo 


