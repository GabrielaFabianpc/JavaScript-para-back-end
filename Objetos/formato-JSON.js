/* Em JSON o nosso código anterior:
const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
  enderecos: {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
};

Ficaria assim:
{
  "nome": "Joao",
  "idade": 24,
  "email": "joao@firma.com",
  "telefone": ["1155555550", "1144444440"],
  "enderecos": {
      "rua": "R. Joseph Climber",
      "numero": 1337,
      "apartamento": true,
      "complemento": "ap 934"
    },
};
*/
