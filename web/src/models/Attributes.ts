export class Attributes<T> {
  constructor(private data: T) {}
  get<S extends keyof T>(key: S): T[S] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
