// Outras formas de enviar datas
// Milisemos de segundos em JS vai até 999;
// Os meses em JS se são de 0-11. 

const data = new Date(2024, 6, 1, 21, 56, 30, 999);// sempre numero sem 0 a esquerda ordem (ano, mes, dia, horas, minutos, segundos, milisemos)
const dataString = new Date ("2019-03-1 03:24:00");// para apresentar em formato de string
console.log(data.toString());
console.log(dataString.toString()); 