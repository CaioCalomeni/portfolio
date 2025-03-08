function menuShow() { // Função para abrir e fechar o menu mobile
    let menuMobile = document.querySelector('.mobile-menu');
    let menuButton = document.getElementById('menuButton');
    
    if (menuMobile.classList.contains('open')) { 
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }

    menuButton.classList.toggle('clique');  // Alterna a classe 'clique' para alterar a cor do ícone
}

// Adiciona o evento de entrada para formatar o campo de telefone
document.getElementById('telefone').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ')' + x[2] + ' ' + x[3] + (x[4] ? '-' + x[4] : '');
});