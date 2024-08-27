const checkbox = document.getElementById('theme');

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                document.body.style.backgroundColor = 'black';
                document.getElementById('navegacion').style.backgroundColor = 'grey';
                document.getElementById('footer').style.color = 'white';
            } else {
                document.body.style.backgroundColor = '';
                document.getElementById('navegacion').style.backgroundColor = '';
                document.getElementById('footer').style.color = '';
            }
        });