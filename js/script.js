const checkbox = document.getElementById('theme');

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                document.body.style.backgroundColor = 'black';
                document.getElementById('navegacion').style.backgroundColor = 'grey';
                document.getElementById('navegacion').style.backgroundColor = 'white';
            } else {
                document.body.style.backgroundColor = '';
                document.getElementById('navegacion').style.backgroundColor = '';
            }
        });