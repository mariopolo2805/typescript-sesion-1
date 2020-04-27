function myFunction(nombre: string, edad?: number, arma: string = 'pistola') {
  console.log(nombre + ' tiene ' + edad + ' años y usa ' + arma);
}

myFunction('Spiderman', 21, 'telarañas');
myFunction('Viuda Negra', 70);
myFunction('Bucky Barnes');