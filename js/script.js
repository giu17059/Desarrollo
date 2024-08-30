const checkbox = document.getElementById('toggle');

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        document.body.classList.add('body_oscuro');
        document.querySelector('footer').classList.add('footer_oscuro');
        document.getElementById('navegacion').classList.add('navegacion_oscuro');

        localStorage.setItem('dark-mode', 'enabled');
    } else {
        document.body.classList.remove('body_oscuro');
        document.querySelector('footer').classList.remove('footer_oscuro');
        document.getElementById('navegacion').classList.remove('navegacion_oscuro');

        localStorage.setItem('dark-mode', 'disabled');
    }
});

window.addEventListener('load', function () {
    const darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'enabled') {
        checkbox.checked = true;
        document.body.classList.add('body_oscuro');
        document.querySelector('footer').classList.add('footer_oscuro');
        document.getElementById('navegacion').classList.add('navegacion_oscuro');
    }
});
