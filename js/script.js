let menu = document.querySelectorAll('.aside__navegacao-item');
let submenu = document.querySelectorAll('.submenu');
let icon = document.querySelectorAll('.aside__navegacao-item-seta');

for (let i = 0; i <= menu.length; i++) {
    menu[i].addEventListener("click", function() {
        submenu[i].classList.toggle('none');
        icon[i].classList.toggle('aside__navegacao-item-seta-active');
    })
}