
function hola()
{
    var url = "https://www.google.es/";
    window.alert("Has tocado el boton");
    window.open(url);
}

function decirHola()
{
    window.alert("Buenos días ");       
}

function cambiarColor()
{
    document.body.style.backgroundColor = '#61E2FF ';
}

function cambiarValor()
{
    document.getElementById('res').value = document.getElementById('marcas').value;
    document.getElementById('marcas').value = "CAMBIO DE TEXTO ";
    //document.getElementById('marcas')= "NUEVO ESTE VALOR";
    
}

function cambiarFrase()
{
    document.write("<h2>¿Hola como estás?</h2>");
    document.getElementById("frase").innerHTML="Ahora es así";
    
}
