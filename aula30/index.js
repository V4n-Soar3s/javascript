//objeto date = é uma função construtura
//sempre que houver a palavra new estamos falando de uma função construtora
//Toda função construtora tem a primeira letra maiuscula 
//Quando chamamos a função date sem passar nenhum parametro toda vez que esse código for executado o JS vai gerar um objeto, criando um novo objeto de data com a data atual e esse objeto será salvo nessa variável.
// A função construtora herda de outros locais (tem várias coisas, várias funções que ajudam a trabalhar com datas)
// O marco 0 é o dia que iniciou o Timestamp unix ou epóca unix 01/01/1970

const tresHoras = 60 * 60 * 3 * 1000;// para adicionar um 3hrs na variavel
const umDia = 60 * 60 * 24 * 1000;// para adicionar um dia 
const data = new Date(0 + tresHoras + umDia);// marco 0

console.log(data.toString());