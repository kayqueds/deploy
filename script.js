document.getElementById('btn1').addEventListener('click', function() {
    // Seleciona o elemento onde o conteúdo será exibido
    const res = document.getElementById('res');
    
    // Limpa o conteúdo anterior
    res.innerHTML = '';

    // titulo 01
    const titulo = document.createElement('h2');
    titulo.textContent = 'Spring Trap';
    titulo.style.color = '#e63946';
    titulo.style.textAlign = 'center';

    // imagem 1
    const imagem = document.createElement('img');
    imagem.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3626cf06-7cf4-4dba-8549-b343b3db979e/dg8axdi-7f1d6e28-6d58-417a-8110-73803763c89d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM2MjZjZjA2LTdjZjQtNGRiYS04NTQ5LWIzNDNiM2RiOTc5ZVwvZGc4YXhkaS03ZjFkNmUyOC02ZDU4LTQxN2EtODExMC03MzgwMzc2M2M4OWQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.n6qxyZvb2SpvPb62y2VKWJl35EYvpdRlZ5h3h6h_FQY'; // URL da imagem de exemplo
    imagem.alt = 'Fnaf 01';
    imagem.style.width = '50%';
    imagem.style.borderRadius = '10%'
    imagem.style.marginLeft = '25%'
    
    // Adiciona o título e a imagem ao contêiner 'res'
    res.appendChild(titulo);
    res.appendChild(imagem);
});
