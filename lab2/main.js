const header = document.querySelector('header');
const container = document.querySelector('.container');
const footer = document.querySelector('footer');

header.addEventListener('click', () => {
    header.style.backgroundColor = header.style.backgroundColor === '#0077b6' ? '#004a73' : '#0077b6';
    alert('Cabeçalho!');
});

container.addEventListener('dblclick', (event) => {
    event.target.style.fontSize = '1.2em';
    alert('Duplo Clique');
});

footer.addEventListener('mouseover', () => {
    footer.style.color = 'red';
    footer.textContent = 'Obrigado por visitar Santa Cruz das Flores!';
});

footer.addEventListener('mouseout', () => {
    footer.style.color = '';
    footer.textContent = '© 2023 Vila de Santa Cruz das Flores - Açores';
});

document.addEventListener('keydown', (event) => {
    alert(`Você pressionou a tecla: ${event.key}`);
});
