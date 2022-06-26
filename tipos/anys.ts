(( ) => {
//Evitar este tipo de datos, no usarlo 
let opcion:any = 123;
let  exist;
let power;

opcion = 'carvajal';
console.log(opcion.charAt(0));

opcion = 129.766542323;
console.log(opcion.toFixed(2));

opcion = 'rodriguez';
console.log((opcion as string).charAt(3));

opcion = 1789.766542323;
console.log(<number>opcion.toFixed(4));

console.log(exist);
console.log(power);

})( )