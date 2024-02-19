/*Reto 1
Obtener Rol por Nombre desde un Conjunto Predefinido en TypeScript
Desarrollar una función en TypeScript llamada getRoleFromRoleName que reciba como parámetro el nombre
de un rol como una cadena y devuelva el objeto de rol correspondiente desde un conjunto predefinido de roles.
El conjunto de roles se define como sigue:
*/
/*
Obtener Rol por Nombre desde un Conjunto Predefinido en TypeScript
La función getRoleFromRoleName debe buscar el rol por su nombre dentro del conjunto
predefinido y devolver el objeto de rol si se encuentra una coincidencia, o undefined si no se
encuentra ninguna coincidencia.
Uso de Ejemplo:
const roleName = "admin";
const role = getRoleFromRoleName(roleName);
console.log(role); // Salida: { id: 1, name: "admin" } (o el objeto de rol
correspondiente)
*/
interface Role {
  id: number
  name: string
}

const UserRoles: { [key: string]: Role } = {
  ADMIN: { id: 1, name: "admin" },
  MANAGER: { id: 2, name: "manager" },
  USER: { id: 3, name: "user" },
}

console.log(UserRoles)

const getRoleFromRoleName = (role: string): Role | undefined => {
  let result = UserRoles[role] ? UserRoles[role] : undefined
  //   if (UserRoles[role]){
  //     return UserRoles[role]
  //   }else return undefined
  return result
}
//el uso de [] en userrole es para apuntar a la clave de ese objeto, que es COMO un array de objs
console.log(getRoleFromRoleName("ADMIN"))

/*Reto 2
Validación de Contraseña:
Escribe una función llamada validarContraseña que tome una cadena como argumento y verifique si
cumple con los siguientes criterios para ser considerada una contraseña segura:
- Debe tener al menos 8 caracteres.
- Debe contener al menos una letra mayúscula.
- Debe contener al menos una letra minúscula.
- Debe contener al menos un número.
- Debe contener al menos un carácter especial de la siguiente lista: @$!%*?&.
La función debe devolver true si la contraseña cumple con todos los criterios y false en caso contrario.
*/

const validarContraseña = (password: string): boolean => {
  let resultado: boolean = true

  //regex
  const tieneMayuscula = (password: string) => /[A-Z]/.test(password)
  const tieneMinuscula = (password: string) => /[a-z]/.test(password)
  const tieneNumero = (password: string) => /[0-9]/.test(password)
  const tieneCaracterEspecial = (password: string) => /[@$!%*?&]/.test(password)

  if (
    password.length < 8 ||
    !tieneMayuscula(password) ||
    !tieneMinuscula(password) ||
    !tieneNumero(password) ||
    !tieneCaracterEspecial(password)

    //hay que llamar a las funciones arrow de arriba pasando el param password
  ) {
    resultado = false
  }

  return resultado
}

console.log("Validador de contraseña: ", validarContraseña("hojjjjjjjjj3la&A"))

/*Reto 3
Operaciones con Matrices:
Escribe una función llamada sumarMatrices que tome dos matrices como argumentos y
devuelva una nueva matriz que sea el resultado de la suma de las dos matrices de entrada.
Asegúrate de manejar correctamente los casos en los que las matrices no tengan las mismas
dimensiones para poder realizar la operación de suma. Las matrices se representan como
arrays bidimensionales de números.*/

const matriz1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
const matriz2 = [[2, 5], [8, 44, 3], [2]]
// const sumarMatrices = (array1: number[][], array2: number[][]): number[] => {
// let arr1: number[] = []
// let arr2: number[] = []
// let resultado: number = 0
// matriz1.forEach((number) => {
//   number.forEach((cifra) => {
//     resultado += cifra
//     arr1.push(resultado)
//   })
// })

// matriz2.forEach((number) => {
//   number.forEach((cifra) => {
//     resultado += cifra
//     arr2.push(resultado)
//   })
// })
// return resultado

//no, porque está sumando todos los valores y devuelve un número

const sumarMatrices = (array1: number[][], array2: number[][]): number[][] => {
  const resultado: number[][] = []

  array1.forEach((row, i) => {
    const fila: number[] = []

    row.forEach((element, j) => {
      const num1 = element || 0 //si no existe se toma como 0
      const num2 = (array2[i] && array2[i][j]) || 0 // Si el segundo número no existe, se toma como 0
      fila.push(num1 + num2)
    })
    resultado.push(fila)
  })

  return resultado
}

