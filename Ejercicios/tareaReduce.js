
    let arrayNotas = [5.20, 3.9 , 6 , 9.75 , 7.5 , 3];
    let sumaNotas = arrayNotas.reduce((total, nota) => total += nota);
    let mediaNotas = arrayNotas.reduce((sumaNotas,nota) => sumaNotas += nota ) / arrayNotas.length ; 
    console.log(mediaNotas);


