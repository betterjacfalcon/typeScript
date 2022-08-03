"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(function () {
    var heroes = {
        nick: 'Samuel Jackson',
        iroman: 'Robert Downey',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.111
    };
    var printHeroes = function (_a) {
        var nick = _a.nick, resto = __rest(_a, ["nick"]);
        console.log(nick, resto);
    };
    printHeroes(heroes);
    var heroesArreglo = ['Hulks', true, 2];
    var superman = heroesArreglo[1];
    console.log({ superman: superman });
})();
(function () {
    var nombre = 'alejandra';
    var getName = function () {
        console.log('viejo get name');
    };
})();
//# sourceMappingURL=main.js.map