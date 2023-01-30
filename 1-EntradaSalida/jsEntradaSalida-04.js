/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var edadUsuario 
	edadUsuario = prompt("Decime tu Edad")
	

	document.getElementById("txtIdNombre").value = edadUsuario;
}