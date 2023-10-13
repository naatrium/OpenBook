// Elementos DOM relevantes
const searchInput = document.getElementById('searchInput');
const bookContainers = document.querySelectorAll('.booksearch');

// Evento de escuta para a entrada do usuário
searchInput.addEventListener('keyup', () => {
  const searchTerm = searchInput.value.toLowerCase();

  // Iterar por todos os elementos de livro
  bookContainers.forEach((bookContainer) => {
    const title = bookContainer.querySelector('h2').textContent.toLowerCase();
    const shouldShow = title.includes(searchTerm);

    // Mostrar ou ocultar o elemento do livro com base na correspondência da pesquisa
    if (shouldShow) {
      bookContainer.style.display = 'block';
    } else {
      bookContainer.style.display = 'none';
    }
  });
});
