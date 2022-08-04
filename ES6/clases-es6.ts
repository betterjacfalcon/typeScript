(( ) => {
    class Heroes{
        name;
        power;

        constructor(name='no name', power=0){
            this.name = name;
            this.power = power;
        }
    
    }

    class FlyHeroes extends Heroes{
        flying;
        constructor(name='no name', power=1){
           super(name, power);
           this.flying = true;
        }
    
    
    }

    const hulk = new Heroes('Hulk', 9001);
    const falcon = new FlyHeroes('falcon', 50);
    console.log(hulk);
    console.log(falcon);
        
})( )