function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  var imgAtual = "componentes/imagens/solbranco.png";
  var imgAnterior = "componentes/imagens/modoescuro.png";
  function mudarimg (){
    
    document.getElementById('imagem').src= imgAtual;
    let aux = imgAtual;
    imgAtual = imgAnterior;
    imgAnterior = aux;

  }

  var iconeAtual = "componentes/imagens/ilclaro.png";
  var iconeAnterior = "componentes/imagens/il.png";

  function mudaricone(){
    document.getElementById('mudaricone').src= iconeAtual;
    let aux = iconeAtual;
    iconeAtual = iconeAnterior;
    iconeAnterior = aux;
  }

  var starAtual = "componentes/imagens/starescura.png";
  var starAnterior = "componentes/imagens/starclara.png";


    
  function mudarestrela() {
    // Obtém todos os elementos com a classe 'mudarestrela'
    const elementos = document.getElementsByClassName('mudarestrela');
    
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].src = starAtual;
    }

    let aux = starAtual;
    starAtual = starAnterior;
    starAnterior = aux;
}

// Referenciamos os botões e conteúdos com as classes correspondentes
const toggleButtons = document.querySelectorAll(".toggleButton");
const conteudos = document.querySelectorAll(".conteudo");

// Adicionamos um ouvinte de evento de clique a cada botão
toggleButtons.forEach((toggleButton, index) => {
  toggleButton.addEventListener("click", function() {
    // Verificamos o estado de exibição do conteúdo correspondente
    if (conteudos[index].style.display === "none" || conteudos[index].style.display === "") {
      // Se estiver oculto, mostramos
      conteudos[index].style.display = "block";
    } else {
      // Se estiver visível, ocultamos
      conteudos[index].style.display = "none";
    }
  });
});



var botoesSalvar = document.querySelectorAll(".botaoSalvar");

for (var i = 0; i < botoesSalvar.length; i++) {
    botoesSalvar[i].addEventListener("click", function() {
        var resenhaInput = this.parentElement.querySelector(".resenha");
        var resenha = resenhaInput.value;

        if (resenha.trim() === "") {
            alert("Por favor, escreva uma resenha antes de salvar.");
            return;
        }

        var paragrafo = document.createElement("p");
        paragrafo.textContent = resenha;

        var botaoExcluir = document.createElement("button");
        botaoExcluir.innerHTML = "&#10006;";
        botaoExcluir.classList.add("botaoExcluir");
        botaoExcluir.addEventListener("click", function() {
            paragrafo.remove();
            botaoExcluir.remove();
        });

        var divResenha = document.createElement("div");
        divResenha.classList.add("resenha");
        divResenha.appendChild(paragrafo);
        divResenha.appendChild(botaoExcluir);

        this.parentElement.querySelector(".resenhasSalvas").appendChild(divResenha);

        resenhaInput.value = ""; // Limpa a área de texto
    });
}
