function mostrar()
{
var edad=document.getElementById("edad").value;
var estadocivil=document.getElementById("estadoCivil").value;
if((edad<18)||(estadocivil!="Soltero"))
{
}
else
{
    alert("Es soltero y no es menor"); 
}
}//FIN DE LA FUNCIÓN