//push = função para adicionar o elemento ao final do array 
//unshift = função para adicionar o elemento no ínicio do array e mudar a posição dos demais elementos existentes no array

//               0       1        2    
const alunos = ['Luiz', 'Maria', 'João'];

alunos.unshift('Mariana');//adicionei um elemento no inicio do array 
alunos.unshift('Carlos');//adicionei um elemento no inicio do array
alunos.push('Luiza');// solicito que seja adicionado um elemento no final do meu array
alunos.push('Fábio'); // solicito que seja adicionado um elemento no final do meu array

console.log(alunos);