function heredaDe(prototypeHijo, prototypePadre) {
    //Se le indica al hijo quien sera su padre
    var fn = function () {} //funcion dummy no hace nada, tambien se le llamada noob
    fn.prototype = prototypePadre.prototype
    prototypeHijo.prototype = new fn
    prototypeHijo.prototype.constructor = prototypeHijo //para que no llame al prototype padre
}

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

function Desarrollador(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
//antes de la funcion para no pisarla con la de Persona
heredaDe(Desarrollador,Persona)

//overwrite
Desarrollador.prototype.Saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}



// var daniel = new Persona('Daniel', 'Henriquez',1.8)
// var maria = new Persona('Maria', 'Benavides',1.6)
// var tomas = new Persona('Tomas', 'Martinez',1.84)