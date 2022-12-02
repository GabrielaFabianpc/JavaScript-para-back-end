const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};
console.log(`O nome do nosso cliente é ${cliente.nome}`);

// Podemos acessar cliente.cpf e pedir somente uma substring do valor especificado. Na substring() passaremos os valores 0 e 3.
console.log(
  `Os três primeiros digitos do CPF do nosso cliente são ${cliente.cpf.substring(
    0,
    3
  )}`
);
