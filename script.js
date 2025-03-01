function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let menuButton = document.getElementById('menuButton');
    
    if (menuMobile.classList.contains('open')) { 
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }

    menuButton.classList.toggle('clique');  // Alterna a classe 'clique' para alterar a cor do ícone
}
