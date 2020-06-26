const API_URL =  'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const OPTION = { crossDomain: true }

// const onResponse = data => {
//     // console.log(arguments) todo lo que revive como respuesta
//     console.log(`Hola, yo soy ${data.name}`)
// }

function obtenerPersonaje(id, callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`    
    //$.get(URL, OPTION, onResponse)

    $
    .get(URL, OPTION, callback)
    .fail(() => {
        console.log(`Sucedio un error. No se puedo obtener el personaje ${id}`)
    })//fail tambien es un callback, se ejecuta si hay error
        // console.log(`Hola, yo soy ${data.name}`)

        // if (callback) {
        //     callback()
        // }
    //})
}

// callback hell
obtenerPersonaje(4, function (data) {
    console.log(`Hola, yo soy ${data.name}`)
    obtenerPersonaje(5, function (data) {
        console.log(`Hola, yo soy ${data.name}`)
        obtenerPersonaje(1, function (data) {
            console.log(`Hola, yo soy ${data.name}`)
        })//.... etc
    })    
})

