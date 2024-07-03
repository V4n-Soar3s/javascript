const data = new Date(1719971789892);// criei a variavel com a data 
console.log('Dia', data.getDate());//solicitei que seja apresentado no console a mensagem Dia e a data que pegamos da constante data
console.log('Mês', data.getMonth() + 1);//obter o mes
console.log('Ano', data.getFullYear());//obter o ano
console.log('Hora', data.getHours());//obter as horas
console.log('Min', data.getMinutes());//obter minutos
console.log('Seg', data.getSeconds());//obter segundos 
console.log('ms', data.getMilliseconds());//obter ms
console.log('Dia semana', data.getDay());//obter dia da semana 0- Domingo, 6 - sábado 
console.log(data.toString());
//console.log(Date.now()); - apresenta o numero da data atual e se jogarmos na nossa variavel data trara o dia atual 