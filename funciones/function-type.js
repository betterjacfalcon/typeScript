"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo esta salvado!';
    //let myfunction: number;
    //let myfunction: (y:number, z:number) => number;
    //let myfunction:(y:string) => string
    let myfunction;
    //myfunction = 10;    
    //console.log(myfunction);
    //myfunction=addNumber    
    //console.log(myfunction(1, 3));
    //myfunction=greet    
    //console.log(myfunction('Alejandra'));
    myfunction = saveTheWorld;
    console.log(myfunction());
})();
