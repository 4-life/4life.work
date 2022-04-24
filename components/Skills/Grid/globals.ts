const mouse = {
  x: 0,
  y: 0,
};
const track = {
  x: 0,
  y: 0,
};
const downTarget = {
  x: 0,
  y: 0,
};
const skill = null;

export default class GlobalRef<T> {
  private readonly sym: symbol;

  constructor(uniqueName: string) {
    this.sym = Symbol.for(uniqueName);
  }

  get value() {
    return (global as any)[this.sym] as T;
  }

  set value(value: T) {
    (global as any)[this.sym] = value;
  }
}

const databaseConn = new GlobalRef<Record<string, any>>('app.database');

databaseConn.value = {
  mouse,
  track,
  downTarget,
  skill,
};

export const database = databaseConn.value;
