
// codigo
let anoNacimiento

anoNacimiento = prompt("cuan es tu nacimeitno?" ) ;

console.log(`el usario nacio en ${anoNacimiento}`);

alert(`el usario nacio en ${anoNacimiento}`);


//convertir un texto en numero
// Number() , parseInt() , parseFloat()


//clase 1

let num1 = parseInt(prompt("Coloque el primer numero"));
let num2 = parseInt(prompt("Colque el segundo numero"));

resultado = num1 + num2 ;
console.log(resultado);


//clase 2

let precio = parseFloat(prompt("cual es el precio?"));

if (precio >100 ){
    alert("que caro!!");
}else if (precio == 30){
    alert("dale 10% de descuento")
} else {
    alert("compra 2")
}







