document.querySelectorAll('a[href^="#"]').forEach(anchor => { //Função para rolar a tela suavemente até os IDS selecionados
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function alterarModo() { //Função para alterar entre o Modo Claro e Modo Escuro
    var elementoModo = document.getElementById('modo-claro-escuro');
    var tamAtual = window.innerWidth;

    if (elementoModo.style.justifyContent == 'flex-start') {
        elementoModo.style.justifyContent = 'flex-end';

        document.querySelector('header').style.boxShadow = '0 30px 50px rgba(255, 255, 255, 0.195)';
        document.querySelector('body').style.backgroundColor = 'black';
        document.getElementById('secao-superior').style.background = 'url(imagens/fundo-header-dark.png)';
        document.getElementById('modo-claro-escuro').style.borderColor = 'white';
        document.getElementById('modo').style.borderColor = 'white';
        document.getElementById('modo').style.background = 'white';
        document.getElementById('objetivos').style.borderColor = 'white';
        document.getElementById('objetivos').style.boxShadow = '0 10px 50px rgba(255, 255, 255, 0.495)';
        document.getElementById('info-grafico').style.backgroundColor = 'rgba(0, 0, 0, 0.856)';
        document.getElementById('info-grafico').style.borderColor = 'white';
        document.getElementById('container-utilitarios').style.backgroundColor = 'black';
        document.getElementById('box-utilitarios').style.backgroundColor = 'white';
        document.getElementById('imagem-seta-esquerda').src = 'imagens/seta-esquerda-2.png';
        document.getElementById('imagem-seta-direita').src = 'imagens/seta-direita-2.png';
        document.getElementById('funcao-utilitarios').style.backgroundColor = 'rgba(200, 200, 200, 3)';

        var elementos = document.querySelectorAll('a, li, h1, p, h3');

        elementos.forEach(function (elemento) {
            elemento.style.color = 'white';
            elemento.style.borderColor = 'white';
        });

        if (tamAtual > 1000) {
            document.getElementById('utilitarios').style.background = 'url(imagens/fundo-utilitarios-dark.png) no-repeat bottom left';
        } else {
            document.getElementById('utilitarios').style.background = 'none';
        }

    } else {
        elementoModo.style.justifyContent = 'flex-start';

        document.querySelector('header').style.boxShadow = '0 30px 50px rgba(0, 0, 0, 0.195)';
        document.querySelector('body').style.backgroundColor = 'white';
        document.getElementById('secao-superior').style.background = 'url(imagens/fundo-header.png)';
        document.getElementById('modo-claro-escuro').style.borderColor = 'black';
        document.getElementById('modo').style.borderColor = 'black';
        document.getElementById('modo').style.background = 'black';
        document.getElementById('objetivos').style.borderColor = 'black';
        document.getElementById('objetivos').style.boxShadow = '0 10px 50px rgba(0, 0, 0, 0.495)';
        document.getElementById('info-grafico').style.backgroundColor = 'rgba(255, 255, 255, 0.856)';
        document.getElementById('info-grafico').style.borderColor = 'black';
        document.getElementById('container-utilitarios').style.backgroundColor = 'white';
        document.getElementById('imagem-seta-esquerda').src = 'imagens/seta-esquerda.png';
        document.getElementById('imagem-seta-direita').src = 'imagens/seta-direita.png';
        document.getElementById('funcao-utilitarios').style.backgroundColor = 'rgba(135, 135, 135, 3)';

        var elementos = document.querySelectorAll('a, li, h1, p, h3');

        elementos.forEach(function (elemento) {
            elemento.style.color = 'black';
            elemento.style.borderColor = 'black';
        });

        if (tamAtual > 700) {
            document.getElementById('utilitarios').style.background = 'url(imagens/fundo-utilitarios.png) no-repeat bottom left';
        } else {
            document.getElementById('utilitarios').style.background = 'none';
        }
    }
}

function virarContainer() { //Função para realizar o giro de 180º do card
    var card = document.querySelector('.card');

    card.classList.toggle('back');
}

function adicionarTarefa() { //Função para adicionar uma nova li a lista de objetivos
    var novaTarefa = document.getElementById('nova-tarefa').value;
    if (novaTarefa.trim() !== '') {
        var listaObjetivos = document.getElementById('historico-objetivos').getElementsByTagName('ol')[0];
        var novaLi = document.createElement('li');
        novaLi.appendChild(document.createTextNode(novaTarefa));
        listaObjetivos.appendChild(novaLi);
        novaLi.style.background = 'url(imagens/circulo-objetivo.png) no-repeat right'
        document.getElementById('nova-tarefa').value = '';
    }
}

var imagemAtual = 1;

function trocarImagem(direcao) { //Função para alternar entre as imagens e textos dos utilitários

    imagemAtual += direcao;

    if(imagemAtual < 1) {
        imagemAtual = 5;
    } else if (imagemAtual > 5) {
        imagemAtual = 1;
    }

    document.getElementById('imagem').src = 'imagens/utilitario-' + imagemAtual + '.png';

    var utilitario1 = document.getElementById('funcao-1').innerHTML;
    var utilitario2 = document.getElementById('funcao-2').innerHTML;
    var utilitario3 = document.getElementById('funcao-3').innerHTML;
    var utilitario4 = document.getElementById('funcao-4').innerHTML;
    var utilitario5 = document.getElementById('funcao-5').innerHTML;

    if(imagemAtual == 1) {
        document.getElementById('funcao').innerHTML = utilitario1;
    } else if(imagemAtual == 2) {
        document.getElementById('funcao').innerHTML = utilitario2;
    } else if(imagemAtual == 3) {
        document.getElementById('funcao').innerHTML = utilitario3;
    } else if(imagemAtual == 4) {
        document.getElementById('funcao').innerHTML = utilitario4;
    } else if(imagemAtual == 5) {
        document.getElementById('funcao').innerHTML = utilitario5;
    }
}