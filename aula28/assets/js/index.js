//capturar evento de submit do formulario 

const form = document.querySelector('#formulario');//criei a variavel para chamar meu formulario

form.addEventListener('submit', function(evento){//posso chamar de event ou e 
    evento.preventDefault();
    const inputPeso = e.target.querySelector('#ipeso');
    const inputAltura = e.target.querySelector('#ialtura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    console.log(peso, altura)
});//criamos uma função para parar o evento no caso vamos escutar o submit, deve ser criada uma função, seja criando ou adicionando ela. 


function criaP(){//funcao que cria parágrafos
    const p = document.createElement('p'); //estou criando um paragrafo
    return p;
}

//como puxar o resultado



function setResultado(msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
}// toda vez que for enviado será criado um paragrafo 


