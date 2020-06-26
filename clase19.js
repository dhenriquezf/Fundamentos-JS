var jose = {
    nombre: 'Jose',
    apellido: 'Lopez',
    edad: 28,
    mide: 2.10
}
var  pedro = {
    nombre: 'Pedro',
    apellido: 'Hernandez',
    mide: 1.70
}
var lucas = {
    nombre: 'lucas',
    apellido: 'Thomas',
    mide: 1.60
}
var juanito = {
    nombre: 'Juanito',
    apellido: 'La rosita',
    mide: 1.85
}
var mariposita = {
    nombre: 'Mariposita',
    apellido: "Rodriguez",
    mide: 1.40
}

const esAlta = persona => persona.mide > 1.8
const esBaja = persona => persona.mide < 1.8
// const pasarAlturaACms = persona => {
//     return {
//         ...persona,
//         mide: persona.mide * 100
//     }
// }
const pasarAlturaACms = persona => ({
        ...persona,
        mide: persona.mide * 100
})

var personas = [jose, pedro, lucas, juanito, mariposita]

//filtrar a  las personas altas
var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

var personasCms = personas.map(pasarAlturaACms)

console.log(personas)
// console.log(personasAltas)
console.log(personasCms)