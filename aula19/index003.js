// Funções - 

function saudacao(nome) {//criei a função 
    console.log(`Bom dia ${nome}!`);//Para salvar o que essa função retorna na variável que foi criada const variavel, porem como alert essa função log nao retorna nada ela simplesmente exibe um valor na tela 
}

const variavel = saudacao('Lyuh');//criei a variavel const variavel 
console.log(variavel);// trará o valor undefined porque não foi especificado o que eu quero que ela retorne aqui 

// a função é executada porém não retorna valor na variável 