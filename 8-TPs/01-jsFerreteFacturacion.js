/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var blackout
    var sunscreen
    var filtroLuz
    var resultado
    //
    blackout = document.getElementById("txtIdPrecioUno").value;
	sunscreen = document.getElementById("txtIdPrecioDos").value;
    filtroLuz = document.getElementById("txtIdPrecioTres").value;
    //
	blackout = parseFloat(blackout);
	sunscreen = parseFloat(sunscreen);
    filtroLuz = parseFloat(filtroLuz);
    //
	resultado = blackout + sunscreen + filtroLuz
    //
    alert("Tu resultado es " + resultado);
}
function Promedio () 
{
	var blackout
    var sunscreen
    var filtroLuz
    var resultado
    //
    blackout = document.getElementById("txtIdPrecioUno").value;
	sunscreen = document.getElementById("txtIdPrecioDos").value;
    filtroLuz = document.getElementById("txtIdPrecioTres").value;
    //
	blackout = parseFloat(blackout);
	sunscreen = parseFloat(sunscreen);
    filtroLuz = parseFloat(filtroLuz);
    //
	resultado = blackout + sunscreen + filtroLuz;
    //
    alert("Tu resultado es " + resultado/3);

}
function PrecioFinal () 
{
	
    var blackout
    var sunscreen
    var filtroLuz
    var resultado
    //
    blackout = document.getElementById("txtIdPrecioUno").value;
	sunscreen = document.getElementById("txtIdPrecioDos").value;
    filtroLuz = document.getElementById("txtIdPrecioTres").value;
    //
	blackout = parseFloat(blackout);
	sunscreen = parseFloat(sunscreen);
    filtroLuz = parseFloat(filtroLuz);
    //
	resultado = blackout + sunscreen + filtroLuz
    //
    alert("Tu resultado es " + resultado * 21/100)
}