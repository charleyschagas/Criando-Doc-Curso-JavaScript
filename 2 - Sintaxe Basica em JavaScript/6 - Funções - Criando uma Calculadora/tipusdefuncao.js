//Tipos de funções;

//Declarativas;

function funcao(){
    console.log ('Sou uma mensahem de uma função declarativa!')
}

funcao();

// Expressões de Funções;
//São funções atribuídas à expressões. A nomeação das funções por expressão é opcional:

//teste com nome e sem nome. Funciona do mesmo jeito é opcional colocar o nome da função.
//var funcao2 = function funcao2 () {
var funcao2 = function () {
    console.log('Sou uma mensagem de função de expressão1!');
}

funcao2();

// arrow function - São funções de expressão de sintaxe curta. Arrow functions sempre serão anônimas, e portanto não podem ser nomeadas. deve ser declarada com parênteses "()", seguido de "=>" e depois chaves "{}"
var funcao3 = () => {
    console.log('Eu sou uma arrow function!');
}
funcao3();

//------------------------------------------------------------------------

// Funções aritmétricas
//Criando uma Calculadora

