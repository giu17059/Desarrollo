const checkbox = document.getElementById('toggle');

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                document.body.style.backgroundColor = 'black';
                document.getElementById('navegacion').style.backgroundColor = 'grey';
                document.getElementById('footer').style.color = 'white';
            } else {
                document.body.style.backgroundColor = ' #86f5f8';
                document.getElementById('navegacion').style.backgroundColor = '#4fd5f0';
                document.getElementById('footer').style.color = '';
            }
        });