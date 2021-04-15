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

    const nombresalumnos = alumnos.map((nomb)=>{
        return nomb.nombre;
    })

    console.log("1. array de strings de nombre con map: ", nombresalumnos);
    
    // 2. Obtener un array con aquellos alumnos mayores a 25 años usando .filter()

    const mayoresa25 = alumnos.filter((nro)=>{
        return nro.edad > 25;
    })
    console.log("2. array de alumnos mayores a 25 años: ", mayoresa25);

    // 3. Obtener un entero con la edad total de todos los alumnos usando .reduce()
    const edades = alumnos.map((ed)=>{
        return ed.edad;
    })
    const edadessuma = edades.reduce((a , b) => a + b)
    console.log("3. suma de edades alumnos", edadessuma);

    // 4. Obtener en una constante la edad de "Micaela Orfali" usando .find()
    const micaelaOrfali = alumnos.find((alumno)=>{
      return alumno.nombre === 'Micaela Orfali'  
    })
    console.log("4. edad micaela orfali", micaelaOrfali.edad)

    // 5. Obtener en una constante primer alumno del array de alumnos usando destructuring y posteriormente en otra constante su nombre también
const [sofi] = alumnos
const sofia = sofi.nombre;
console.log("4. primera alumna: ", sofi, sofia);

// otra forma, mas correcta
const primeralumno = (alumno)=>{
    const {nombre, edad} = alumno;
    return `Mi nombre es ${nombre} y tengo ${edad} años`
}

// 6. Obtener un array con aquellos alumnos que empiezan con la letra "L", usando .filter()
const alumnosL = alumnos.filter((alumnoL)=>{
    return alumnoL.nombre[0] === 'L' 
})
console.log("6. Alumnos que empiezan con L: ", alumnosL)

// 7. Obtener un array agregando una propiedad/key/atributo más a cada elemento usando .map()
const alumnosnuevoattribute = alumnos.map((alumno) =>{
   return {...alumno, carrera:'Multimedia'}
})
console.log("7. Agregarle un atributo", alumnos);

// 8. Obtener a partir de la constante en 3, el promedio de edad del curso dividiendo la misma por el total de alumnos
console.log("8. Promedio edades de los alumnos: ", edadessuma/alumnos.length)