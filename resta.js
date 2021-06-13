"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resta = void 0;
var Resta = /** @class */ (function () {
    function Resta(valor1, valor2) {
        this.num1 = valor1;
        this.num2 = valor2;
    }
    Resta.prototype.resultado = function () {
        return this.num1 - this.num2;
    };
    return Resta;
}());
exports.Resta = Resta;
