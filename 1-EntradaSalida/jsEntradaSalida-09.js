/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo
	var nuevoImporte
	var aumento

	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

	aumento = sueldo * 10 / 100;
	
	nuevoImporte = sueldo + aumento;

	document.getElementById("txtIdResultado").value = nuevoImporte
	
}
