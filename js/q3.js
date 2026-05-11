let alunos = [

    {
        nome: "João da Silva",
        nota1: 7,
        nota2: 8.5
    },

    {
        nome: "Maria Oliveira",
        nota1: 9,
        nota2: 7
    },

    {
        nome: "Carlos Souza",
        nota1: 5,
        nota2: 6
    }

];

for (let aluno of alunos) {
    let peso1 = aluno.nota1 * 0.6;
    let peso2 = aluno.nota2 * 0.4;

    let notaTotal = peso1 + peso2;

    alert(
        "Aluno: " + aluno.nome +
        "\nNota 1: " + aluno.nota1 +
        "\nNota 2: " + aluno.nota2
    );

    alert(
        "Nota total de " +
        aluno.nome +
        ": " +
        notaTotal.toFixed(2)
    );
}