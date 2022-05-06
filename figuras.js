// Codigo del Triangulo
console.group("Triangulo");

//const ladoTriangulo = 5;
//console.log("Los lados del Triangulo miden: " + ladoTriangulo);

function perimetroTriangulo(lado) {
    return lado * 4;
}

function areaTriangulo(lado) {
    return lado * lado; 
}
// console.log("El area del Triangulo es: " + areaTriangulo + " centimetros Triangulos");


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
// console.log("El area del triangulo es: es: " + areaTriangulo + " centimetros Triangulos");

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
// console.log("El area del circulo es: " + areaCirculo + " cm Triangulos");
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

// Funcion que calcule area y perimetro de triángulo isósceles. 
// La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
// La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
// La función debe retornar la altura del triángulo.


function perimetroTriangulo() {
    return ((lado * 2) + base);
}

function alturaTriangulo(lado, base) {
    return Math.sqrt((lado ** 2) - (base ** 2)/4);
}


function calcularAlturaTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value = input1.value; 
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value; 
    const altura = alturaTriangulo(value, value2);
    if (value !== value2) {
        return alert(altura);
    }
    else {
        return alert ("No es un isósceles, amigo");
    }
}

