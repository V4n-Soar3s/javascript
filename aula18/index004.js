//caso eu queira saber o tamanho do meu array:

const alunos = ['Luiz', 'Maria', 'João'];//declarei o array 

alunos[alunos.length] = 'Luiza'; //adicionei um elemento ao loway após o último 4
alunos[alunos.length] = 'Marcos'; //adicionei um elemento ao loway após o último 5
alunos[alunos.length] = 'Luana'; //adicionei um elemento ao loway após o último 6
alunos[alunos.length] = 'Fábio'; //adicionei um elemento ao loway após o último 7
alunos[alunos.length] = 'Leticia'; //adicionei um elemento ao loway após o último 8

console.log(alunos.length);// pedi para ser exibido a quantidade de elementos indexados do meu array
console.log(alunos); // solicitei que apareça a lista no console
console.log(alunos[7]);// chamei apenas o elemento 7 após adicionar mais elementos ao array 