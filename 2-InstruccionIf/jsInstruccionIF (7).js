function mostrar()
{
var edad = document.getElementById("edad").value;
var estadocivil= document.getElementById("estadoCivil").value;
if ((edad<18)&&(estadocivil!="Soltero"))
{
    alert("Es muy pequeño para no ser soltero");
}
}//FIN DE LA FUNCIÓN