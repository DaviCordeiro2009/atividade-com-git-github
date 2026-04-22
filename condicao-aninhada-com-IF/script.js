let renda = Number(prompt ("Digite ua renda:"));


if (!isNaN(renda)){
    if (renda >= 3000) {
        let nomeLimpo = prompt("Nome limpo? (sim ou nao)");
        if (nomeLimpo === "sim") {
            alert("Financiamento aprovado");
        } else {
            alert("Nome negativado");
        }
    } else {
        alert("Renda insuficiente");
    }
}

