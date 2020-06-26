function heredaAnimal(prototypeHijo, prototypePadre) {
    var fn = function () {}
    fn.prototype = prototypePadre.prototype
    prototypeHijo.prototype = new fn
    prototypeHijo.prototype.constructor = prototypeHijo
    
}

function Animal(nombre, edad, especie, color, altura) {
    this.nombre = nombre
    this.edad = edad
    this.especie = especie
    this.color = color
    this.altura = altura    
}

Animal.prototype.Comer = function() {console.log(`El animal esta comiendo`)}
Animal.prototype.Dormir = () => console.log(`El animal esta dumiento`)
Animal.prototype.Saludar = () => console.log(`El animal esta saludando`)
Animal.prototype.QueTipoSoy = function() {console.log(`${this.nombre} es un animal de la especie ${this.especie}`)}


function Jirafa(nombre, edad, especie, color, altura) {
    this.nombre = nombre
    this.edad = edad
    this.especie = especie
    this.color = color
    this.altura = altura    
}

heredaAnimal(Jirafa, Animal)

Jirafa.prototype.Comer = function() {console.log(`La jirafa ${this.nombre} esta comiendo hojas`)} 

function Elefante(nombre, edad, especie, color, altura) {
    this.nombre = nombre
    this.edad = edad
    this.especie = especie
    this.color = color
    this.altura = altura  
}

heredaAnimal(Elefante, Animal)

Elefante.prototype.Dormir = function() {console.log(`El Elefante ${this.nombre} se quedo dormido`)} 