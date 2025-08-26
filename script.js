document.querySelector('.prev-btn').addEventListener('click', () => {
    const carousel = document.querySelector('.carousel-container');
    carousel.scrollBy({
        left: -300, // Ajuste conforme a largura do item
        behavior: 'smooth' // Faz a rolagem suave
    });
});

document.querySelector('.next-btn').addEventListener('click', () => {
    const carousel = document.querySelector('.carousel-container');
    carousel.scrollBy({
        left: 300, // Ajuste conforme a largura do item
        behavior: 'smooth' // Faz a rolagem suave
    });
});