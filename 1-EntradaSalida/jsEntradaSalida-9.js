/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var sueldo = document.getElementById("sueldo").value;
var resultado= document.getElementById("resultado").value;
var total;
var valor=10;
var porcentaje;
porcentaje= valor* (0/10);
total = valor + porcentaje;
sueldo = parseInt(sueldo);
resultado = sueldo * total;
alert("mostrar aumento " + resultado);
}
