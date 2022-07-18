/*DIAPO*/
$(".image").click(function () {
    $(".image").removeClass("active");
    $(this).addClass("active");
})

/*DARK MODE*/
function switchDark() {
    let className = document.querySelector('html').className;
    document.querySelector('html').className = className === 'dark' ? '' : 'dark';
}

/*MENU*/
function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]') , list.classList.add('opacity-100'), list.classList.remove('absolute')) : (e.name = "menu" , list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'), list.classList.add('absolute'))
}

/*ANIMATIONS*/
/*let myText = 'Bienvenue sur mon portfolio!';
let myArray = myText.split("");
let loopTimer;

function frameLooper() {
    if (myArray.length > 0) {
        document.getElementById("bienvenue").innerHTML += myArray.shift();
    }
    loopTimer = setTimeout('frameLooper()', 70);
}

frameLooper();*/
