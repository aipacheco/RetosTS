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
  
  const sumarMatrices = (array1, array2) => {
    let patatas= []
    let resultado = []
    let resultado2= []
  
    // array1.map((valor) => {
    //   console.log("el valor de mentira 1", valor)
    //   valor.map((clave) => {
    //     resultado.push(clave)
    //     // resultado= []
    //   })
    // })
    // array2.map((valor) => {
    //   console.log("el valor de mentira 2", valor)
    //   valor.map((clave) => {
    //     resultado2.push( clave)
    //     // resultado = []
    //   })
    // })
  
    array1.map((x, i) => {
      x = array1[x][i] + array2[x][i]
      console.log("otra cosa más",x)
      patatas.push(x)
    //   console.log("iteracion de patatas",patatas)
  
    })
  
    console.log("porque patatas", patatas)
    return patatas
  }
  
  sumarMatrices(matriz1, matriz2)