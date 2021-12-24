// Agora inverta o lado do triângulo. Por exemplo:
// Copiar
// n = 5

//     * vvvv* 4v e 1*  n-1  n-4
//    ** vvv** 3v e 2*  n-2   n-3
//   *** vv*** 2v e 3*  n-3   n-2
//  **** v**** 1v e 4*  n-4   n-1
// ***** ***** 4*       n-5   n
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
n=5
let vazio = " "
let asteriscos = "*"
let linha = ""
// (i==1 && i+j==n)
//espacovazio

for(let i = 0; i < n-2 ; i++){
    linha = ""
    for (let j = 0; j < n; j++){
        if((i+j <= n-4) || ((j>2) && (i<n-4)) || (i+j==n && i<n-3)){
            linha = linha + vazio
        }else{ linha = linha + asteriscos
        }
    }
    console.log(linha)
}