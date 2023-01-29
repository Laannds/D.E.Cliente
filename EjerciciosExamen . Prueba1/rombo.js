let asterisco="*";
let blanco="&nbsp ";
let texto="";
let limite;
do{
    limite=Number(prompt("Introduzca el numero de filas",""));
}while(isNaN(limite)||limite<=0);
//MITAD SUPERIOR
for (let i=0; i<limite;i++) {
    texto+="<br>";
    for (let j=0; j<limite-i-1;j++) {                     
        texto+=blanco;    
    }
    for (let j=0; j<2*i+1;j++){
        texto+=asterisco;
    }
}
//MITAD INFERIOR
for (let j=limite-2;j>=0;j--) {
    texto+="<br>";
    for (let i=0;i<limite-j-1;i++) {
        texto+=blanco;
    }
    for (let i=0;i<2*j+1;i++) {
        texto+=asterisco;
    }
}
document.getElementById("rombo").innerHTML+=texto;

/*
let longitud=prompt("Dime la longitud del rombo");

let caja=document.getElementById("caja");

let espacioVacio="&nbsp";
let asterisco="*";
for(let i=0; i<longitud/2; i++) {
    document.write(espacioVacio);
    for(let j=0; j<2*i+1; j++) {
        document.write(asterisco);
    }
    document.write("<br>");
}
for(let i=0; i<longitud-2/2; i++) {
    document.write(espacioVacio);
    for(let j=2*i+1; j<=longitud-2; j++) {
        document.write(asterisco);
    }
    document.write("<br>");
}
*/