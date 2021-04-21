/*Javascript ES6, today is the day....*/

// ECMAScript o ES, es un conjunto de especificaciones que salen año tras año.
// ECMAScript6 o ES2015, fue el conjunto de features más grande hasta el momento.

/*
1) Const y Let (Block Scope)
2) Arrow Functions
3) Modules (Imports and Exports)
4) Template Literals
5) Classes (Constructor, Super, Setters and Getters)
6) Default Parameters
7) The Spread Operator
8) Destructuring
9) Rest Operator
10) map(), filter(), reduce() 
11) Promesas, Async/Await
*/

const alumnos = [
    { nombre: 'Sofia Bonavena', edad: 23 },
    { nombre: 'Micaela Fernandez', edad: 22 },
    { nombre: 'Giuliano Giovanola', edad: 20 },
    { nombre: 'Lautaro Hudson', edad: 19 },
    { nombre: 'Alejandro Nieco', edad: 22 },
    { nombre: 'Micaela Orfali', edad: 24 },
    { nombre: 'Pedro Balza', edad: 26 },
    { nombre: 'Leandro Amaro', edad: 35 },
    { nombre: 'Alva Ramírez', edad: 27 },
    { nombre: 'Diego Salischiker', edad: 29 },
]


// 1. Obtener un array de strings con solo nombres de cada alumno usando .map()

const nombresalumnos = alumnos.map((nomb) => {
    return nomb.nombre;
})

console.log("1. array de strings de nombre con map: ", nombresalumnos);

// 2. Obtener un array con aquellos alumnos mayores a 25 años usando .filter()

const mayoresa25 = alumnos.filter((nro) => {
    return nro.edad > 25;
})
console.log("2. array de alumnos mayores a 25 años: ", mayoresa25);

// 3. Obtener un entero con la edad total de todos los alumnos usando .reduce()
const edades = alumnos.map((ed) => {
    return ed.edad;
})
const edadessuma = edades.reduce((a, b) => a + b)
console.log("3. suma de edades alumnos", edadessuma);

//otra forma mas correcta
const sumaEdades = alumnos.reduce((acumulador, alumno) => {
    const { edad } = alumno
    return acumulador + edad;
}, 0)

// 4. Obtener en una constante la edad de "Micaela Orfali" usando .find()
const micaelaOrfali = alumnos.find((alumno) => {
    return alumno.nombre === 'Micaela Orfali'
})
console.log("4. edad micaela orfali", micaelaOrfali.edad)

//hay que hacerlo parecido al 6

// 5. Obtener en una constante primer alumno del array de alumnos usando destructuring y posteriormente en otra constante su nombre también
const [sofi] = alumnos
const sofia = sofi.nombre;
console.log("4. primera alumna: ", sofi, sofia);

// otra forma, mas correcta
const primeralumno = (alumno) => {
    const { nombre, edad } = alumno;
    return `La primera alumna es ${nombre} y tiene ${edad} años`
}

// 6. Obtener un array con aquellos alumnos que empiezan con la letra "L", usando .filter()
const alumnosL = alumnos.filter((alumnoL) => {
    return alumnoL.nombre[0] === 'L'
})
console.log("6. Alumnos que empiezan con L: ", alumnosL)

// otra forma 
/*
const alumnosL = alumnos.filter((alumnoL)=>{
 const {nombre} = alumnoL;
 return nombre.charAt(0) === "L"
})
*/

// 7. Obtener un array agregando una propiedad/key/atributo más a cada elemento usando .map()
const alumnosnuevoattribute = alumnos.map((alumno) => {
    return { ...alumno, carrera: 'Multimedia' }
})
console.log("7. Agregarle un atributo", alumnosnuevoattribute);

// 8. Obtener a partir de la constante en 3, el promedio de edad del curso dividiendo la misma por el total de alumnos
console.log("8. Promedio edades de los alumnos: ", edadessuma / alumnos.length)

// 9. Buscar una API que más te guste en https://github.com/toddmotto/public-apis pero que debajo de la columna Auth especifique "No"

// https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search

// 10. Implementar una función getDataWithPromises que utilice la API de Promises usando .then() (investigar)

// 11. Implementar una función getDataWithAsync que utilice async / await junto con la API fetch para buscar los datos de la API elegida
 
// 12. Hiciste manejo de errores? En caso que no lo hayas hecho utiliza .catch() en la función getDataWithPromises o try / catch en la función getDataWithAsync


let done = true

const isItDoneYet = new Promise((resolve, reject) => {

    if (done) {
        const workDone = 'Here is the thing I built'
        resolve(workDone)
    } else {
        const why = 'Still working on sth else'
        reject(why)
    }

})

const checkIfItsDone = () => {

    isItDoneYet
        .then((ok) => {
            console.log('La promesa se completo')
        })
        .catch((er) => {
            console.log('La promesa tuvo un error')
        })
}

checkIfItsDone();

const status = response => {

    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
}

const getDataWithPromises = (artist, title) => {
    const json = response => response.json()
    fetch('https://api.lyrics.ovh/v1/' + artist + '/' + title)
        .then(status)
        .then(json)
        .then(data => {
            console.log('Request succeeded with JSON response', data)
        })
        .catch(error => {
            console.log('Request failed', error)
        })
}
console.log(getDataWithPromises("ariana_grande", "no_tears_left_to_cry"))
console.log(getDataWithPromises("shawn_mendes", "if_i_can't_have_you"))

const getDataWithAsync = (artist, title) => {
    const getLyrics = async () => {
        try {
            const response = await fetch('https://api.lyrics.ovh/v1/' + artist + '/' + title)
            const lyrics = await response.json()
            return lyrics
        } catch (error) {

        }
    }

    const mainLogic = async () => {
        const lyric = await getLyrics()
        //const { lyrics } = lyric;
        console.log('los lyrics son', lyric)
        document.querySelector("#content").innerHTML = '<p>' + lyric.lyrics + '</p>';

    }
    mainLogic()
}
getDataWithAsync("shawn_mendes", "if_i_can't_have_you")
console.log(getDataWithAsync("shawn_mendes", "if_i_can't_have_you"))

//Ejemplo de POST
//3)

const options = {
    method: 'post',
    headers: {
        'Content-type': 'application/json'
    },
    body: 'nombre=Flavio&sexo=M'

}

const optionsJSON = {

    method: 'post',
    headers: {

        'Accept': 'application/json',
        'Content-type': 'application/json'

    },
    body: JSON.stringify({
        nombre: 'Flavio Mendoza',
        sexo: 'M',
        email: 'lean@ddddd.com',
        comentarios: "Post desde la API en formato JSON!"
    })

}
fetch('https://prog-3-leads-api-rest.vercel.app/leads', optionsJSON).catch(err => {

    console.error('Request failed', err)

})



