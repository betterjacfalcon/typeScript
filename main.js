"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let fuerza;
    (function (fuerza) {
        fuerza[fuerza["acuaman"] = 0] = "acuaman";
        fuerza[fuerza["batman"] = 1] = "batman";
        fuerza[fuerza["flash"] = 5] = "flash";
        fuerza[fuerza["superman"] = 100] = "superman";
    })(fuerza || (fuerza = {}));
    const FuerzaAcuaman = fuerza.acuaman;
    const FuerzaBatman = fuerza.batman;
    const FuerzaFlash = fuerza.flash;
    const FuerzaSuperman = fuerza.superman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    console.log({ apocalipsis });
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '----'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '----'}`;
        }
    };
    const name = fullName('tony');
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('tony');
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('tony', 'start');
    console.log(name);
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')} `;
    };
    const superman = fullName('clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo esta salvado!';
    let myfunction;
    myfunction = saveTheWorld;
    console.log(myfunction());
})();
(() => {
    const hero = 'Peter Carvajal';
    function returnName() {
        return hero;
    }
    const batiSenaActivada = () => 'Batisena Activada !';
    console.log(returnName());
    console.log(batiSenaActivada());
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        power: ['Super Velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'Clark Kent',
        power: ['Super Fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        power: [1, 2]
    };
    let superman = {
        name: 'Calk Ken',
        age: 60,
        power: [3],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let variableMultiple = 'Fernando';
    console.log(variableMultiple);
    variableMultiple = 20;
    console.log(variableMultiple);
    variableMultiple = {
        name: 'alejandra',
        age: 33,
        power: [1]
    };
    console.log(variableMultiple);
})();
(() => {
    let opcion = 123;
    let exist;
    let power;
    opcion = 'carvajal';
    console.log(opcion.charAt(0));
    opcion = 129.766542323;
    console.log(opcion.toFixed(2));
    opcion = 'rodriguez';
    console.log(opcion.charAt(3));
    opcion = 1789.766542323;
    console.log(opcion.toFixed(4));
    console.log(exist);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    numbers.push(true);
    numbers.push(11);
    console.log(numbers);
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(numeros);
    const apellidos = ['carvajal', 'aguilar', 'rodriguez', 'velasquez'];
    apellidos.forEach(a => console.log(a.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log(isSuperman);
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Esto es un error');
    console.log('Hola mundo');
})();
(() => {
    let nada = undefined;
    console.log(nada);
})();
(() => {
    let planta = 10;
    console.log(planta);
    const calculo = 20;
    if (planta < calculo) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    planta = Number('55A');
    console.log({ planta });
})();
(() => {
    var _a;
    const peter = 'Peter';
    const carvajal = "Carvajal";
    const martin = `Martin`;
    console.log(`I'm ${carvajal}`);
    console.log("I'm " + martin);
    console.log(peter.toUpperCase());
    console.log(((_a = peter[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No esta presente");
})();
(() => {
    const cromosomas = ['cromosoma', 1, true];
    cromosomas[0] = 'cromosoma';
    cromosomas[1] = 2;
    cromosomas[2] = false;
    console.log(cromosomas);
})();
(() => {
    function callBatman() {
    }
    const callSuperman = () => {
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map