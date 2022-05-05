// Codigo del cuadrado
console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado);

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado; 
}
// console.log("El area del cuadrado es: " + areaCuadrado + " centimetros cuadrados");


console.groupEnd();




// Codigo del triangulo
console.group("Triangulo");
// const ladoTriangulo1 = 6;

// const ladoTriangulo2 = 6;

// const ladoTriangulo3 = 4;

// const alturaTriangulo = 5.5;

// console.log(
//     "Los lados del triangulo miden: "
//     + ladoTriangulo1
//     + " cm, "
//     + ladoTriangulo2
//     + " cm, "
//     + ladoTriangulo3
//     + " cm.");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm.");

// const areaTriangulo = (ladoTriangulo3 * alturaTriangulo)/2;
// console.log("El area del triangulo es: es: " + areaTriangulo + " centimetros cuadrados");

// console.groupEnd();

// Codigo del circulo. 
console.group("Circulos");


// Radio
// const radioCirculo = 4;

// console.log("El radio del circulo es: " + radioCirculo + " cm.");


// Diametro
// const diametroCirculo = radioCirculo * 2;

// console.log("El diametro del circulo es: " + diametroCirculo + " cm.");
function diametroCirculo(radio) {
    return radio * 2;
}

// // PI
// const PI = Math.PI;
// console.log("PI es: " + PI + " cm.");


// Circunferencia 
// const perimetroCirculo = diametroCirculo * PI;
// console.log("La circunferencia del circulo es: " + perimetroCirculo + " cm.");
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;


}


// Area
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El area del circulo es: " + areaCirculo + " cm cuadrados");
function areaCirculo(radio) {
    return (radio * radio) * PI;
}



// Aqui interactuamos con la area HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; 

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; 

    const area = areaCuadrado(value);
    alert(area);
}