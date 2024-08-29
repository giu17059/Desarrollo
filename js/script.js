const checkbox = document.getElementById('toggle');

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        document.body.style.backgroundColor = 'black';
        document.getElementById('navegacion').style.backgroundColor = 'grey';
        document.getElementById('footer').style.color = 'white';
    } else {
        document.body.style.backgroundColor = ' #86f5f8';
        document.getElementById('navegacion').style.backgroundColor = '#09db68';
        document.getElementById('footer').style.color = '';
    }
});
checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
window.addEventListener('load', function () {
    const darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'enabled') {
        checkbox.checked = true;
        document.body.classList.add('body_oscuro');
        document.getElementById('navegacion').classList.add('navegacion_oscuro');
        document.getElementById('footer').classList.add('footer_oscuro');
    }
});