class Persona {
    constructor(nombre, apellido,altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(responderSaludo){
        var {nombre, apellido} = this

        console.log(`Hola me llamo ${nombre} ${apellido}`)
        if (responderSaludo) {
            responderSaludo(nombre, apellido)
        }
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
    saludar(responderSaludo) {
        var {nombre, apellido, lenguaje} = this

        console.log(`Hola me llamo ${nombre} ${apellido}, soy desarrollador y mi lenguaje favorito es ${lenguaje}`)
        if (responderSaludo) {
            responderSaludo(nombre, apellido, true)
        }
    }
    lenguajeFavorito() {
        console.log(`Mi lenguaje favorito es ${this.lenguaje}`)
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)

    if (esDev) {
        console.log(`Ah mirá, no sabia que eras desarrollador/a`)
    }
}

var daniel = new Desarrollador('Daniel', 'Henriquez',1.8, 'Python')
var maria = new Persona('Maria', 'Benavides',1.6)
var tomas = new Persona('Tomas', 'Martinez',1.84)

daniel.saludar(responderSaludo)
maria.saludar()
tomas.saludar(responderSaludo)