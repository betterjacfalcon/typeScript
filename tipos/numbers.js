"use strict";
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
