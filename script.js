window.alert("O menu e as opções de categorias estão diferentes, Gabi. Clique nas imagens do menu e da setinha para baixo (localizadas no canto esquerdo do header) para visualizar. Dentro do menu da setinha, é possível clicar em 'Categorias', que abrirá um menu secundário.")

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu-escondido');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
    overlay.classList.toggle('show');
    document.body.style.backgroundColor = menu.classList.contains('show') ? 'rgba(0, 0, 0, 0.3)' : 'white';
});

overlay.addEventListener('click', () => {
    menu.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.backgroundColor = 'white';
});

const maisOpcoes = document.getElementById('maisopcoes');
const divOpcoes = document.querySelector('.divopcoes');

maisOpcoes.addEventListener('click', () => {
    if (divOpcoes.style.display === 'block') {
    divOpcoes.style.display = 'none';
    } else {
    divOpcoes.style.display = 'block';
    }
});

const abreCategoria = document.getElementById('abrecategoria');
    const divCategoria = document.querySelector('.divcategoria');

    abreCategoria.addEventListener('click', () => {
      if (divCategoria.style.display === 'block') {
        divCategoria.style.display = 'none';
      } else {
        divCategoria.style.display = 'block';
      }
    });