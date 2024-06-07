//se eu quiser remover um elemento do inicio de um array e nao quiser que o indice seja alterado devo fazer o seguinte: 

const alunos = ['Luiz', 'Maria', 'João'];


delete alunos[1]; //deletei um elemento e teremos um elemento vazio impedindo que o indice seja alterado mesmo após remover o indice 1
console.log(alunos[1]);// vai trazer a mensagem undefined porque não há valor no indice 1
