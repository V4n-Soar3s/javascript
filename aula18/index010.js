//Suponha que queiramos fatiar o array:


//               0       1        2                          3         4   
const alunos = ['Luiz', 'Maria', 'Joao'];// aqui tbm temos a luiza e o eduardo

alunos.push('Luiza');
alunos.push('Eduardo');

console.log(alunos.slice(0, -2));
