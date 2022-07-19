
(() => {

    type Hero = {
        name:string,
        age?:number,
        power:number[],
        getName?: () => string

    }


    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        power: [1, 2]
    };

    let superman:Hero = {
        name: 'Calk Ken',
        age: 60,
        power: [3],
        getName(){
            return this.name;
        }
    };
})();
