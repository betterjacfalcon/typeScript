(( ) => {

    type Heroes={
        name:string,
        weapon:string
    }

    const superman: Heroes ={
        name: 'Klan Ken',
        weapon: 'Volar'
    }

    const batman: Heroes ={
        name: 'Alejandra',
        weapon: 'Vampiro'
    }

    const hulk: Heroes ={
        name: 'Martin',
        weapon: 'Piedras'
    }

    const heroes:Heroes[] =[superman, batman, hulk];

    for (const heroe of heroes) {
        console.log(heroe);
        console.log(heroe.name, heroe.weapon);
    }
    
})( )