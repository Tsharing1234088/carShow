let menu = document.querySelector('#mobile-menu');
document.querySelector('.nav-icon').onclick = () => {
    menu.classList.toggle('active');
    menu.style.backgroundColor="rgba(13, 13, 44, 0.2);"
    menu.style.opacity="0.6";
};

