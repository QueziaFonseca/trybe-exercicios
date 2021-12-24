// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false



// function palindrome(string) { 
    // //Transformar as string em um array (onde cada letra é um item do array), separando as letras com o método slplit("")
//     let wordArray = string.split("")
//     //Revertendo a ordem do array com o método reverse()
//     let reversedArray = wordArray.reverse()
//     //juntando o array em string com o metodo join("")
//     let reversedWord = reversedArray.join("")
//         if(string == reversedWord){
//             return true
//         }else{
//             return false
//         }
// }
function palindrome(string){
    let reversedSrting = string.split("").reverse().join("");
    if(string == reversedSrting){
        return true
    }else {
        return false
    }
    
    
}





console.log( palindrome("arara") )