console.log("sumarMatrices", sumarMatrices(matriz1, matriz2))

/*Reto 4
Generación de Contraseñas Aleatorias:
Escribe una función llamada generarContraseña que tome un parámetro longitud de tipo
number y devuelva una cadena aleatoria de esa longitud que cumpla con los siguientes
requisitos:
● Debe contener una combinación de letras mayúsculas y minúsculas.
● Debe contener al menos un número.
● Debe contener al menos un carácter especial de la siguiente lista: !@#$%^&*.
*/

const generarContraseña = (longitud: number): string => {
  let pass: string = ""
  const characters: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
  const charactersLength: number = characters.length
  let counter: number = 0
  while (counter < longitud) {
    pass += characters.charAt(Math.floor(Math.random() * charactersLength))
    //charAt es un método de string que se usa para obtener el carácter en una posición específica dentro de un string
    //en este caso es random
    counter += 1
  }

  return pass
}

console.log(generarContraseña(12))

/*Reto 5
Validación de Direcciones de Correo Electrónico:
Escribe una función llamada validarCorreoElectrónico que tome una cadena como argumento y
verifique si es una dirección de correo electrónico válida según el siguiente patrón:
- Debe comenzar con una cadena que no contenga espacios ni símbolos especiales.
- Debe contener un símbolo '@' seguido de una cadena que no contenga espacios ni símbolos
especiales.
- Después del símbolo '@', debe contener un punto '.' seguido de una cadena que no contenga
espacios ni símbolos especiales.
- La función debe devolver true si la cadena cumple con el patrón de una dirección de correo
electrónico válida y false en caso contrario.
*/

let email:string = "ana@gmail.com"
let caracteresESpeciales:string = "!@#$%^&*""

if (!email.includes(" ")){
  console.log("correcto")
}

/*Reto 6
Cifrado César:
Escribe una función llamada cifradoCesar que tome dos parámetros: una cadena de texto y un
número que represente el desplazamiento del cifrado César. La función debe cifrar la cadena de texto
utilizando el cifrado César con el desplazamiento especificado y devolver la cadena cifrada. El cifrado
César consiste en desplazar cada letra en el alfabeto un número fijo de posiciones hacia la derecha. Si
la letra alcanza el final del alfabeto, continúa desde el principio. Los números y otros caracteres no
deben ser cifrados.*/

/*Reto 7
Juego de cartas
● El objetivo es usar arrays en TypeScript para representar un mazo de cartas.
● Instrucciones:
● 1. Crea un nuevo archivo TypeScript.
● 2. Crea un array que represente un mazo de cartas.
● 3. El array debe tener 52 cartas, cada una con un palo y un valor.
● 4. Crea una función que baraja el mazo.
● 5. Crea una función que reparte una carta del mazo.
● 6. Prueba las funciones.
*/

/*Reto 8
Extraer Valor Aleatorio de un Array en TypeScript
Desarrollar una función en TypeScript utilizando arrow function que reciba un arreglo como entrada
y devuelva un valor aleatorio del arreglo. La función deberá calcular un índice aleatorio utilizando
la función Math.random() y el tamaño del arreglo proporcionado. Una vez calculado el índice
aleatorio, se utilizará para extraer un elemento aleatorio del arreglo.
Tu tarea es crear una función que realice este proceso de manera eficiente y precisa, asegurando que
el valor extraído sea uno de los elementos del arreglo.
Uso de Ejemplo:
const authors = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];
const randomAuthor = getRandomValueFromArray(authors);
console.log("Autor Aleatorio:", randomAuthor);
*/

/*Reto 9
Extracción de Subarray Aleatorio en TypeScript
Desarrollar una función getRandomSubarray en TypeScript que extraiga un subarreglo
completamente aleatorio de un arreglo dado. El subarreglo aleatorio debe tener una longitud
especificada y estar compuesto por elementos seleccionados al azar del arreglo original.
Tu tarea es crear una función que implemente este proceso de manera eficiente y precisa,
asegurando que el subarreglo generado sea una muestra representativa y aleatoria del arreglo
original
Ejemplo de Uso:
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomSubarray = getRandomSubarray(originalArray, 4);
console.log("Subarreglo Aleatorio:", randomSubarray)*/
