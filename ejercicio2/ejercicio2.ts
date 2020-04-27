const camaleon0 = {
  tipo: "reptil",
  peculiaridad: "camuflarse",
  sizecm: 20
};

console.log('CAMALEON', camaleon0);

interface Animal {
  tipo: string;
  peculiaridad: string;
  sizecm: number;
}

const camaleon1 : Animal = {
  tipo: "reptil",
  peculiaridad: "camuflarse",
  sizecm: 20
}

console.log('CAMALEON', camaleon1);