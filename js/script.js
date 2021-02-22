(function () {
    const header = document.querySelector('.header');
    window.onscroll=() => {
        if(window.pageYOffset>30) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');


        }
    };
}());

(function () {
    const burgerItem=document.querySelector('.header_burger-menu');
        const menu = document.querySelector('.header_nav');
        const menuCloseItem = document.querySelector ('.header_nav-close');
        burgerItem.addEventListener('click', () => {
            menu.classList.add('header_nav_active');
        });
        menuCloseItem.addEventListener('click', () => {
            menu.classList.remove('header_nav_active');
        });  
    }());
