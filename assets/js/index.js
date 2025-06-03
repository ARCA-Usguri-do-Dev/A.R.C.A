document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const secoes = document.querySelectorAll(".detalhe-desastre");

  // Mostrar a seção correspondente ao card clicado
  cards.forEach(card => {
    card.addEventListener("click", (event) => {
      event.stopPropagation(); // Impede o clique de subir

      const idAlvo = card.getAttribute("data-alvo");

      secoes.forEach(sec => {
        sec.classList.remove("visivel");
        sec.classList.add("oculto");
      });

      const alvo = document.getElementById(idAlvo);
      if (alvo) {
        alvo.classList.remove("oculto");
        alvo.classList.add("visivel");
        alvo.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Botão "Fechar"
  const botoesFechar = document.querySelectorAll(".btn-fechar");
  botoesFechar.forEach(botao => {
    botao.addEventListener("click", (event) => {
      event.stopPropagation(); // Evita conflito com o click fora
      const secao = botao.closest(".detalhe-desastre");
      secao.classList.remove("visivel");
      secao.classList.add("oculto");
    });
  });

  // Clicar fora da seção visível fecha ela
  // Fechar a seção se clicar fora do conteúdo (card-conteudo)
  document.addEventListener("click", (event) => {
    secoes.forEach(secao => {
      if (secao.classList.contains("visivel")) {
        const conteudo = secao.querySelector(".card-conteudo");
        if (!conteudo.contains(event.target)) {
          secao.classList.remove("visivel");
          secao.classList.add("oculto");
        }
      }
    });
  });
});
