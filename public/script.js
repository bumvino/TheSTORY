document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const logo = document.getElementById('site-logo');

    const toggleHeaderBackground = () => {
        if (window.scrollY > 10) {
            header.classList.remove('transparent');
            header.classList.add('scrolled');
            logo.src = '/logo-dark.png';
        } else {
            header.classList.remove('scrolled');
            header.classList.add('transparent');
            logo.src = '/logo-light.png';
        }
    };

    // Only run logo change if on homepage
    if (document.body.classList.contains('home-page')) {
        toggleHeaderBackground(); // Initial state
        window.addEventListener('scroll', toggleHeaderBackground);
    }
});