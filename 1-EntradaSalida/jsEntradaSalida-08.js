/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	
	var divisor;
	var dividendo;
	var resultado;

	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	divisor	  = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	resultado = (dividendo % divisor);

	alert("El resto es " + resultado)
}

