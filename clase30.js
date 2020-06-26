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

async function obtenerPersonajes() {
    var idsPersonajes = [1,2,3,4,5,6,7]
    var promesas = idsPersonajes.map(id => obtenerPersonaje(id))
    try{
        var personajes = await Promise.all(promesas)
        for (let i = 0; i < personajes.length; i++) {
            console.log(`Hola, yo soy ${personajes[i].name}`)
        }
    }catch(id){
        orError(id)
    }

    // Promise
    //     .all(promesas)
    //     .then(personajes => {
    //     })
    //     .catch(orError)
    
}
obtenerPersonajes()