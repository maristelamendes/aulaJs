const MEDIA = 70;
const AULAS = 80;
const LIMITE_FALTAS = 25;

let nome = "Maria Andrade";
let nota1= 50;
let nota2= 65;
let nota3= 90;
let numFaltas = 10;

let somaNotaAluno = nota1 + nota2 + nota3;
console.log("soma das notas" + somaNotaAluno);

let mediaAluno = somaNotaAluno / 3;
console.log("media das notas" + mediaAluno);

let  mediaAlunoFormat = mediaAluno.toFixed();
console.log("media formatada" + mediaAlunoFormat);


if (mediaAlunoFormat >= MEDIA) {
  console.log("O aluno" + nome + "esta Aprovado");
}else{
  console.log("O aluno" + nome + "esta Reprovado");
}

let porcentagemFaltas = (numFaltas/AULAS)*100;
  console.log("porcentagemFaltas" + porcentagemFaltas);

  if (mediaAlunoFormat >= MEDIA && porcentagemFaltas < LIMITE_FALTAS){
    console.log ("O aluno" + nome + "esta Aprovado");
  }else if (mediaAlunoFormat >= MEDIA && porcentagemFaltas > LIMITE_FALTAS){
  }else{
    console.log("O aluno" + nome + "esta Reprovado por media");
  }