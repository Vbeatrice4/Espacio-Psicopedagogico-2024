

//Iniciar sesion en la plataforma

let usuarioAutorizado = "Espacio Psicopedagogico";
let passwordAutorizado = "Espaciopsicope2024";
let usuarioIngresado = prompt("Ingrese su nombre de usuario:");
let passwordIngresado = prompt("Ingrese su contraseña:");

if (usuarioIngresado === usuarioAutorizado && passwordIngresado === passwordAutorizado) {
    alert("Los datos son correctos, puede ingresar");
    localStorage.setItem
} else {
    alert("Los datos son incorrectos");
}


//Intento de calculadora para facturar sesiones

document.getElementById("buscarPaciente").addEventListener("click", function () {
    let nombrePaciente = document.getElementById("nombrePacienteInput").value;
    mostrarDetallesPaciente(nombrePaciente);
});

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
});

//Funcion para registrar datos de las sesiones

document.getElementById("guardarDescripcion").addEventListener("click", function () {
    let fecha = document.getElementById("fecha").value;
    let paciente = document.getElementById("paciente").value;
    let instrumentos = document.getElementById("instrumentos").value;
    let intervenciones = document.getElementById("intervenciones").value;
    let desempenio = document.getElementById("desempenio").value;
    let conclusiones = document.getElementById("conclusiones").value;

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

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = descripcion;
});

fecha.addEventListener("input", () => {
    console.log(fecha);
})

paciente.addEventListener("input", () => {
    console.log(paciente.value);
})

instrumentos.addEventListener("input", () => {
    console.log(instrumento.values);
})

intervenciones.addEventListener("input", () => {
    console.log(intervenciones.value);
})

desempenio.addEventListener("input", () => {
    console.log(desempenio.value);
})

conclusiones.addEventListener("input", () => {
    console.log(conclusiones.value);
})

