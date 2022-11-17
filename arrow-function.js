/*function apresentar(nome) {
  return `meu nome é ${nome}`;
}

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2
*/

// Arrow Function

// Só vai abrir {} se for ter mais de 1 linha de código
const somandoNumerosPequenos = (num1, num2) => {
  if (num1 > 10 || num2 > 10) {
    return `O numero só vai ser aceito se for entre 1 e 9`;
  } else {
    return num1 + num2;
  }
};
console.log(somandoNumerosPequenos(5, 5));

const meuNome = (nome) => `Meu nome é ${nome}`;
console.log(meuNome("Gabriela"));
