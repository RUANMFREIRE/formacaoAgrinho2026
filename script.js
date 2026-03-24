// Função para trocar de abas
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Lógica do Simulador
const inputs = ['temp', 'ar', 'solo'];

inputs.forEach(id => {
    document.getElementById(id).addEventListener('input', updateSimulador);
});

function updateSimulador() {
    const t = document.getElementById('temp').value;
    const a = document.getElementById('ar').value;
    const s = document.getElementById('solo').value;

    // Atualiza os números na tela
    document.getElementById('temp-val').innerText = t;
    document.getElementById('ar-val').innerText = a;
    document.getElementById('solo-val').innerText = s;

    const status = document.getElementById('status-display');

    // Lógica simples de "saúde" do morango
    // Morangos gostam de temp entre 18°C e 26°C e umidade alta
    if (t < 15 || t > 30 || s < 30) {
        status.innerText = "ALERTA: Condições desfavoráveis!";
        status.className = "status-danger";
    } else if (t >= 18 && t <= 26 && s >= 40 && s <= 70) {
        status.innerText = "Status: Ambiente Ideal (Crescimento Ótimo)";
        status.className = "status-good";
    } else {
        status.innerText = "Atenção: Ajuste os parâmetros para melhor produção.";
        status.className = "status-warn";
    }
}