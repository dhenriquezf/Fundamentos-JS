var daniel = {
    nombre : 'Daniel',
    apellido : 'Henriquez',
    edad : 29,
    peso : 75
}

console.log(`Al inicio del año ${daniel.nombre} pesa ${daniel.peso} kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_AÑO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
    var random = Math.random() //0...1
    
    if (random < 0.25) {
        aumentarDePeso(daniel)
    } else if (random < 0.5){
        adelgazar(daniel)
    }
}


console.log(`Al final del año ${daniel.nombre} pesa ${daniel.peso.toFixed(2)} kg`)