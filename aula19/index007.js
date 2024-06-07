//Se eu mando a minha função executar sem enviar valores ela apresenta a mensagem Nan.Vide exemplo:

function soma(x, y){
    const resultado = x + y;
    return resultado;
}

const resultado = soma ();
console.log(resultado)