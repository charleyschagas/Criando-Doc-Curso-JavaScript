// Tipos primitivos

// Boolean, null, undefined, Number, String, Array, Object, Function.

// Boolean recebem valores verdadeiros ou falso.

//Boolean - console.log(typeof(vOuf));
var vOuf = false;
console.log(typeof(vOuf));

// Number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string

var nome = "charleys"
console.log(typeof(nome))

var variavel;
console.log(variavel);
// var – escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;

let variavel2 = "rosa";
variavel2 =  "verde";
console.log(variavel2)
//let – escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null; A let Permite alterar o valor depois de sua criação.

const constante = "rosa";
console.log(constante)
//const – escopo local de bloco, somente leitura, o valor inicial é obrigatório e não pode ser alterado.


//---------------------------------------------------------------

var escopoGlobal = "global";
console.log(escopoGlobal);
//Escopo global – quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o código.

function escopoLocal(){
    let escopoLocalInterno = "local";
    console.log(escopoLocalInterno);
}

escopoLocal();
//Escopo local – quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não.

//atricuição
var atribuicao = 'diana';
console.log(atribuicao)


//comparação
var comparacao = '0' == 0;
console.log(comparacao)

//comparação identica
var comparcaoIdentica = '0' === 0;
console.log(comparcaoIdentica)

var comparcaoIdentica2 = 0 === 0;
console.log(comparcaoIdentica2)

//Operadores aritméticos, relacionais e lógicos;

var adcao = 1 + 1;
console.log(adcao);

var subtracao = 20 - 12
console.log(subtracao)

var multiplicacao = 4 * 3;
console.log(multiplicacao);

//divisao real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

//var divisaoInteira ou o resto da divisão (=1)
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

//potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

//// Operadores relacionais
var maiorq = 5 > 2;
console.log(maiorq);

var menorq = 5 < 2;
console.log(menorq);

var maioIgual = 5 >= 10;
console.log(maioIgual);

var menorIgual = 10 >= 5;
console.log(menorIgual);

//Operadores lógicos
//   && - “e” – considera que todos os valores sejam true;
var e = true && false;
console.log(e);

//   || - “ou” – considera que qualquer valor seja true;
var ou = true || false;
console.log(ou);

//   ! - “não” – inverte o valor de true para false ou vice-versa;
var nao = !true;
console.log(nao)





