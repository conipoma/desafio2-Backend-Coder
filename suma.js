"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suma = void 0;
var Suma = /** @class */ (function () {
    function Suma(valor1, valor2) {
        this.num1 = valor1;
        this.num2 = valor2;
    }
    Suma.prototype.resultado = function () {
        return this.num1 + this.num2;
    };
    return Suma;
}());
exports.Suma = Suma;
