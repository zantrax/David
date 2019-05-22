// JavaScript Document
var clave = "";
while(clave != "1234")
{
	clave=prompt("Introduzca la contraseña:","");
}
alert("Bienvenid@ a la Actividad 6");

var num1, num2, sum=0;
function suma(){
	num1=prompt("Numero 1: ","");
	num2=prompt("Numero 2: ","");
	sum=parseInt(num1)+parseInt(num2);
	alert("La solucion es: " + String(sum));
}

var num1, num2, rest=0;
function resta(){
	num1=prompt("Numero 1: ","");
	num2=prompt("Numero 2: ","");
	rest=parseInt(num1)-parseInt(num2);
	alert("La solucion es: " + String(rest));
}
var num1, num2, mult=0;
function multi(){
	num1=prompt("Numero 1: ","");
	num2=prompt("Numero 2: ","");
	mult=parseInt(num1)*parseInt(num2);
	alert("La solucion es: " + String(mult));
}
var num1, num2, div=0;
function divi(){
	num1=prompt("Numero 1: ","");
	num2=prompt("Numero 2: ","");
	div=parseInt(num1)/parseInt(num2);
	alert("La solucion es: " + String(div));
}
var num1, num2, mod=0;
function modul(){
	num1=prompt("Numero 1: ","");
	num2=prompt("Numero 2: ","");
	mod=parseInt(num1)%parseInt(num2);
	alert("La solucion es: " + String(mod));
}
var num1, num2, pot=0;
function potencia(){
	pot=Math.pow(num1=prompt("Numero 1: ",""),num2=prompt("Numero 2: ",""));//Math.pow(base,exp)
	alert("La solucion es: " + String(pot));
}
function ayuda(){	
	alert("Entraste al sistema de ayuda, para poder realizar una operación solo da click al botón de tu interes e ingresa 2 numeros. :D")
}
