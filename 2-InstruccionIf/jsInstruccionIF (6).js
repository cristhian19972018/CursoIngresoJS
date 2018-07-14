function mostrar()
{
var edad = document.getElementById("edad").value;
edad = parseInt(edad);
if (edad<13)
{
    alert("es un niño");
} 
else
{
    if((edad>=13)&&(edad<=17))
    {
        alert("es un adolecente");
    }
    else
    {
        alert("es mayor de edad");
    }
}
}//FIN DE LA FUNCIÓN