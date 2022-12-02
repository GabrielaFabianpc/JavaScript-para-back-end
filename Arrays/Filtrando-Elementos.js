const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => {
  return medias[indice] < 7;
});
console.log(reprovados);
//Quando não usamos um parametro colocamos um _, o vsc entende que não estamos utilizando aquele parametro.
