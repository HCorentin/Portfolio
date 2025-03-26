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
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]') , list.classList.add('opacity-100'), list.classList.remove('absolute')) : (e.name = "menu" , list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'), list.classList.add('absolute'))
}