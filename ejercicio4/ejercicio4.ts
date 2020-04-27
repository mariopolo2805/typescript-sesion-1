class Videoconsola {
  nombre: string;
  color: string;
  portatil: boolean;

  constructor(nombre: string, color: string, portatil: boolean = false) {
    this.nombre = nombre;
    this.color = color;
    this.portatil = portatil;
  }
}

class Xbox extends Videoconsola {
  // ?
}

class PlayStation extends Videoconsola {
  // ?
}

class GameBoy extends Videoconsola {
  // ?
}

const xbox: Xbox = new Xbox('Xbox 360', 'Blanca', false, true);
const playstation2: PlayStation = new PlayStation('Play Station 2', 'Negra', false, false, 0);
const playstation4: PlayStation = new PlayStation('Play Station 4', 'Negra', false, true);
const gameboy: GameBoy = new GameBoy('Game Boy Color', 'Roja', undefined, 2);

console.log(xbox);
console.log(playstation2);
console.log(playstation4);
console.log(gameboy);