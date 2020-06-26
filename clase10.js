var Daniel = {
    nombre : 'Daniel',
    edad : 29,
    ingeniero : true,
    cantante : false,
    telonero : false,
    piloto : true,
    cocinero : false,
} 

function imprimirProfesion(persona){
    console.log(`${persona.nombre} es:`)
    if (persona.ingeniero) {
        console.log('Ingeniero')
    }
    if (persona.telonero) {
        console.log('Telonero')
    }
    if (persona.cantante) {
        console.log('Cantante')
    }
    if (persona.piloto) {
        console.log('Piloto')
    }
    if (persona.cocinero) {
        console.log('Cocinero')
    }
}

//imprimirProfesion(Daniel)

const MAYORIA_DE_EDAD = 18

//function anonima pero asociada una variable
//function asignar a una variable una function
// const esMayorDeEdad = function (persona){
//     return persona.edad >= MAYORIA_DE_EDAD
// }
//function arrow
// const esMayorDeEdad = persona => {
//     return persona.edad >= MAYORIA_D E_EDAD
// }
//si solo es un return
const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD
//destructurar
//const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

const esMenorDeEdad = persona => persona.edad < MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona){
    console.log(`${persona.nombre} tiene ${persona.edad} y...`)
    if (esMayorDeEdad(persona)) {
        console.log('es mayor de edad')
    }else{
        console.log('es menor de edad')
    }
}

const permitirAcceso = persona => {
    if(!esMayorDeEdad(persona)){
        console.log('ACCESO DENEGADO')
    }
}

imprimirSiEsMayorDeEdad(Daniel)
permitirAcceso(Daniel)