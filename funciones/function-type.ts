(( ) => {
    const addNumber = ( a:number, b:number) => a + b;
    const greet = (name:string) => `Hola ${name}`
    const saveTheWorld = () => 'El mundo esta salvado!'

    //let myfunction: number;
    //let myfunction: (y:number, z:number) => number;
    //let myfunction:(y:string) => string
    let myfunction:() => string

    //myfunction = 10;    
    //console.log(myfunction);

    //myfunction=addNumber    
    //console.log(myfunction(1, 3));

    //myfunction=greet    
    //console.log(myfunction('Alejandra'));

    myfunction=saveTheWorld    
    console.log(myfunction());

  

 })( )