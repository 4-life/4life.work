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

  get value(): T {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (global as any)[this.sym] as T;
  }

  set value(value: T) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any)[this.sym] = value;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const databaseConn = new GlobalRef<Record<string, any>>('app.database');

databaseConn.value = {
  mouse,
  track,
  downTarget,
  skill,
};

export const database = databaseConn.value;
