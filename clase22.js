function Persona(nombre, apellido,altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.Saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.SoyAlto = function () {
    if (this.altura > 1.8) {
        console.log(`Soy alto`)        
    }else{
        console.log(`No soy alto`)        
    }
}

var daniel = new Persona('Daniel', 'Henriquez',1.8)
var maria = new Persona('Maria', 'Benavides',1.6)
var tomas = new Persona('Tomas', 'Martinez',1.84)