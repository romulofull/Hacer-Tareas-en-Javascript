function agregarTarea() {

// Obtenemos el valor de TAREA
let nuevatareatexto = document.getElementById("nuevatarea").value;

// Validamos que el valor no sea vacio
if (nuevatareatexto === "") {
alert ("Por favor, Ingrese una Tarea");
return;
}

// Crear elemento en la lista
let nuevatarea = document.createElement("li");
nuevatarea.textContent = nuevatareatexto + "";

// Crear Botón de Eliminar
let botonEliminar = document.createElement("button");
botonEliminar.textContent = "Eliminar";
botonEliminar.onclick = function() {nuevatarea.remove();}

// Agregar Boton de eliminar al elemento de la Lista
nuevatarea.appendChild(botonEliminar);

//Agregar el elemento/la tarea a la Lista
document.getElementById("listatareas").appendChild(nuevatarea);

//Limpiar el cuadro de Texto del nombre de la Tarea
document.getElementById("nuevatarea").value = "";


}