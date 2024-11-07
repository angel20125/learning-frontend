console.log('========');
console.log('5.Conversión de tipos: Type Casting y Coerción');
console.log('========');
console.log();
//clase 8
//https://platzi.com/home/clases/10266-javascript/70367-conversion-de-tipos-type-casting-y-coercion/


//casting
//Casting es la conversion de datos realizada por el programador
console.log('Casting: convertir un string a un numero entero')
console.log('=======')
let numeroString = '10';
let numero = parseInt(numeroString);
console.log('Numero string a numero: ', numero);
console.log('Tipo de datos => ', typeof(numero))


console.log('Casting: Convertir un string a un numero decimal');
console.log('=======');
let numeroFloat = '3.14';
let numeroDecimal = parseFloat(numeroFloat);
console.log('Resultado =>')
console.log('Tipo de datos => ', typeof numeroDecimal);


//Coercion
//Es la conversion de datos realiza por el lenguaje
console.log('Coercion: Convertir un numero a un string');
console.log('=======');
let varNumber = 10;
let varBooleean = true
let varCoercion = varNumber + varBooleean;
console.log('C: ', varCoercion);
