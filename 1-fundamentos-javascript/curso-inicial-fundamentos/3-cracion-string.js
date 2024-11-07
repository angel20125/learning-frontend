console.log('========');
console.log('3. Creación de string');
console.log('========');
console.log();
//clase 6
//https://platzi.com/home/clases/10266-javascript/70445-creacion-de-strings/


//creacion de string se puede usar comillas simples o dobles
let string1= 'Hola, mundo'
let string2= "JavaScript es genial"

//concatenar string
let string3 = `${string1} feliz :)`
let string4 =string1 + " " + string2

//contar string,la función length cuenta los espacios en blanco y letra
let frase = 'JavaScript es Extremadamente Genial'

// contar cantidad de caracteres en una frase
let stringLength = frase.length

// convertir string a minúscula y mayúscula
let stringLowerCase = frase.toLowerCase()
let stringUpparCase = frase.toUpperCase()

// tomar un sub-string de un strign
// la pocision inicial es 0 y para que tome la ultima sera n+1
let subString = frase.substring(0, 10)



console.log('Creacion de String')
console.log('========');
console.log('String 1: ', string1)
console.log('String 2: ', string2)
console.log()

console.log('Concataner string')
console.log('========');
console.log('String 3: ', string3)
console.log('String 4: ', string4)

console.log('Contar Caracteres')
console.log('========');
console.log('Frase : ', frase )
console.log('Cantidad de caracteres => ', stringLength)
console.log('Frase en minúscula => ', stringLowerCase);
console.log('Frase en mayúscula=> ', stringUpparCase);
console.log('Frase en substring=> ', stringUpparCase);
