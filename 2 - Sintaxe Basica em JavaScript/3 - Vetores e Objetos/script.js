//O que são vetores ou arrays?; Arrays são um tipo de lista, ou matriz de variáveis, onde cada variável possui um índice. Os valores podem ser de vários tipos.

//Imagina que um array é uma caixa com várias outras caixas dentro e cada uma contendo algum valor;

//Ex.: let array = [‘string’, 1, true...]

//Como declarar um array;
//let arrayTeste1 = ['string', 1, true];
//console.log(arrayTeste1);

//O arry pode guardar vários tipos de dados inclusive outros array dentro dele.
let arrayTeste2 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(arrayTeste2[4]);

//Posso selecional qual array eu quero EX: console.log(arrayTeste2[4]); vai retonar ['array2']
//--------------------------------------------------------------------------------------------

// Manipulando Arrays

//Ao ser declarado, o Array traz consigo uma série de métodos para manipulá-lo.

// • forEach() – itera um array;
// • push() – add item no final do array;
// • pop() – remove item no final do array;
// • shift() – remove item no início do array;
// • unshift() – add item no início do array;
// • indexOf() – retorna o índice de um valor;
// • splice() – remove ou substitui um item pelo índice;
// • slice() – retorna uma parte de um array existente;

// 1 - forEach() – itera um array;
arrayTeste2.forEach(function (item, index) {console.log(item, index)});
// Ele vai fazer uma repetição para cada item ou index dentro de um array. Ex: item String - index 0, item 1 - index 1, item true - index 2, item ['array1'] - index 3 e assim por diante.

// 2 - push() – add item no final do array;
arrayTeste2.push("novo item");
console.log(arrayTeste2);
// O push joga algum dado novo para dentro do array.

// 3 - pop() – remove item no final do array;
arrayTeste2.pop();
console.log(arrayTeste2);
// O pop apagou o array de nome 'novo item' que foi riado pelo push acima.

// 4 - shift() – remove item no início do array;
arrayTeste2.shift();
console.log(arrayTeste2);
// foi removido o item 'string'.

//5 - unshift() – add item no início do array;
arrayTeste2.unshift("novo item 42");
console.log(arrayTeste2);
//foi adcionado um novo item "novo item 42 no inico" no arrayTeste2.

//6 - indexOf() – retorna o índice de um valor;
console.log(arrayTeste2.indexOf(true));
// O index do valor true é 2.

// 7 - splice() – remove ou substitui um item pelo índice;
arrayTeste2.splice(0 , 3);
console.log(arrayTeste2);
// Neste exemplo foi apagado os index de 0 a 3 ('string', 1, true) ficando apenas os ['array1'], ['array2'], ['array3'], ['array4'].

// 8 - slice() – retorna uma parte de um array existente;
let novoArray = arrayTeste2.slice(0, 3);
console.log(novoArray);
// ele pegou os 3 primeiros intens existentes ['array1'], ['array2'], ['array3']


//--------------------------------------------------------------------------------------------


// Objetos

//Dados que possuem propriedades e valores que definem suas características. Deve ser declarado entre chaves “{}”.

// Ex.: imagine uma xícara azul. Ela tem cor, pode ter vários tamanhos e funções(quero cafééé). Pode ser declarada assim:
//  var xicara = {
//  cor: ‘azul’,
//  tamanho: ‘p’,
//  funcao: tomarCafe()
//  }

//As propriedades de ojbetos podem ser atribuídas à variáveis, facilitando a manipulação do objeto. Chamamos isso de desestruturação.

// Ex.: var xicara = {cor: ‘azul’, tamanho: ‘p’, funcao: tomarCafe()}

//   var cor = xicara.cor;
//   var tamanho = xicara.tamanho;
//   var funcao = tomarCafe();


let object = { string: 'string', number: 1, boolean: true, array:['array42'], objectInterno: {objectInterno: 'objectInterno'}};

console.log(object);
console.log(object.objectInterno)

// desestruturação do objeto

var string = object.string;
console.log (string);

var arrayInterno = object.array;
console.log(arrayInterno);

// Existe outra forma de fazer desistruturação que é atravez de chaves:

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);








