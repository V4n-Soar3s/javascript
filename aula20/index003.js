
//Podemos criar um objeto criando uma variável, vide exemplo:

const pessoa1 = {//criei um objeto
    nome: 'Vanessa',//atributos da pessoa ou do objeto criado 
    sobrenome: 'Soares',
    idade: 28, 

    fala() {// aqui eu chamei uma função dentro de um objeto sendo assim ela se torna um método
       console.log(`A minha idade atual é ${this.idade}.`); // this significa este objeto neste contexto dentro do objeto ele representa um objeto
    }, 

    incrementaIdade() {
        this.idade++;// incrementa +1 ano a idade quando chamado 
    }
};

pessoa1.fala();//a função que está dentro do método fala irá fazer aparecer no console a informação da idade junto a frase que esta no console
pessoa1.incrementaIdade(); //estou chamando o método incrementaIdade dentro de pessoa1 e ele irá mexer no atributo de idade somando +1.
pessoa1.fala();// e executando esse vamos ver a idade que foi alterada no neste método aqui 
pessoa1.incrementaIdade(); //estou chamando o método incrementaIdade dentro de pessoa1 e ele irá mexer no atributo de idade somando +1.
pessoa1.fala();// e executando esse vamos ver a idade que foi alterada no neste método aqui 
pessoa1.incrementaIdade(); //estou chamando o método incrementaIdade dentro de pessoa1 e ele irá mexer no atributo de idade somando +1.
pessoa1.fala();// e executando esse vamos ver a idade que foi alterada no neste método aqui 
pessoa1.incrementaIdade(); //estou chamando o método incrementaIdade dentro de pessoa1 e ele irá mexer no atributo de idade somando +1.
pessoa1.fala();// e executando esse vamos ver a idade que foi alterada no neste método aqui 


//quando uma função está dentro de um objeto ela é chamada de método

