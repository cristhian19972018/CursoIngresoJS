function mostrar()
{
var nota=Math.floor((Math.random()*10)+1);
alert(nota);
if (nota==9 || nota==10)
{
	alert("exelente");
}
else
{
    if(nota>4)
	{
    alert("aprobo");
	}
	else
	{
		alert("Vamos, la proxima se puede");
	}
}


}//FIN DE LA FUNCIÓN