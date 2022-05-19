const lista1 = [
    100,
    200,
    300,
    600,
    
    

];

let lista = lista1.sort((a,b) => a - b);

function calcularMediaAritmetica(lista) {
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista1 = sumaLista / lista.length;

    return promedioLista1;

}
const mitadLista1 = parseInt(lista1.length/ 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedio1y2 = calcularMediaAritmetica([elemento2, elemento1]);

    mediana = promedio1y2;

} else {
    mediana = lista1[mitadLista1];
}

