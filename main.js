//Simulador de Prestamos



let nombre
nombre = prompt("Hola Bienvenido!!! te saluda el Banco Coder,Cual es su nombre?");

let capital = parseFloat
( prompt (`Hola ${nombre}, cuanto deseas que te prestemos? ,mas de 100 ,menos de 1000 por favor`));

while(!(capital>=100 && capital<=1000)){
    alert ("coloque la cantidad correcta , entre 100 a 1000 porfavor")
    capital = parseFloat
    ( prompt (`Hola ${nombre}, cuanto deseas que te prestemos? ,mas de 100 ,menos de 1000 por favor`)); 
}

let cuotas = parseFloat(prompt("en cuantas cuotas deseas pagarlo? ,maximo 12 cuotas"));
while(!(cuotas >=1 && cuotas <=12) ){
    alert ("coloque la cuota correcta por favor , entre 1 y 12 cuotas");
    cuotas = parseFloat(prompt("en cuantas cuotas deseas pagarlo? ,maximo 12 cuotas"));
}

let interes = prompt("seleccione su tarjeta de credito visa 20% o mastercard 35%") ;

while((interes != "visa" ) && ( interes !="mastercard")) {
    alert("escriba la tarjeta que posea , visa o mastercard");
    interes=prompt("seleccione su tarjeta de credito Visa 20% o Mastercard 35%");
}
    let resultado = 0 ;
    if (interes = "visa") {
        resultado = (capital/cuotas) + (capital * 0.02) ;
    } else if (interes = "mastercard"){
        resultado = (capital/cuotas) + (capital * 0.35) ;
    }
    
for (let i=1;i<=cuotas;i++)
{
   console.log(`${i} Estimado ${nombre} usted tiene que pagar ${resultado}`);
}

