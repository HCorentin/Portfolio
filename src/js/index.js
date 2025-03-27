/*DIAPO*/
$(".image").click(function () {
    $(".image").removeClass("active");
    $(this).addClass("active");
})

/*DARK MODE*/
function switchDark() {
    const html = document.documentElement;
    const icon = document.querySelector('.icon');

    html.classList.toggle('dark');

    if(html.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

/*MENU*/
function Menu(e) {
    const list = document.getElementById('nav-list');

    // Vérifie si l'icône a la classe `fa-bars`
    const isMenuOpen = e.classList.contains('fa-bars');

    // Basculer les classes de l'icône
    e.classList.toggle('fa-bars', !isMenuOpen);
    e.classList.toggle('fa-times', isMenuOpen);

    // Basculer les classes du menu
    list.classList.toggle('menu-open', isMenuOpen);
    list.classList.toggle('menu-closed', !isMenuOpen);
}