const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

const listaAlunosEMedias = [alunos, medias];

const resultadoAlunosEMedias = (aluno) => {
  if (listaAlunosEMedias[0].includes(aluno)) {
    //const alunos = listaAlunosEMedias[0];
    //const medias = listaAlunosEMedias[1];
    const [alunos, medias] = listaAlunosEMedias;

    const indice = alunos.indexOf(aluno);
    const media = medias[indice];
    console.log(`${aluno} tem a média ${media}.`);
  } else {
    console.log("Aluno não cadastrado");
  }
};
resultadoAlunosEMedias("Juliana");
