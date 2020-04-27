var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
console.log('Base del RECTANGULO-1', new Rectangulo(2, 6).calcularArea());
console.log('Base del RECTANGULO-2', new Rectangulo(3, 9).calcularArea());
