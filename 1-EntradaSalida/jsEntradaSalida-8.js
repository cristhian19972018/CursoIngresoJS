/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
var numerodividendo = document.getElementById("numeroDividendo").value;
var numerodivisor = document.getElementById("numeroDivisor").value;
var resultado;
numerodividendo = parseInt(numerodividendo);
numerodivisor = parseInt(numerodivisor);
resultado = numerodividendo % numerodivisor;
alert("El resto es " + resultado);
}
