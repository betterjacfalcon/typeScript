"use strict";
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
