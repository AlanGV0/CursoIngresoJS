/*
9 BIS : Debemos lograr tomar el importe por ID ,transformarlo a entero (parseInt), 
y tambien pedirle al usuario mediante una entrada de datos cual es el aumento a 
realizar, y luego mostrar el importe con el aumento en el TextBox"RESULTADO".*/

// Declaramos variables
function mostrarAumento()
{
	var importe;
	var ingresoAumento;
	var nuevoImporte;
	var aumento;

// Tomamos los datos por ID

	importe = document.getElementById("txtIdSueldo").value;

// Pedimos datos al usuario

	ingresoAumento = prompt("Ingrese su Aumento");

// Parseamos

	importe = parseFloat(importe);
	ingresoAumento = parseFloat(ingresoAumento);
	

// Realizamos el aumento

	aumento = importe * ingresoAumento/100
	nuevoImporte = importe + ingresoAumento;

// Mostramos en TextBox

	document.getElementById("txtIdResultado").value = nuevoImporte;

}



















