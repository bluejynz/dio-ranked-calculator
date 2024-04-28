document.addEventListener("submit", (event) => {
    event.preventDefault();
    btn(event);
});

function btn(event) {
    event.preventDefault();

    let h2 = document.getElementById("result-text");
    h2.classList.remove("hidden");

    let def = parseInt(document.getElementById("def").value);
    let vit = parseInt(document.getElementById("vit").value);

    let score = vit - def;
    let ranking = checkRanking(score);

    h2.innerText = `O Herói tem de saldo de ${score} está no nível de ${ranking}`;
}

function checkRanking(score) {
    if (score <= 10) {
        return "Ferro";
    } else if (score > 10 && score <= 20) {
        return "Bronze";
    } else if (score > 20 && score <= 50) {
        return "Prata";
    } else if (score > 50 && score <= 80) {
        return "Ouro";
    } else if (score > 80 && score <= 90) {
        return "Diamante";
    } else if (score > 90 && score <= 100) {
        return "Lendário";
    } else if (score > 100) {
        return "Imortal";
    } else {
        console.log(score);
        return "Erro";
    }
}
