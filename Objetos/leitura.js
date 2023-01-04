const dados = require("./cliente.json"); // require é uma função que o node nos permite usar para puxar um código de outro lugar.
console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
console.log(typeof clienteEmString);
console.log(clienteEmString.nome);
const transformandoEmObejto = JSON.parse(clienteEmString);
console.log(transformandoEmObejto);
