// seta direita e esquerda
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.produtos_destaque');
    const setaEsquerda = document.getElementById('seta-esquerda');
    const setaDireita = document.getElementById('seta-direita');

    setaEsquerda.addEventListener('click', function() {
        container.scrollBy({ left: -760, behavior: 'smooth' });
    });

    setaDireita.addEventListener('click', function() {
        container.scrollBy({ left: 760, behavior: 'smooth' });
    });
});

// todas as categorias visibilidade
document.addEventListener('DOMContentLoaded', function() {
    const btnCategorias = document.getElementById('btn-categorias');
    const outras = document.querySelector('.outras');

    btnCategorias.addEventListener('click', function(e) {
        e.preventDefault();
        outras.classList.toggle('ativa');
    });
});

// dark mode
const botao = document.getElementById('toggle-theme');
const elementos = [
  document.body,
  document.querySelector('footer'),
  document.querySelector('.barra'),
  document.querySelector('.cabecalho'),
  document.querySelector('#campo-pesquisa'),
  document.querySelector('.categorias'),
  document.querySelector('.destaque'),
  document.querySelector('.historico'),
  document.querySelector('#sugestoes'),
  document.querySelector('.container'),
  document.querySelector('.descricao'),
  document.querySelector('.avaliacao'),
  document.querySelector('.container-carrinho'),
  document.querySelector('.detalhes-compra'),
  document.querySelector('.box'),
  document.querySelector('.resumo-e-botao'),
  document.querySelector('.boxes'),
  document.querySelector('.container-faq'),
  document.querySelector('.assistencia'),
  document.querySelector('.contato'),
  document.querySelector('.container-login'),
  document.querySelector('.social-text'),
  document.querySelector('.flexbox'),
];

// Função para aplicar ou remover o modo escuro
function aplicarTemaEscuro(ativar) {
  elementos.forEach(el => {
    if (!el) return; // Garante que o elemento existe
    el.classList.toggle('dark-mode', ativar);
  });
}

// Ao carregar a página: aplica o tema salvo
document.addEventListener('DOMContentLoaded', () => {
  const temaSalvo = localStorage.getItem('tema');
  aplicarTemaEscuro(temaSalvo === 'escuro');
});

// Quando clicar no botão: alterna tema e salva
botao.addEventListener('click', () => {
  const estaAtivo = document.body.classList.toggle('dark-mode');
  elementos.slice(1).forEach(el => el?.classList.toggle('dark-mode'));
  localStorage.setItem('tema', estaAtivo ? 'escuro' : 'claro');
});

// Abrir barra de sugestões ao digitar no input
const input = document.getElementById("campo-pesquisa");
const sugestoes = document.getElementById("sugestoes");

input.addEventListener("input", () => {
  if (input.value.length > 0) {
    sugestoes.style.display = "block";
    // aqui você adicionaria sugestões dinamicamente
  } else {
    sugestoes.style.display = "none";
  }
});

// redirecionador

document.getElementById('mais-unidade').addEventListener('click', function () {
  window.location.href = 'carrinhorunner2unidades.html'; 
});
