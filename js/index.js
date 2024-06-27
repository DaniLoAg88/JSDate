let fecha = new Date();
let salida = document.querySelector("#salida");
let intervalID = 0; //La utilizaremos para crear un intervalo que se actualize cada x segundos

window.onload = function(){
    document.querySelector("#fechaHoy").addEventListener("click", mostrarFechaHoy);
    document.querySelector("#diaHoy").addEventListener("click", mostrarDiaHoy);
    document.querySelector("#mesActual").addEventListener("click", mostrarMesActual);
    document.querySelector("#anioActual").addEventListener("click", mostrarAnioActual);
    document.querySelector("#fechaActual").addEventListener("click", mostrarFechaCompleta);
    document.querySelector("#horaActual").addEventListener("click", mostrarHoraActual);
}

function mostrarFechaHoy() {
    clearInterval(intervalID);
    salida.textContent = fecha.toLocaleDateString(); //Muestra fecha en formato local
}

function mostrarDiaHoy() {
    clearInterval(intervalID);
    salida.textContent = "Hoy es " + fecha.getDate(); //Muestra el día en número
}

function mostrarMesActual() {
    clearInterval(intervalID);
    salida.textContent = "Estamos en el mes " + (fecha.getMonth() + 1); //Muestra el mes en número (Empieza en 0)
}

function mostrarAnioActual() {
    clearInterval(intervalID);
    salida.textContent = "Estamos en el año " + fecha.getFullYear(); //Muestra el año en número
}

function mostrarHoraActual() {
    //Creamos el intervalo que se actualiza cada x segundos(lo especificamos al final)
    intervalID = setInterval(function(){
        let now = new Date(); //Tiene que volver a leer el date cada vez que entre
        salida.textContent = now.toLocaleTimeString();
    }, 1000) //Milisegundos (1 segundo)
}

function mostrarFechaCompleta() {
    clearInterval(intervalID);
    salida.textContent = "La fecha de hoy es " + fecha.toLocaleString("es-ES", 
    {weekday:"long", //Día de la semana en letras
    year:"numeric", //Año en número
    month:"long", //Mes en número
    day:"numeric"}).toUpperCase(); //Día en número y a todo el formato de la fecha lo pasamos a mayúsculas
    //El orden puede cambiar
}
