function myFunction(nombre, edad, arma) {
    if (arma === void 0) { arma = 'pistola'; }
    console.log(nombre + ' tiene ' + edad + ' años y usa ' + arma);
}
;
myFunction('Spiderman', 21, 'telarañas');
myFunction('Viuda Negra', 70);
myFunction('Bucky Barnes');
