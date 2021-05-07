// Javascript

/*
let a = 12;
console.log(a);
a++;
console.log(a);
let b = a + 3;
console.log(b);

let fna = function(a, fnb){
  let b = a*2;
  console.log('fn a', b);
  return fnb(b);
};
let fnb = function(b) {
  console.log('fn b', b);
  return b*2;
}
console.log('-------------');
let x = 12;
console.log(x);
let y = fna(x, fnb);
console.log(y);

let z = 3;
console.log(z);
fna(z, function(b) {
  console.log(b);
});
console.log(z);
*/
// Eleva la variable en un entorno global
var a = 2;
// Eleva la variable en un entorno del contexto "{}"
let b = 2;
// Eleva la variable en un entorno del contexto "{}" y ademas es inmutable
const c = 2;
console.log(a,b,c);

for(var i =0; i<10; i++) {
  console.log(i);
}
console.log(i);
console.log(i);
for(let j = 0; j<10; j++){
  var x = j;
  let y = j;
  console.log('j es',j);
  console.log('x es',x);
  console.log('y es',y);
}

console.log('x de fuera es',x);
// console.log('y de fuera es',y); // error y es indefinido

const d = 2;//inmutable no puede cambiar su valor
d = 3; //error no se puede cambiat le valor de una constante
