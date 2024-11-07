console.log('========');
console.log('4. Operadores aritméticos');
console.log('========');
console.log();
//clase 7
//https://platzi.com/home/clases/10266-javascript/70338-operadores-aritmeticos/


//numeros
const entero = 42;
const decimal = 3.14;

//notacion cientifica, numero infinito, NaN no es un numero
const cientifico = 5e3;
const infinito = Infinity;
const noEsUnNumero = NaN;

//operadores aritmeticos
const suma = 3 + 4;
const resta = 4 - 4;
const mutiplicacion = 4 * 7;
const division = 16 / 2;
const modulo = 15 % 8;
const exponenciacion = 2 ** 3;
const resultado = 0.1 + 0.2;

//Raíz cuadrada, valor absoluto, aleatorio
const raizCuadrada = Math.sqrt(16);
const valorAbsoluto = Math.abs(-7);
const aleatorio = Math.random();



console.log('Numeros')
console.log('========');
console.log('Entero     : ', entero);
console.log('Decimal    : ', decimal);
console.log('Cientifico : ', cientifico);
console.log('Infinito   : ', infinito);
console.log('NaN        : ', noEsUnNumero);
console.log(typeof entero, typeof decimal);
console.log()


console.log('Operadores Aritmeticos')
console.log('========');
console.log('Suma           : ', suma);
console.log('Resta          : ', resta);
console.log('Multiplicacion : ', mutiplicacion);
console.log('Division       : ', division);
console.log('Modulo         : ', modulo);
console.log('Exponenciacion : ', exponenciacion);
console.log()


console.log('Suma de decimales ')
console.log('========');
console.log('1. JavaScript usa varios decimales para la suma')
console.log('2. Se puede indicar cuantos decimales se puede usar')
console.log('3. si se usa el === operador de comparacion de tipo de datos y valor dara falso')
console.log()

console.log('Resultado de la suma de 0.1 y 0.2 : ', resultado);
console.log(resultado);//1.
console.log(resultado.toFixed(1));//2.
console.log(resultado === 0.3);//3.


console.log('Operaciones avanzadas')
console.log('========');
console.log('Raiz Cuadrada    : ', raizCuadrada);
console.log('Valor Absoluto   : ', valorAbsoluto);
console.log('Aleatorio        : ', aleatorio);
