/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en 
Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en 
Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheitIngresado;
    var resultado;
    //
    fahrenheitIngresado = document.getElementById("txtIdTemperatura").value;
    //   
    fahrenheitIngresado = parseFloat(fahrenheitIngresado);
    //
    resultado = (fahrenheitIngresado - 32) * 5/9;
    //
    alert("Son " + resultado);          
}

function CentigradosFahrenheit () 
{
	{
        var celsiusIngresado;
        var resultado;
        //
        celsiusIngresado = document.getElementById("txtIdTemperatura").value;
        //   
        celsiusIngresado = parseFloat(celsiusIngresado);
        //
        resultado = (celsiusIngresado * 1.8) + 32;
        //
        alert("Son " + resultado);          
    }
}
