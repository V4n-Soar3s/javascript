//capturar evento de submit do formulario 

const form = document.querySelector('#formulario');//criei a variavel para chamar meu formulario

form.addEventListener('submit', function(evento){
    evento.preventDefault();
    console.log('Evento previnido');
    setResultado('Olá Mundo!');
});//criamos uma função para parar o evento no caso vamos escutar o submit, deve ser criada uma função, seja criando ou adicionando ela. 


//como puxar o resultado

function setResultado(msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<p>${msg}</p>`;
}// toda vez que for enviado será criado um paragrafo 