/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() 
{

	var numeroUno;
	var numeroDos;
	var total

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	total = numeroUno + numeroDos

	alert("Tu resultado es " + total);
}

function restar() {
	var numeroUno;
	var numeroDos;
	var total

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	total = numeroUno - numeroDos

	alert("Tu resultado es " + total);
}

function multiplicar() {

	var numeroUno;
	var numeroDos;
	var total

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	total = numeroUno * numeroDos

	alert("Tu resultado es " + total);
}

function dividir() {

	var numeroUno;
	var numeroDos;
	var total

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	total = numeroUno / numeroDos

	alert("Tu resultado es " + total);
}

