const checkbox = document.getElementById('theme');

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                document.body.style.backgroundColor = 'black';
                document.getElementById('navegacion').style.backgroundColor = 'grey';
<<<<<<< HEAD
                document.getElementById('footer').style.color = 'white';
            } else {
                document.body.style.backgroundColor = '';
                document.getElementById('navegacion').style.backgroundColor = '';
                document.getElementById('footer').style.color = '';
=======
                document.getElementById('navegacion').style.backgroundColor = 'white';
            } else {
                document.body.style.backgroundColor = '';
                document.getElementById('navegacion').style.backgroundColor = '';
>>>>>>> a9624c13ff479e023fb4c6d299f046e36652fea4
            }
        });