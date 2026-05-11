class Aluno {

    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {

        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return this.primeiroNome + " " + this.segundoNome;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {

        if (this.media() > 6) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }
}


let alunos = [
    new Aluno("Antonio", "Silva", 7, 8.5),
    new Aluno("Maria", "Oliveira", 9, 7),
    new Aluno("Marcelo", "Souza", 5, 6),
    new Aluno("Sophia", "Lima", 10, 9),
    new Aluno("Pedro", "Pinto", 4, 5)
];

function mostrarAlunos() {

    for (let aluno of alunos) {

        alert(
            "Nome: " + aluno.nomeCompleto() +
            "\nMédia: " + aluno.media().toFixed(2) +
            "\nSituação: " + aluno.situacao()
        );
    }
}
mostrarAlunos();