
/*10 BIS: Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt),y tambien pedirle al usuario mediante 
una entrada de datos cual es el descuento a realizar, y luego mostrar el importe 
final con el descuento en el TextBox y el descuento realizado en un Alert.
*/

function mostrarAumento()
{
	var importe
	var ingresoDescuento
	var nuevoImporte
	var Descuento
	//
	importe = document.getElementById("txtIdImporte").value;
	//
	ingresoDescuento = prompt("Ingresá el descuento");
	//
	importe = parseFloat(importe);
	ingresoDescuento = parseFloat(ingresoDescuento);
	//
	Descuento = ingresoDescuento/100 * importe;
	nuevoImporte = importe - Descuento;
	//
	document.getElementById("txtIdResultado").value = nuevoImporte;
}
