
//logueo//
let n = ''
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => n=json);


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if (email === 'Consultoriospsp@gmail.com' && password === 'Espaciopsicope2024') {
            // Inicio de sesión valido
            Swal.fire({
                icon: 'success',
                title: '¡Inicio de sesión exitoso!',
                text: '¡BIENVENIDO A ESPACIO PSICOPEDAGOGICO!'
            }).then((result) => {
            // Muestra el contenido de la página principal
                document.getElementById('loginSection').style.display = 'none';
                document.getElementById('contentSection').style.display = 'block';
                if (result.isConfirmed) {
                }
            });
        } else {
            // Mensaje de error cuando no coinciden los datos
            Swal.fire({
                icon: 'error',
                title: '¡Error!',
                text: 'El correo electrónico o la contraseña son incorrectos'
            });
        }
    });
});

if (localStorage) {
    console.log(localStorage.getItem)
}



//Agenda de turnos pacientes 

document.getElementById("buscarPaciente").addEventListener("click", function () {
    let nombrePaciente = document.getElementById("nombrePacienteInput").value;

    let n = localStorage.getItem(nombrePaciente)
    console.log(n)

});


//Variables para registrar datos de las sesiones

let fecha = document.getElementById("fecha");
let paciente = document.getElementById("paciente");
let instrumentos = document.getElementById("instrumentos");
let intervenciones = document.getElementById("intervenciones");
let desempenio = document.getElementById("desempenio");
let conclusiones = document.getElementById("conclusiones");


// Array para almacenar turnos
let turnos = [];

// Función para agregar un turno
function agregarTurno(nombre, fecha, hora, terapeuta) {
    turnos.push({ nombre, fecha, hora, terapeuta });
    console.log("Turno Agendado:");
    console.log(turnos[turnos.length - 1]);
}





// Función para buscar paciente
function buscarPaciente() {
    const nombre = document.getElementById('buscar-nombre').value;
    const paciente = turnos.find(turno => turno.nombre === nombre);
    if (paciente) {
        document.getElementById('info-paciente').innerHTML = `
            <p>Nombre: ${paciente.nombre}</p>
            <p>Fecha: ${paciente.fecha}</p>
            <p>Hora: ${paciente.hora}</p>
            <p>Terapeuta: ${paciente.terapeuta}</p>
        `;
    } else {
        document.getElementById('info-paciente').innerHTML = "<p>Paciente no encontrado</p>";
    }
}



// Event listener para el formulario de agendar turno
document.getElementById('formulario-turno').addEventListener('submit', function (event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const terapeuta = document.getElementById('terapeuta').value;
    agregarTurno(nombre, fecha, hora, terapeuta);
    this.reset();
});





//Calculadora para facturar sesiones

document.getElementById("calcularTotal").addEventListener("click", function () {
    let nombrePaciente = document.getElementById("nombrePaciente").value;
    let mes = document.getElementById("mes").value;
    let cantidadTurnos = parseInt(document.getElementById("cantidadTurnos").value);
    let valorSesion = parseInt(document.getElementById("valorSesion").value);

    let total = cantidadTurnos * valorSesion;

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <p><strong>Nombre del paciente:</strong> ${nombrePaciente}</p>
        <p><strong>Mes:</strong> ${mes}</p>
        <p><strong>Cantidad de turnos:</strong> ${cantidadTurnos}</p>
        <p><strong>Total a cobrar:</strong> $${total}</p>
    `;

    let arr = [{ "nombre": nombrePaciente, "mes": mes, "cantidad": cantidadTurnos, "total": total }]

    localStorage.setItem(nombrePaciente, JSON.stringify(arr))
});



document.getElementById("guardarDescripcion").addEventListener("click", function () {
    fecha.value;
    paciente.value;
    instrumentos.valuei;
    intervenciones.value
    desempenio.value;
    conclusiones.value;
    console.log(fecha.value);

    let descripcion = `
        <p>Fecha:${fecha}</p>
        <p>Paciente: ${paciente}</p>
        <p>Instrumentos utilizados: ${instrumentos}</p>
        <p>Intervenciones: ${intervenciones}</p>
        <p>Desempeño de la sesión:</p>
        <p>${desempenio}</p>
        <p><strong>Conclusiones de la sesión:</strong></p>
        <p>${conclusiones}</p>
    `;

    let resultadoSesion = document.getElementById("resultadoSesion");
    resultadoSesion.innerHTML = descripcion;
});



