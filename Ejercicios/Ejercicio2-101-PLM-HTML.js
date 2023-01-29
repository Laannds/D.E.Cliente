
// APARTADO 1 : 
// FUNCIÓN SALUDAR (MOSTRANDO UNA VARIABLE LOCAL CON UN WINDOW.ALERT(VARIABLE)):
function saludar ()
{
    // VARIABLE LOCAL SALUDO EN LA FUNCION SALUDAR : 
    var saludo = "Hola";

    // VENTANA EMERGENTE CON LA VARIABLE LOCAL SALUDO . 
    window.alert(saludo);
}


// APARTADO 2 : 
// VARIABLE GLOBAL FUERA DE LA FUNCIÓN (DESPEDIDA) 
var despedida = "Adiós";

// FUNCIÓN DESPEDIR QUE TOMA EL VALOR DE LA VARIABLE DECLARADA FUERA DE DICHA FUNCIÓN :
function despedir(despedida)
{
    window.alert(despedida);
}


var nombre = "Pablo";

function ambito()
{
    window.alert(nombre);

    var nombre = "Alex" ;
    
    window.alert(nombre);
}

var variableGlobal = "Hoy es jueves" ;

function remodelar()
{
    variableGlobal += ", y mañana es viernes";
    window.alert(variableGlobal);
}

