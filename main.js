const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    
    // Remove a classe "ativo" de todos os botões e textos
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }

    // Adiciona a classe "ativo" apenas no item clicado (índice i)
    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}
