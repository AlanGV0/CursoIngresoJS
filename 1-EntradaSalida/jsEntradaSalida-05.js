/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreUsuario;
	var edadUsuario;

	nombreUsuario = document.getElementById("txtIdNombre").value;
	edadUsuario = document.getElementById("txtIdEdad").value;

	alert("Tu nombre es " + nombreUsuario + " y tu edad es " + edadUsuario);


}

