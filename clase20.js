var liam = {
    nombre: 'Liam',
    apellido: 'León',
    edad: 18,
    altura: 1.72,
    libros: 81
 }
  
 var clifort = {
    nombre: 'Clifort',
    apellido: 'Collins',
    edad: 19,
    altura: 1.58,
    libros: 182
 }
  
 var paula = {
    nombre: 'Paula',
    apellido: 'Benavides',
    edad: 21,
    altura: 1.72,
    libros: 91
 }
  
 var natanael = {
    nombre: 'Natanael',
    apellido: 'León',
    edad: 18,
    altura: 1.82,
    libros: 90
 }
  
 var jhonatan = {
    nombre: 'Jhonatan',
    apellido: 'Lizcano',
    edad: 19,
    altura: 1.93,
    libros: 78
 }

 const esAlta = persona => persona.altura > 1.8
 const esBaja = persona => persona.altura < 1.8
 const pasarAlturaACms = persona => ({
         ...persona,
         altura: persona.altura * 100
 })
 
 var personas = [liam, clifort, paula, natanael, jhonatan]
 
 //filtrar a  las personas altas
 var personasAltas = personas.filter(esAlta)
 var personasBajas = personas.filter(esBaja)
 
 var personasCms = personas.map(pasarAlturaACms)
 
//  var acum = 0

//  for (let i = 0; i < personas.length; i++) {
//      acum = acum + personas[i].libros
//  }

const reducer = (acum, {libros}) => acum + libros

//parametros -> funcion y valor inicial acumulador
var totalDeLibros = personas.reduce(reducer, 0)

 console.log(`En total todos tienen ${totalDeLibros} libros`)