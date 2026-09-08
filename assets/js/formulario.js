"use strict";

// Funções independentes: formatar não significa verificar a existência dos dados.
function somenteNumeros(valor) { return valor.replace(/\D/g, ""); }

function mascaraCPF(n) {
    let texto = n.slice(0, 3);
    if (n.length > 3) texto += "." + n.slice(3, 6);
    if (n.length > 6) texto += "." + n.slice(6, 9);
    if (n.length > 9) texto += "-" + n.slice(9);
    return texto;
}

function mascaraCEP(n) {
    return n.length > 5 ? n.slice(0, 5) + "-" + n.slice(5) : n;
}

function mascaraTelefone(n) {
    if (!n) return "";
    if (n.length <= 2) return "(" + n;
    const local = n.slice(2);
    const prefixo = local.length > 8 ? 5 : 4;
    return `(${n.slice(0, 2)}) ` + local.slice(0, prefixo) +
        (local.length > prefixo ? "-" + local.slice(prefixo) : "");
}

function cpfValido(valor) {
    const n = somenteNumeros(valor);
    if (n.length !== 11 || /^(\d)\1{10}$/.test(n)) return false;
    for (let tamanho = 9; tamanho <= 10; tamanho++) {
        let soma = 0;
        for (let i = 0; i < tamanho; i++) {
            soma += Number(n[i]) * (tamanho + 1 - i);
        }
        const resto = soma % 11;
        if (Number(n[tamanho]) !== (resto < 2 ? 0 : 11 - resto)) return false;
    }
    return true;
}

if (typeof document !== "undefined") {
    const form = document.getElementById("formulario");
    const resultado = document.getElementById("resultado");
    const hoje = new Date();
    document.getElementById("nascimento").max =
        `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, "0")}-${String(hoje.getDate()).padStart(2, "0")}`;

    function configurar(id, limite, formatar, verificar) {
        const campo = document.getElementById(id);
        function atualizar() {
            const original = campo.value;
            const cursor = campo.selectionStart ?? original.length;
            const antes = somenteNumeros(original.slice(0, cursor)).length;
            const n = somenteNumeros(original);
            campo.setCustomValidity("");
            if (n.length > limite) {
                campo.setCustomValidity(`Informe no máximo ${limite} números.`);
                return;
            }
            campo.value = formatar(n);
            let posicao = 0;
            let contagem = 0;
            while (posicao < campo.value.length && contagem < antes) {
                if (/\d/.test(campo.value[posicao])) contagem++;
                posicao++;
            }
            campo.setSelectionRange(posicao, posicao);
            if (verificar && n.length === limite && !verificar(n)) {
                campo.setCustomValidity("CPF inválido. Confira os números informados.");
            }
        }
        campo.addEventListener("input", atualizar);
        campo.addEventListener("blur", atualizar);
    }

    configurar("cpf", 11, mascaraCPF, cpfValido);
    configurar("telefone", 11, mascaraTelefone);
    configurar("cep", 8, mascaraCEP);

    form.querySelectorAll('input[type="text"][required]').forEach(campo => {
        if (["cpf", "cep"].includes(campo.id)) return;
        campo.addEventListener("input", () => {
            const tamanho = campo.value.trim().length;
            const minimo = campo.id === "nome" ? 3 : 1;
            campo.setCustomValidity(campo.value && tamanho < minimo
                ? `Informe ao menos ${minimo} caracteres, sem contar espaços nas extremidades.` : "");
        });
    });

    form.addEventListener("input", () => { resultado.textContent = ""; });
    // O navegador só dispara submit quando as validações nativas passam.
    form.addEventListener("submit", evento => {
        evento.preventDefault();
        resultado.textContent = "Dados verificados nesta demonstração. Nenhum cadastro foi enviado ou armazenado.";
    });
    document.getElementById("validar").disabled = false;
}

// Permite testar as regras também fora do navegador, sem dependências.
if (typeof module !== "undefined") {
    module.exports = { mascaraCPF, mascaraCEP, mascaraTelefone, cpfValido };
}
