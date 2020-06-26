//function prompt
var signo = prompt('¿Cual es tu signo?')

console.log(signo)

switch (signo) {
    case 'aries':
        console.log('Etapa para liberarse de los falsos compromisos y concentrarse en los genuinos que involucran su seguridad interna. Revea cuáles son sus prioridades.')
        break
    case 'tauro':
        console.log('Intente poner al día todas las obligaciones que tiene pendientes. Esto lo ayudará a ordenar sus ideas y a conectarse con el verdadero sentido de la vida.')
        break
    case 'geminis':
    case 'géminis':
        console.log('Prepárese, ya que hoy transitará una nueva experiencia trabajando en beneficio de otros y a la vez mejorando la calidad de vida de los demás.')
        break
    case 'cancer':
        console.log('Anímese y emprenda algo nuevo donde se sentirá gratificado. Gracias a su gran lucidez podrá realizar algunos cambios positivos en su vida cotidiana.')
        break
    case 'leo':
        console.log('Posiblemente alguien lo estará presionando para que tome una decisión. Sea cuidadoso con las respuestas impulsivas, ya que podría arrepentirse.')
        break
    case 'virgo':
        console.log('Hoy descubrirá una cantidad de recursos inimaginables que lo ayudarán a concretar sus ambiciones. Prepárese, ya que su proyecto comienza a tener forma.')
        break
    case 'libra':
        console.log('Evite tener miedo a caer y volver a empezar por más que sus esfuerzos se vean limitados para obtener nuevos intereses. Muchas veces de los errores aprendemos cosas nuevas.')
        break
    case 'escorpio':
        console.log('Sepa que necesitará utilizar su inteligencia para poder solucionar muchos de los conflictos propios. Momento para dejar a un lado las emociones y ser más racional.')
        break
    case 'sagitario':
        console.log('Aproveche el momento para revalorizar su autoestima y comenzar a desplegar las virtudes con las que cuenta en la vida. Busque algún proyecto que lo motive.')
        break
    default:
        console.log('tu signo no coincide')
        break
}