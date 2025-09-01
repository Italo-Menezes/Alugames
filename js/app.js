function alterarStatus(x) {
    // Seleciona o botão <a> dentro do elemento <li> com id game-x
    let botao = document.querySelector(`#game-${x} a`);
    
    // Seleciona a div que contém a imagem dentro do mesmo <li>
    let imagem = document.querySelector(`#game-${x} div`);

    // Verifica o texto atual do botão e alterna entre "Alugar" e "Devolver"
    if (botao.innerText === "Alugar") {
        botao.innerText = "Devolver"; // muda o texto para "Devolver"
    } else {
        botao.innerText = "Alugar"; // volta o texto para "Alugar"
    }

    // Alterna a classe CSS do botão
    // 'dashboard__item__button--return' pode mudar cor, estilo ou efeito visual
    botao.classList.toggle('dashboard__item__button--return');

    // Alterna a classe CSS da div da imagem
    // 'dashboard__item__img--rented' pode aplicar efeito visual como opacidade ou borda
    imagem.classList.toggle('dashboard__item__img--rented');
}