"use strict";
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
