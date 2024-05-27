document.addEventListener('DOMContentLoaded', function() {
    const btnEstandar = document.createElement('button');
    btnEstandar.textContent = 'Diseño Estándar';
    btnEstandar.addEventListener('click', function() {
        document.querySelector('link[href="style_estandar.css"]').disabled = true;
        document.querySelector('link[href="style.css"]').disabled = false;
    });

    const btnAccesible = document.getElementById('btnAccesible');
    btnAccesible.textContent = 'Diseño Accesible';
    btnAccesible.addEventListener('click', function() {
        document.querySelector('link[href="style.css"]').disabled = true;
        document.querySelector('link[href="style_accesible.css"]').disabled = false;
    });

    document.body.insertBefore(btnAccesible, document.body.firstChild);
    document.body.insertBefore(btnEstandar, document.body.firstChild);
});
