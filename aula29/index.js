// Operador ternário ?: 

//dependendo do tamanho da condiçao podemos utilizar o parenteses ex: (condicao) ? 'Valor verdadeiro' : 'Valor para falso'; 

const pontuacaoUsuario = 1000 ;// declarei a variável para a pontuação do usuário
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';// neste caso isolamos a conta dentro de uma variavel informando as condições onde if foi susbtituido por ? (apresentando a primeira condição) e else por : (apresentando a segunda condição) 

const corUsuario = 'Pink';// se o valor for nulo a cor permanecerá padrão
const corPadrao = corUsuario || 'Preta';// quando utilizamos isso daqui nós estamos setando um valor padrao 

console.log(nivelUsuario, corPadrao);// exibe o resultado na tela 

