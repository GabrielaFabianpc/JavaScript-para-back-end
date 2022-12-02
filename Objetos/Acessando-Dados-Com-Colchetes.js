const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};
console.log(`O nome do nosso cliente é ${cliente.nome}`);

// Podemos acessar cliente.cpf e pedir somente uma substring do valor especificado. Na substring() passaremos os valores 0 e 3.
console.log(
  `Os três primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`
);

//o valor da chave é uma string, e uma string dentro de colchetes depois de um objeto, nos permite acessar determinada propriedade que esta dentro de objeto.
const info = ["nome", "idade", "email", "cpf"];
info.forEach((chave) => {
  console.log(`O valor de ${chave} é ${cliente[chave]}`);
});

// Podemos utilizar o nome da propriedade como *string* dentro de colchetes `[“propriedade”]` para acessar as propriedades de um objeto de forma mais dinâmica.
const eu = {
  nome: "Gabi",
  idade: 20,
  altura: 1.63,
};

console.log(`O meu nome é ${eu["nome"]}`);
