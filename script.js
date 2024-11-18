document.getElementById('btn1').addEventListener('click', function() {
    // Seleciona o elemento onde o conteúdo será exibido
    const res = document.getElementById('res');
    const texto = document.getElementById('historia');

    // Limpa o conteúdo anterior
    res.innerHTML = '';

    // titulo 01
    const titulo = document.createElement('h2');
    titulo.textContent = 'Spring Trap';
    titulo.style.color = '#e63946';
    titulo.style.textAlign = 'center';

    // imagem 1
    const imagem = document.createElement('img');
    imagem.src = 'https://i.pinimg.com/originals/59/2f/b2/592fb237ae9e1713a26864c980646d23.gif'; // URL da imagem de exemplo
    imagem.classList.add('responsive-image');

    // Verifica se o elemento de texto já existe
    let historia = texto.querySelector('.textoHistoria');
    if (!historia) {
        historia = document.createElement('p');
        historia.classList.add('textoHistoria');
        texto.appendChild(historia);
    }
    historia.textContent = 'Springtrap Armadilha de molas em português é o principal antagonista e o único animatrônico verdadeiro em Five Nights at Freddys 3. Ele é o único inimigo que pode dar um Game Over ao jogador, enquanto os animatrônicos fantasmas apenas usam seus jumpscares para escurecer o campo de visão do jogador, estragar o sistema de ventilação ou de áudio, assustá-lo e atrapalhá-lo.';

    // Adiciona o título e a imagem ao contêiner 'res'
    res.appendChild(titulo);
    res.appendChild(imagem);
});

document.getElementById('btn2').addEventListener('click', function() {
    // Seleciona o elemento onde o conteúdo será exibido
    const res = document.getElementById('res');
    const texto = document.getElementById('historia');

    // Limpa o conteúdo anterior
    res.innerHTML = '';

    // titulo 01
    const titulo = document.createElement('h2');
    titulo.textContent = 'Freddy';
    titulo.style.color = '#e63946';
    titulo.style.textAlign = 'center';

    // imagem 3
    const imagem = document.createElement('img');
    imagem.src = 'http://orig10.deviantart.net/0d68/f/2014/285/8/6/dancing_freddy_by_blaze_troymisti1-d82k59n.gif'; // URL da imagem de exemplo
    imagem.classList.add('responsive-image');

    // Verifica se o elemento de texto já existe
    let historia = texto.querySelector('.textoHistoria');
    if (!historia) {
        historia = document.createElement('p');
        historia.classList.add('textoHistoria');
        texto.appendChild(historia);
    }
    historia.textContent = 'Freddy Fazbear é o principal antagonista de Five Nights at Freddys. Ele é um urso animatrônico que é deixado no modo livre durante a noite, fazendo ele passear pela Pizzaria Freddy Fazbear juntamente com os outros animatrônicos até as 6:00 da manhã. Em seu comportamento noturno, ele força qualquer humano que estiver após 12:00 na pizzaria a entrar em uma fantasia de Freddy Fazbear, assim como os outros animatrônicos, resultando a morte da pessoa.';

    // Adiciona o título e a imagem ao contêiner 'res'
    res.appendChild(titulo);
    res.appendChild(imagem);
});


document.getElementById('btn3').addEventListener('click', function() {
    // Seleciona o elemento onde o conteúdo será exibido
    const res = document.getElementById('res');
    const texto = document.getElementById('historia');

    // Limpa o conteúdo anterior
    res.innerHTML = '';

    // titulo 01
    const titulo = document.createElement('h2');
    titulo.textContent = 'Bonnie';
    titulo.style.color = '#e63946';
    titulo.style.textAlign = 'center';

    // imagem 3
    const imagem = document.createElement('img');
    imagem.src = 'https://i.redd.it/r87il8mo1y461.gif'; // URL da imagem de exemplo
    imagem.classList.add('responsive-image');

    // Verifica se o elemento de texto já existe
    let historia = texto.querySelector('.textoHistoria');
    if (!historia) {
        historia = document.createElement('p');
        historia.classList.add('textoHistoria');
        texto.appendChild(historia);
    }
    historia.textContent = 'Bonnie é um animatrônico coelho de olhos marrons que possui orelhas articuladas que podem dobrar para frente, e usa uma gravata borboleta vermelha. No Palco, ele segura uma guitarra vermelha. Excluindo a cabeça e a cor, o corpo de Bonnie é semelhante ao de Freddy. Esta versão de Bonnie, assim como todas as versões dos animatrônicos do primeiro jogo, parece não ter dentes em sua mandíbula superior.';

    // Adiciona o título e a imagem ao contêiner 'res'
    res.appendChild(titulo);
    res.appendChild(imagem);
});
