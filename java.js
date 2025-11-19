
//armazena habilidades adicionadas
let habilidades = [];

//adicionar habilidade à lista
function adicionarHabilidade() {
    const select = document.getElementById("selectHabilidade");
    const lista = document.getElementById("listaHabilidades");

    if (select.value === "") {
        alert("Selecione uma habilidade antes de adicionar.");
        return;
    }

    if (habilidades.length >= 5) {
        alert("Limite de 5 habilidades atingido!");
        return;
    }

    habilidades.push(select.value);

//atualiza visualmente a UL
    lista.innerHTML = "";
    habilidades.forEach(h => {
        lista.innerHTML += `<li>${h}</li>`;
    });
}

//validar CPF (mínimo 11 dígitos)
function checarCPF(valor) {
    let cpf = valor.replace(/\D/g, "");
    return cpf.length === 11;
}

//validação simples de e-mail
function checarEmail(valor) {
    let email = valor.trim().toLowerCase();
    return email.includes("@") && email.endsWith(".com");
}

//exibir feedback no HTML
function exibirFeedback(erros) {
    const fb = document.getElementById("areaFeedback");

    if (erros.length > 0) {
        fb.style.background = "#ffdddd";
        fb.innerHTML = "<strong>Corrija os erros antes de continuar:</strong><br><br>";
        fb.innerHTML += erros.map(e => `• ${e}`).join("<br>");
    } else {
        fb.style.background = "#ddffdd";
        fb.innerHTML = `
            <h3>Inscrição enviada com sucesso!</h3>
            <p><strong>Nome:</strong> ${document.getElementById("inputNome").value}</p>
            <p><strong>E-mail:</strong> ${document.getElementById("inputEmail").value}</p>
            <p><strong>Habilidades:</strong> ${habilidades.join(", ")}</p>
            <p><strong>Interesse:</strong> ${document.getElementById("selectInteresse").value}</p>
        `;
    }
}

//validar formulário
function validarFormulario(evento) {

    evento.preventDefault();

    let erros = [];

    const nome = document.getElementById("inputNome").value.trim();
    const cpf = document.getElementById("inputCPF").value.trim();
    const email = document.getElementById("inputEmail").value.trim();

//validações
    if (nome.length < 5) {
        erros.push("O nome deve ter pelo menos 5 caracteres.");
    }

    if (!checarCPF(cpf)) {
        erros.push("O CPF deve conter 11 dígitos numéricos.");
    }

    if (!checarEmail(email)) {
        erros.push("E-mail inválido. Deve conter '@' e terminar com '.com'.");
    }

    if (habilidades.length < 3) {
        erros.push("Adicione pelo menos 3 habilidades.");
    }

    exibirFeedback(erros);
}

//eventos

document.getElementById("btnAdicionarHabilidade")
    .addEventListener("click", adicionarHabilidade);

document.getElementById("formInscricao")
    .addEventListener("submit", validarFormulario);
