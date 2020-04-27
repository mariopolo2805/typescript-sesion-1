# Día 1 - Typescript | Ejercicios

A continuación vamos a clonarnos el repositorio con los ejercicios de TypeScript.

La URL con los ejercicios es: **TODO**

Debemos crearnos una rama con nuestro nombre `typescript-sesion-1_Nombre_Apellido`. Y trabajar sobre dicha rama, para subirla a GitLab y solicitar una *Pull Request* (*Merge Request*) a `master`.

En cada directorio encontraremos un `fichero.ts` que debemos de rellenar con el código que se pide en cada ejercicio, para compilarlo con `tsc fichero.ts`, y luego subir a GitLab ambos ficheros (el ejercicio resuelto y el fichero de JS compilado).

Se requiere ser lo más específico posible en cuanto a **tipos** y uso estricto de TypeScript.

### Ejercicio 1 → El rectángulo

Debes crear una **clase** para definir un rectángulo con dos propiedades:

1. Base
2. Altura

También debe tener un método para calcular el área (Base * Altura), este método deberá devolver un valor numérico.

Por ser el primer ejercicio, vamos a dejarte una base para que la completes:

```tsx
class Rectangulo {
  private ?: ?;
  private ?: ?;

  constructor(?: ?, ?: ?) {
    this.? = ?;
    this.? = ?;
  }
  public calcularArea() {
    return this.? * this.?;
  }
}

console.log('Base del RECTANGULO-1', new Rectangulo(2, 6).calcularArea());

console.log('Base del RECTANGULO-2', new Rectangulo(3, 9).calcularArea());
```

Cuando lo tengas listo, compila tu TypeScript y comprueba que el fichero generado es cómo el fichero solución. También puedes ejecutar con NODE para comprobar el resultado:

```bash
node ejercicio1.js
Base del RECTANGULO-1 12
Base del RECTANGULO-2 27
```

### Ejercicio 2 → El Camaleón

Dado el código siguiente, tendremos que crear una interfaz que sirva después para tipar y validar el objeto.

```jsx
const camaleon0 = {
  tipo: "reptil",
  peculiaridad: "camuflarse",
  sizecm: 20
};

console.log('CAMALEON', camaleon0);
```

Pista:

```tsx
interface Animal {
  // ?
}

const camaleon1 : Animal = {
  // ?
}

console.log('CAMALEON', camaleon1);
```

Cuando lo tengas listo, compila tu TypeScript y comprueba que el fichero generado es cómo el fichero solución. También puedes ejecutar con NODE para comprobar el resultado:

```bash
node ejercicio2.js
CAMALEON { tipo: 'reptil', peculiaridad: 'camuflarse', sizecm: 20 }
CAMALEON { tipo: 'reptil', peculiaridad: 'camuflarse', sizecm: 20 }
```

### Ejercicio 3 → Mi función

La siguiente función contendrá parámetros obligatorios, opcionales y otros serán por defecto si no le pasamos ninguno.

Deberás adaptarlos de la siguiente forma:

1. nombre → obligatorio y tipo `string`.
2. edad → opcional y tipo `number`.
3. arma → por defecto será  'pistola' (adivina el tipo).

```jsx
function myFunction(nombre, edad, arma) {
  console.log(nombre + ' tiene ' + edad + ' años y usa ' + arma);
}

myFunction('Spiderman', 21, 'telarañas');
myFunction('Viuda Negra', 70);
myFunction('Bucky Barnes');
```

Cuando lo tengas listo, compila tu TypeScript y comprueba que el fichero generado es cómo el fichero solución. También puedes ejecutar con NODE para comprobar el resultado:

```bash
node ejercicio3.js
Spiderman tiene 21 años y usa telarañas
Viuda Negra tiene 70 años y usa pistola
Bucky Barnes tiene undefined años y usa pistola
```

### Ejercicio 4 → Clases y herencia

Te vamos a dejar declarada la **clase** `Videoconsola`, de manera que puedas extender dicha clase en 3 videoconsolas diferentes: Xbox, PlayStation y GameBoy.

- La Xbox y la PlayStation deben llevar un atributo **booleano** que indique si tiene modoOnline
- La GameBoy debe llevar un atributo **numérico** que indique el número de pilas para funcionar numPilas
- La GameBoy es la única videoconsola portátil.
- La PlayStation tendrá un atributo que indique su precioModoOnline numérico, fijado a 30 por defecto.

Genera las clases necesarias y crea 4 videoconsolas, e imprime mediante `console.log` cada una de ellas.

```jsx
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
```

Cuando lo tengas listo, compila tu TypeScript y comprueba que el fichero generado es cómo el fichero solución. También puedes ejecutar con NODE para comprobar el resultado:

```bash
node ejercicio4.js
Xbox {
  nombre: 'Xbox 360',
  color: 'Blanca',
  portatil: false,
  modoOnline: true
}
PlayStation {
  nombre: 'Play Station 2',
  color: 'Negra',
  portatil: false,
  modoOnline: false,
  precioModoOnline: 0
}
PlayStation {
  nombre: 'Play Station 4',
  color: 'Negra',
  portatil: false,
  modoOnline: true,
  precioModoOnline: 30
}
GameBoy {
  nombre: 'Game Boy Color',
  color: 'Roja',
  portatil: true,
  numPilas: 2
}
```

Cuando tengas todos los ejercicios listos, recuerda subirlos al repositorio de **GitLab** y abrir la *Merge Request*, además de notificar a tu tutor.