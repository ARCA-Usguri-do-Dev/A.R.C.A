document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const secoes = document.querySelectorAll(".detalhe-desastre");
  
    // Mostra a seção ao clicar no card
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const idAlvo = card.getAttribute("data-alvo");