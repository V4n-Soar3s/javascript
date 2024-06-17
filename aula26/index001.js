//Estruturas condicionais if, else if e else, servem para desviar o fluxo da nossa aplicação quando necessário 

//entre 0 - 11 === bom dia 
//entre 12 - 17 === boa tarde 
//entre 18 - 23 === boa noite

//if pode ser usado sozinho com a condição dele, ou seja ele nao precisa do else if 
// sempre que utilizo a palavra else, preciso de um if antes  
// posso ter varios else if's na condição/checagem 
// e eu só posso um else por último na condição ou na checagem 
//podemos usar condições sem else if, utilizando apenas if e else


const hora = 23;

if (hora >=0 && hora <=11  ){//se a hora for menor do que 11 será apresentada a mensagem bom dia 
    console.log('Bom dia');
} else if (hora >=12 && hora <=17) {
    console.log('Boa tarde');
} else if (hora >=18 && hora <=23){
    console.log('Boa noite');
} else {
    console.log('Olá');
}

