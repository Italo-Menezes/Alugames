# 🎮 Dashboard de Jogos - Sistema de Aluguel

[![Versão](https://img.shields.io/badge/version-1.0.0-blue)]()
[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-orange)]()
[![Licença](https://img.shields.io/badge/licença-MIT-green)]()

---

## 📝 Descrição

Este projeto é um **dashboard de jogos** com sistema de aluguel.
O usuário pode **alugar ou devolver** jogos clicando nos botões correspondentes.
O sistema **alterna o texto do botão** e **aplica efeitos visuais na imagem do jogo** para indicar o status.

---

## 💻 Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (ES6)

---

## ⚙️ Funcionalidades

* Alterna o texto do botão entre “Alugar” e “Devolver”.
* Alterna a classe do botão para mudar visualmente o estado.
* Alterna a classe da imagem do jogo para indicar que está alugado.
* Funciona para qualquer quantidade de jogos no dashboard.

---

## 🛠️ Como Usar

1. Abra o arquivo `index.html` no navegador.
2. Clique no botão “Alugar” do jogo desejado.
3. O botão alternará para “Devolver” e a imagem receberá o efeito visual.
4. Clique novamente para devolver o jogo, revertendo o texto e a imagem.

---

## 📌 Estrutura do Projeto

```
/dashboard-jogos
│
├── index.html           # Estrutura HTML do dashboard
├── style.css            # Estilo CSS (botões e imagens)
└── script.js            # Funções JS para alternar status de aluguel
```

---

## 🔧 Código JavaScript Principal

```javascript
function alterarStatus(x) {
    // Seleciona o botão <a> dentro do elemento <li> com id game-x
    let botao = document.querySelector(`#game-${x} a`);
    
    // Seleciona a div que contém a imagem dentro do mesmo <li>
    let imagem = document.querySelector(`#game-${x} div`);

    // Alterna o texto do botão entre "Alugar" e "Devolver"
    if (botao.innerText === "Alugar") {
        botao.innerText = "Devolver";
    } else {
        botao.innerText = "Alugar";
    }

    // Alterna a classe CSS do botão para indicar status
    botao.classList.toggle('dashboard__item__button--return');

    // Alterna a classe CSS da imagem para efeito visual de alugado
    imagem.classList.toggle('dashboard__item__img--rented');
}
```

---

## ✅ Contribuição

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Faça commits (`git commit -m "Adiciona nova funcionalidade"`)
4. Envie para o branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---
