const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar ul');

mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
