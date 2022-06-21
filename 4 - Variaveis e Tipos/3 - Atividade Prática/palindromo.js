//  Solução 1

function verificaPalindromo(string) {
    if (!string) return "String inexistente";

    return string.split("").reverse().join("") === string;

}
// console.log(verificaPalindromo("ama"));

//  Solução 2
// omo
function verificaPalindromo(string) {
    if(!string) return "String inexistente";
     
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length -1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(verificaPalindromo('abba'));
