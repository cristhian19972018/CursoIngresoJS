function mostrar()
{
var contador=0;
var positivo=0;
var negativo=1;	
var respuesta="si";
var numero;
document.getElementById("suma").value=positivo;
document.getElementById("producto").value=negativo;
while (respuesta="si")
{
	contador++;
	numero=prompt("numeros");
	numero=parseInt(numero);
	if(numero>0)
	{ 
        positivo+=numero;
	}
	else
	{
		negativo*=numero;
	}
}
}//FIN DE LA FUNCIÓN