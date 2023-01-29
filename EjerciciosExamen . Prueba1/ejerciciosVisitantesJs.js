let texto = document.getElementById("texto3").innerHTML;
let textoBuscado = document.getElementById("i1");


function mostrar()
{

    console.log(texto);
    console.log(textoBuscado.value);

     
     let valor = document.getElementById("buscador");
     console.log(valor.value);


     if(valor = 1)
     {
         buscarPalabras(texto,textoBuscado);
     }
     if(valor = 2)
     {
         distinguir(texto,textoBuscado);
     }
    




}


function buscarPalabras(texto,textoBuscado)
{

    console.log( texto.toUpperCase());
    console.log(textoBuscado.value.toUpperCase());
    let buscador = texto.toUpperCase();
    let info = textoBuscado.value.toUpperCase();

    if(buscador.includes(info) == true)
    {
        window.alert("PALABRA INCLUIDA");
        console.log( texto.toUpperCase());
        console.log(textoBuscado.value.toUpperCase());
    }
}


function distinguir(texto,textoBuscado)
{
    let buscador = texto.toUpperCase();
    let info = textoBuscado.value.toUpperCase();
   
    if(buscador.includes(info) == true)
    {
        window.alert("PALABRA INCLUIDA");
        console.log( texto.toUpperCase());
        console.log(textoBuscado.value.toUpperCase())
    }
   
   
   
   
   
   
}