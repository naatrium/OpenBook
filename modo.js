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

   
  

  
