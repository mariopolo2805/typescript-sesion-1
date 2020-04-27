var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Videoconsola = /** @class */ (function () {
    function Videoconsola(nombre, color, portatil) {
        if (portatil === void 0) { portatil = false; }
        this.nombre = nombre;
        this.color = color;
        this.portatil = portatil;
    }
    return Videoconsola;
}());
var Xbox = /** @class */ (function (_super) {
    __extends(Xbox, _super);
    function Xbox(nombre, color, portatil, modoOnline) {
        if (portatil === void 0) { portatil = true; }
        var _this = _super.call(this, nombre, color, portatil) || this;
        _this.modoOnline = modoOnline;
        return _this;
    }
    return Xbox;
}(Videoconsola));
var PlayStation = /** @class */ (function (_super) {
    __extends(PlayStation, _super);
    function PlayStation(nombre, color, portatil, modoOnline, precioModoOnline) {
        if (portatil === void 0) { portatil = true; }
        if (precioModoOnline === void 0) { precioModoOnline = 30; }
        var _this = _super.call(this, nombre, color, portatil) || this;
        _this.modoOnline = modoOnline;
        _this.precioModoOnline = precioModoOnline;
        return _this;
    }
    return PlayStation;
}(Videoconsola));
var GameBoy = /** @class */ (function (_super) {
    __extends(GameBoy, _super);
    function GameBoy(nombre, color, portatil, numPilas) {
        if (portatil === void 0) { portatil = true; }
        var _this = _super.call(this, nombre, color, portatil) || this;
        _this.numPilas = numPilas;
        return _this;
    }
    return GameBoy;
}(Videoconsola));
var xbox = new Xbox('Xbox 360', 'Blanca', false, true);
var playstation2 = new PlayStation('Play Station 2', 'Negra', false, false, 0);
var playstation4 = new PlayStation('Play Station 4', 'Negra', false, true);
var gameboy = new GameBoy('Game Boy Color', 'Roja', undefined, 2);
console.log(xbox);
console.log(playstation2);
console.log(playstation4);
console.log(gameboy);
