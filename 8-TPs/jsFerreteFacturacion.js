/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
var preciouno = document.getElementById("PrecioUno").value;
var preciodos = document.getElementById("PrecioDos").value;
var preciotres = document.getElementById("PrecioTres").value;
var resultado;
preciouno = parseInt(preciouno);
preciodos = parseInt(preciodos);
preciotres = parseInt(preciotres);
resultado = preciouno + preciodos + preciotres;
alert("la suma es.." + resultado);	
}
function Promedio () 
{
var preciouno = document.getElementById("PrecioUno").value;
var preciodos = document.getElementById("PrecioDos").value;
var preciotres = document.getElementById("PrecioTres").value;
var resultado;
var suma;
preciouno = parseInt(preciouno);
preciodos = parseInt(preciodos);
preciotres = parseInt(preciotres);
suma = preciouno + preciodos + preciotres;
resultado = suma / 3
alert("el promedio es.." + resultado);	   
}
function PrecioFinal () 
{
var preciouno = document.getElementById("PrecioUno").value;
var preciodos = document.getElementById("PrecioDos").value;
var preciotres = document.getElementById("PrecioTres").value;
var resultado;
var suma;
var iva;
preciouno = parseInt(preciouno);
preciodos = parseInt(preciodos);
preciotres = parseInt(preciotres);
suma= preciouno + preciodos + preciotres;
iva = (suma * 21)/100;
resultado = suma + iva;
alert("el precio final es.." + resultado);	
}