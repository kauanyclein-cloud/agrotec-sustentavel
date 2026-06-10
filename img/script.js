let score = 100;

function tomarDecisao(sustentavel) {
    const feedback = document.getElementById("game-feedback");
    const scoreVal = document.getElementById("score-val");
    const progress = document.getElementById("progress");

    if (sustentavel) {
        score = Math.min(100, score + 10);
        feedback.innerText = "Excelente escolha! O manejo sustentável preserva a biodiversidade e protege os polinizadores.";
        feedback.style.color = "#27ae60";
    } else {
        score = Math.max(0, score - 25);
        feedback.innerText = "Cuidado! O uso descontrolado de químicos prejudica o solo, contamina a água e quebra o equilíbrio.";
        feedback.style.color = "#c0392b";
    }

    scoreVal.innerText = score;
    progress.style.width = score + "%";
}

