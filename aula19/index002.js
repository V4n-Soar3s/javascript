// Podemos enviar dados dentro de uma função por exemplo: 3


//Podemos criar parâmetros em uma função dentro do parenteses neste caso estaremos utilizando nome como parametro:



function saudacao(nome) {//criei a função 
    console.log(`Bom dia ${nome}!`);//corpo da função
}

saudacao('Lyuh');// chamei a função e inclui um valor para o parametro nome no momento em que a mesma é chamada 
saudacao('Mariana');// chamei a função e inclui um valor para o parametro nome no momento em que a mesma é chamada 
saudacao('Gustavo');// chamei a função e inclui um valor para o parametro nome no momento em que a mesma é chamada 

//toda vez que a função for chamada com um novo valor para o parametro nome será exibida no console a mesma mensagem alterando apenas o valor final. 