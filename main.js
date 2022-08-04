"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    var Heroes = (function () {
        function Heroes(name, power) {
            if (name === void 0) { name = 'no name'; }
            if (power === void 0) { power = 0; }
            this.name = name;
            this.power = power;
        }
        return Heroes;
    }());
    var FlyHeroes = (function (_super) {
        __extends(FlyHeroes, _super);
        function FlyHeroes(name, power) {
            if (name === void 0) { name = 'no name'; }
            if (power === void 0) { power = 1; }
            var _this = _super.call(this, name, power) || this;
            _this.flying = true;
            return _this;
        }
        return FlyHeroes;
    }(Heroes));
    var hulk = new Heroes('Hulk', 9001);
    var falcon = new FlyHeroes('falcon', 50);
    console.log(hulk);
    console.log(falcon);
})();
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
    var superman = {
        name: 'Klan Ken',
        weapon: 'Volar'
    };
    var batman = {
        name: 'Alejandra',
        weapon: 'Vampiro'
    };
    var hulk = {
        name: 'Martin',
        weapon: 'Piedras'
    };
    var heroes = [superman, batman, hulk];
    for (var _i = 0, heroes_1 = heroes; _i < heroes_1.length; _i++) {
        var heroe = heroes_1[_i];
        console.log(heroe);
        console.log(heroe.name, heroe.weapon);
    }
})();
(function () {
    var nombre = 'alejandra';
    var getName = function () {
        console.log('viejo get name');
    };
})();
//# sourceMappingURL=main.js.map