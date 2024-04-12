document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('registroForm');
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault(); 

        const contraseña = document.getElementById('contrasena').value;
        const confirmarContraseña = document.getElementById('repetir_contrasena').value;

        if (contraseña === confirmarContraseña) {
            console.log('Las contraseñas coinciden.');

            let datosUsuario = {};
            const datosFormulario = new FormData(formulario);
            console.log('Datos del formulario:');

            for (let [clave, valor] of datosFormulario.entries()) {
                console.log(`${clave}: ${valor}`); 
                if (!(document.getElementById(clave) instanceof HTMLInputElement && document.getElementById(clave).type === 'file')) {
                    datosUsuario[clave] = valor; 
                }
            }

            guardarEnLocalStorage(datosUsuario);
            console.log('Usuario registrado con éxito.');
        } else {
            console.log('Las contraseñas no coinciden.');
        }
    });
});

function guardarEnLocalStorage(datosUsuario) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    datosUsuario.id = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
    usuarios.push(datosUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}
