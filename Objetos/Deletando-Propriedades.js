const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
  aliado: {
    nome: "Saruman",
    classe: "mago",
  },
  status: "desaparecido",
};
/*delete objPersonagem.aliado;
delete objPersonagem.status;
console.log(objPersonagem.aliado);
*/
//Também é possível utilizar a notação de colchetes:
delete objPersonagem["aliado"];
delete objPersonagem["status"];
console.log(objPersonagem.aliado);
console.log(objPersonagem);
