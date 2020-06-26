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

var idsPersonajes = [1,2,3,4,5,6,7]
// var promesas = idsPersonajes.map(function (id) {
//     return obtenerPersonaje(id)
// })

var promesas = idsPersonajes.map(id => obtenerPersonaje(id))
Promise
    .all(promesas)
    .then(personajes => {
        for (let i = 0; i < personajes.length; i++) {
            console.log(`Hola, yo soy ${personajes[i].name}`)
        }
    })
    .catch(orError)

// obtenerPersonaje(4)
//     .then(data => {
//         console.log(`Hola, yo soy ${data.name}`)
//         return obtenerPersonaje(1)
//     })
//     .then(data => {
//         console.log(`Hola, yo soy ${data.name}`)
//         return obtenerPersonaje(2)
//     })
//     .then(data => {
//         console.log(`Hola, yo soy ${data.name}`)
//         return obtenerPersonaje(3)
//     })
//     .then(data => {
//         console.log(`Hola, yo soy ${data.name}`)
//         return obtenerPersonaje(5)
//     })
//     .then(data => {
//         console.log(`Hola, yo soy ${data.name}`)
//         return obtenerPersonaje(6)
//     })
//     .catch(orError)