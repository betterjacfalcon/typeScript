(() => {

    type Hero = {
        name:string,
        age?:number,
        power:number[],
        getName?: () => string

    }

    let variableMultiple: (string|number|Hero) = 'Fernando';

    console.log(variableMultiple);

    variableMultiple = 20;

    console.log(variableMultiple);

    variableMultiple = {
        name:'alejandra',
        age:33,
        power: [1]

    };

    console.log(variableMultiple);



})();
