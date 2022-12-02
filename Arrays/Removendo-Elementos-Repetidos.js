/*const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);
const nomesAtualizados = [...meuSet];
console.log(nomesAtualizados);
*/
//Um jeito mais simplificado para retonar como array a uma nova lista

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
const nomesAtualizados = [...new Set(nomes)];
console.log(nomesAtualizados);
