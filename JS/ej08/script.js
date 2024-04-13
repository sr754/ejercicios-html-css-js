document.addEventListener('DOMContentLoaded', function() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    console.table(usuarios); 

    let tbody = document.querySelector('table tbody');
    usuarios.forEach(usuario => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${usuario.nombre}</td>
            <td>${usuario.apellidos}</td>
            <td>${usuario.tipo_via} ${usuario.nombre_via}, ${usuario.codigo_postal}, ${usuario.ciudad}, ${usuario.provincia}, ${usuario.pais}</td>
            <td>${usuario.fecha}</td>
            <td>${usuario.telefono}</td>
            <td>${usuario.email}</td>
            <td><a href="/JS/ej07/index.html?id=${usuario.id}">Ver detalle</a></td>
        `;
        tbody.appendChild(tr);
    });
});
