console.log('========');
console.log('7.Operadores logicos');
console.log('========');
console.log();

//clase 10
//https://platzi.com/home/clases/10266-javascript/70340-operadores-logicos/


// operadores logicos
// a &&  b operador and , solo es verdadero si "a" y "b" son true
//a ||  b operador or, solo es falso si "a" y "b" son falso
// ! operadore de negacion, si "a" = true entonces "!a" = false

let a = 10
let b = 20
let c = '10'

console.log('a == b && a === c  =>', a == b && a === c); //false
console.log('a != b && a === c  =>', a == b && a === c); //true
console.log('!( a === c )       =>', !(a === c)); //true
