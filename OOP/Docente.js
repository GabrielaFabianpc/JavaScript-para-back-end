import User from "./User.js";

export default class Docente extends User {
  constructor(nome, email, nascimento, role = "Docente", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }
  aprovarAluno(aluno, curso) {
    return `O aluno ${aluno} foi aprovado no curso ${curso}`;
  }
}
