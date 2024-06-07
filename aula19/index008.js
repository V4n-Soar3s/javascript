//Mas caso o usuário ou eu não informe um valor posso deixar um valor já definido para os meus parametros como valores padrões: 

function soma (x = 1, y = 1){//defini valores para caso nao sejam enviados nenhum valor para o parametro 
    const resultado = x + y;
    return resultado
}

const resultado = soma(4);// caso eu defina apenas um valor o x assume o valor de 4 e y de 1, mas caso eu mande os dois eles nao assumem mais os valores padroes 
console.log(resultado);