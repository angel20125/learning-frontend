
console.log('========');
console.log('2. Tipos de datos en javascript');
console.log('========');
console.log();
// clase 5
//https://platzi.com/home/clases/10266-javascript/70444-tipos-de-datos-en-javascript/

// PRIMITIVOS

// string
let nombre = 'Tere';
// number
let edad = 25;
// boolean
let esMayorDeEdad = true;
// null
let noHayValor = null;
// undefined
let noDefinido = undefined;
// symbol
let simboloUnico = Symbol('único');
// bigint
let numeroGrande = 2n;




// COMPLEJOS

// object
let carro = {
	marca: 'Tesla',
	modelo: 'Model S',
};
// array
let frutas = ['manzana', 'banano', 'uvas'];

// function
function saludar() {
  console.log(' Saludando desde una función!')
}





console.log('========');
console.log('Datos primitivos');
console.log('========');
console.log('Tipo de datos primitivos')
console.log( 'String  =>  ',nombre);
console.log( 'Number  =>  ', edad);
console.log( 'Boolean =>  ', esMayorDeEdad)
console.log( 'Null    =>  ', noHayValor)
console.log( 'Undefine => ', undefined)
console.log( 'Symbol   => ', simboloUnico)
console.log( 'BigInt   => ', numeroGrande)
console.log()


console.log('========');
console.log('Datos Complejos');
console.log('========');
console.log( 'Object     => ', carro)
console.log( 'Array      => ', frutas)
console.log( 'function   => ', saludar())
console.log()
