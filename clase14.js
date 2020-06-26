var daniel = {
    nombre : 'Daniel',
    apellido : 'Henriquez',
    edad : 29,
    peso : 75
}

console.log(`Al inicio del año ${daniel.nombre} pesa ${daniel.peso} kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_AÑO = 365
var dias = 0

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = daniel.peso - 3

while (daniel.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(daniel)
    }
    if (realizaDeporte()) {
        adelgazar(daniel)
    }
    dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${daniel.nombre} adelgazo 3kg`)