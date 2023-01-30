import User from "./User.js";

class Docente extends User {
  constructor(nome, email, nascimento, role = "Docente", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }
  aprovarAluno(aluno, curso) {
    return `O aluno ${aluno} foi aprovado no curso ${curso}`;
  }
}
const novoDocente = new Docente("Luana", "l@l.com", "03-03-2023");
console.log(novoDocente);
console.log(novoDocente.aprovarAluno("Rafael", "JS"));
console.log(novoDocente.exbirInfos());
