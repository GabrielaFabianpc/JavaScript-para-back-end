//parâmetros de função

/*function soma(numero1, numero2) {
  return numero1 + numero2;
}
console.log(soma(2, 2));
console.log(soma(3, 5));
*/

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e minha idade é ${idade}`;
}
//console.log(nomeIdade("Gabriela", 20));

function soma(numero1, numero2) {
  return numero1 + numero2;
}

//Podemos definir um valor padrão
function multiplica(numero1 = 1, numero2 = 1) {
  return numero1 * numero2;
}
console.log(multiplica(soma(5, 5), soma(2, 2)));

/*MEU TESTE
function menos(numero1, numero2) {
  return numero1 - numero2;
}

function dividi(numero1, numero2) {
  return numero1 / numero2;
}
console.log(dividi(menos(20, 5), menos(10, 5)));
*/
