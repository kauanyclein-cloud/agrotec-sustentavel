// Aguarda o carregamento completo do documento HTML
document.addEventListener('DOMContentLoaded', () => {
    const botaoAlternar = document.getElementById('btn-alternar');
    const corpoPagina = document.body;

    // Função que ativa/desativa o modo focado em sustentabilidade
    botaoAlternar.addEventListener('click', () => {
        corpoPagina.classList.toggle('modo-sustentavel');
        
        // Altera o texto do botão dinamicamente para engajar o usuário
        if (corpoPagina.classList.contains('modo-sustentavel')) {
            botaoAlternar.textContent = "🟢 Modo Sustentável Ativo";
            botaoAlternar.style.boxShadow = "0 0 15px #4caf50";
        } else {
            botaoAlternar.textContent = "⚡ Simular Futuro Sustentável";
            botaoAlternar.style.boxShadow = "none";
        }
    });
});
