// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumber = 0;
for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i]%2 !== 0){
      oddNumber += 1
    }
}
console.log(oddNumber)