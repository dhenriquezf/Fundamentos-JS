var Daniel = {
    nombre : 'Daniel',
    edad : 29
} 

var Marisol = {
    nombre : 'Marisol',
    edad : 35
} 

function imprimirSaludo(persona) {
    var { nombre } = persona
    var { edad } = persona

    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirSaludo(Daniel)
imprimirSaludo(Marisol)


//Parametro como valor
function cumpleanos (Daniel) {
    Daniel.edad += 1
}

//Parametro como Referencia
function cumpleanos (edad) {
    edad += 1
}