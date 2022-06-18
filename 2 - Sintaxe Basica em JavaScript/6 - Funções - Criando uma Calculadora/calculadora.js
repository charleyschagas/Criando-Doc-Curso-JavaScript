function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - soma (+)\n 2 - subtrção (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação(**)'));
    console.log(operacao);

    //Verificar se a operação é válida / !operacao - é para verificar se a operação é diferente do tipo numero / || siginifica OU.
    if(!operacao || operacao >= 7){
        alert('Erro - operação inválida!');
        calculadora();
    } else {
     //2 - Definição de variaveis
    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado;

    if (!n1 || !n2){
        alert('Erro - parâmetros inválidos!')
        calculadora();
    } else {
            //3 - Daclarações de funções:
    function soma(){
        resultado = n1 + n2;
        alert(`${n1}+${n2}=${resultado}`)
        novaOperacao();
    }

    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1}-${n2}=${resultado}`)
        novaOperacao();
    }

    function multiplicacao(){
        resultado = n1 * n2;
        alert(`${n1}*${n2}=${resultado}`)
        novaOperacao();
    }

    function divisaoReal(){
        resultado = n1 / n2;
        alert(`${n1}/${n2}=${resultado}`)
        novaOperacao();
    }

    function divisaoInteira(){
        resultado = n1 % n2;
        alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`)
        novaOperacao();
    }

    function potenciacao(){
        resultado = n1 ** n2;
        alert(`${n1}**${n2}=${resultado}`)
        novaOperacao();
    }

    // Esta função foi criada para não precisar ficar atualizando. Caso precise realizar outro calculo clicar em sim.
    function novaOperacao() {
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

        if (opcao == 1){
            calculadora();
        } else if (opcao == 2) {
            alert('até mais!');
        } else {
            alert ('Digite uma opção válida!')
            novaOperacao();
        }

    }
    }


    // 1 - Foi criado uma verificação
//    if (operacao == 1){
//        soma();
//    } else if (operacao == 2){
//        subtracao();
//    } else if (operacao == 3){
//        multiplicacao();
//    } else if (operacao == 4){
//        divisaoReal();
//    } else if (operacao == 5){
//        divisaoInteira();
//    } else if (operacao == 6){
//        potenciacao();
//    }

        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal ();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;

        }


    }
}
calculadora();
