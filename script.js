// Exemplo básico de JavaScript para adicionar interatividade

// Adiciona um evento de clique ao botão "COMPRAR NO ZÉ"
const buyButton = document.querySelector('.buy-button');
buyButton.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de redirecionamento do link
    alert('Você clicou em "COMPRAR NO ZÉ"!');
});


