/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	
	var numero1 
	var numero2 
	
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	var conversion1 = parseInt(numero1);
	var conversion2 = parseInt(numero2);
	
	alert("Tu respuesta es: " conversion1 + conversion2);


}

