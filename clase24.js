class Persona {
    constructor(nombre, apellido,altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }

    SoyAlto(){
        if (this.altura > 1.8) {
            console.log(`Soy alto`)        
        }else{
            console.log(`No soy alto`)        
        }
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura, lenguaje) {
        super(nombre, apellido, altura)
        this.lenguaje = lenguaje //Atributo exclusivo de Desarrollador que Persona no tiene
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}, soy desarrollador y mi lenguaje favorito es ${this.lenguaje}`)
    }
    lenguajeFavorito() {
        console.log(`Mi lenguaje favorito es ${this.lenguaje}`)
    }
}


// var daniel = new Persona('Daniel', 'Henriquez',1.8)
// var maria = new Persona('Maria', 'Benavides',1.6)
// var tomas = new Persona('Tomas', 'Martinez',1.84)