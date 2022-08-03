(() => {

    type Heroes = {
        nick: string;
        iroman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const heroes:Heroes = {
        nick: 'Samuel Jackson',
        iroman: 'Robert Downey',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.111
    }

    /*const{poder, vision}=heroes;
    console.log(poder.toFixed(2), vision.toUpperCase());*/

    const printHeroes = ({nick, ...resto}:Heroes
    ) => {
        console.log(nick, resto);
    }

    printHeroes(heroes);

    const heroesArreglo :[string, boolean, number]= ['Hulks', true, 2];

    const [, superman, ] = heroesArreglo;
    console.log({superman});

})()