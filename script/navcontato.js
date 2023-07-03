function showMenu(toggleId, navId) {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {
        // Adicionar ou remover a classe 'show-menu' do elemento nav
        nav.classList.toggle('show-menu');

        // Adicionar ou remover a classe 'show-icon' do elemento toggle
        toggle.classList.toggle('show-icon');
    });
}

showMenu('nav-toggle', 'nav-menu');
