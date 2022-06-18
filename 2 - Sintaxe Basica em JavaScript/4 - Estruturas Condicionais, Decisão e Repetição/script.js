//Objetivos

//1. O que são estruturas condicionais?;
//2. Estruturas de decisão;
//3. Estruturas de repetição;


//Estruturas condicionais

//São instruções para realizar determinadas tarefas a partir de uma
//condição, seja de decisão ou repetição;

//Ex.: Um jogo precisa mudar o placar toda vez que um jogador
//marca pontuação;

//PLACAR
//0 01

var jogador1 = 0;
var jogador2 = 1;
var placar;

//usando ninho de if ou alinhamento de if
//if (jogador1 != -1) {

//usando if ternário
jogador1 != -1 && jogador2 !=  -1 ? console.log('Osjogadores são validos'): 
console.log ('jogadores invalidos');
//usando if
if (jogador1 > 0 && jogador2 == 0) {
     console.log('jogador 1 marcou ponto:');
     placar = jogador1 > jogador2;
 } 
//usando else if 
 else if (jogador2 > 0 && jogador1 == 0) {
     console.log('jogador 2 marcou ponto');
     placar = jogador2 > jogador1;
 } 
//usando else 
 else {
     console.log('ninguem marcou ponto');
 }
//}
//Acabamos de estudar o if, else if e else.

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
        case placar = jogador2 > jogador1:
            console.log ('jogador 2 ganhou');
            break;
        default:
            console.log('ninguem ganhou');
}

// Estrutura de Repetição
// Laços de repetição
//• For;
//• For/in;
//• For/of;
//• While;
//• Do/while;

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];
let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

// for - Funciona como uma repetição de intrução até a contição falsa
for (let indice = 0; indice < array.length; indice++) {
    console.log (indice);
}

// for/in - Funciona como uma repetição a partir de uma propriedade:
// com array
for (let i in array) {
    console.log(i);
}

// for/in com object
for (i in object) {
    console.log(i);
}

// for/off - Funciona como uma repetição a partir de um valor:
// com array
for (i of array) {
    console.log(i);
}

// for/off com object (este exemplo foi impresso cada letra por linha da propriedade1 por sso que não dá para usar com object)
for (i of object.propriedade1) {
    console.log(i);
}

//while - Executa uma instrução “até que” determinada condição seja falsa, a verificação é feita depois da execução;

var a = 0;

while (a < 10) {
    a++;
    console.log (a);
}

// DO WHILE - este exemplo não de certo
do {
    a++;
    console.log(a);
    while (a < 10);
}
