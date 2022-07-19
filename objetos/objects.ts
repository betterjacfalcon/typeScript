(( ) => {
    
    let flash: {name:string, age?:number, power:string[], getName?:() => string}  = {
        name: 'Barry Allen',
        age: 24,
        power: ['Super Velocidad', 'Viajar en el tiempo']
    } 

    /*Objero basico todo lo que esta definido aqui debe estar en la 
    //Declaracion de let frash */
    flash = {
        name: 'Clark Kent',                
        power: ['Super Fuerza'],
        getName(){
            return this.name;
        }
    }

    console.log(flash);

})( )