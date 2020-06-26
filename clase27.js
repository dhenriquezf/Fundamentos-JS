const API_URL =  'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const OPTION = { crossDomain: true }

function obtenerPersonaje(id, callback) {
    return new Promise((resolve,reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`    
        $
        .get(URL, OPTION, function (data) {
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

function orError(id) {
    console.log(`Sucedio un error. No se puedo obtener el personaje ${id}`)
}

obtenerPersonaje(4)
    .then(function (data) {
        console.log(`Hola, yo soy ${data.name}`)
    })
    .catch(orError)

// callback hell
// obtenerPersonaje(4, function (data) {
//     console.log(`Hola, yo soy ${data.name}`)
//     obtenerPersonaje(5, function (data) {
//         console.log(`Hola, yo soy ${data.name}`)
//         obtenerPersonaje(1, function (data) {
//             console.log(`Hola, yo soy ${data.name}`)
//         })//.... etc
//     })    
// })

