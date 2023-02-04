/*2.	Para el departamento de Construcción:
A.  mostrar la cantidad de alambre a comprar  si se ingresara el largo 
y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.

B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno
 circular y se debe alambra con tres hilos de alambre.

C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos 
ingresen.
*/

function Rectangulo () 
{
    var largoTerreno
    var anchoTerreno
    var cantidadAlambre
    var perimetro
    var mensaje
    //
    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;
    //
    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);
    //
    perimetro = (anchoTerreno + largoTerreno) * 2;
    //
    cantidadAlambre = perimetro * 3;
    //
    mensaje = "La cantidad de alambre que necesitas para tu terreno es: "
    alert(mensaje + cantidadAlambre)

}

function Circulo () 
{
    var radioTerreno;
    var perimetro;
    var cantidadAlambre;
    

    radioTerreno = document.getElementById("txtIdRadio").value;

    radioTerreno = parseFloat(radioTerreno);
    
    perimetro = 2 * 3.14 * radioTerreno;


    cantidadAlambre = perimetro * 3;

    alert("La cantidad de metros de alambre necesarios para tu terreno es: " + cantidadAlambre + "mts");

}

function Materiales () 
{
	var medidaLargo;
    var medidaAncho;
    var resultado;
    var bolsasCemento;
    var bolsasCal;


    medidaLargo = document.getElementById("txtIdLargo").value;
    medidaAncho = document.getElementById("txtIdAncho").value;

    medidaLargo = parseFloat(medidaLargo);
    medidaAncho = parseFloat(medidaAncho);

    resultado = medidaLargo * medidaAncho;

    bolsasCemento = resultado *2;
    bolsasCal = resultado *3;
    
    alert(`Para un contrapiso de ${resultado}, se necesitan ${bolsasCemento} bolsas de cemento y ${bolsasCal} bolsas de cal`);
}
