//sempre é melhor envolvermos tudo o que precisamos dentro de uma função
//IIFE - (Immediately Invoked Function Expression)

function meuEscopo (){// criei uma função
    const form = document.querySelector('.form');//criei uma variavel que chama o formulario dentro dela com a class que definimos
    const resultado = document.querySelector('.resultado');//selecionamos a div 

    const pessoas = [];//criei um array vazio porque quem vai preencher é o envio dos dados da pagina 

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({//adicionamos esses dados dentro do nosso array, temos um objeto por indice
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        })

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`
    };

    form.addEventListener('submit', recebeEventoForm);//adiciona um escutador de eventos no meu formulario

};// Nada que está dentro dessa função poderá ser acessado pelo escopo global 

meuEscopo( );

