const PESO_80KG = 80; // Você pode utilizar o valor que desejar aqui
const ALTURA_1M_78CM = 178; // Você pode utilizar o valor que desejar aqui

function calculaImc () {
  const peso = PESO_80KG;
  const altura = ALTURA_1M_78CM;

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`);
}

calculaImc();