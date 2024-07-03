// vamos criar uma funcao que formata a data 

//como adicionar um 0 a esquerda

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    //console.log(data);
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()) + 1;// adicionamos mais um por conta que o nosso mes nao inicia em 0
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);