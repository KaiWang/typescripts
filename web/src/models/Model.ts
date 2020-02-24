import { AxiosPromise } from 'axios';

interface ModelAttribues<T> {
  get<S extends keyof T>(key: S): T[S];
  getAll(): T;
  set(update: T): void;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise<T>;
  save(data: T): AxiosPromise<T>;
}

export interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventNmae: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(private attribute: ModelAttribues<T>, private syncs: Sync<T>, private events: Events) {}

  get(key: keyof T) {
    return this.attribute.get(key);
  }
  set(update: T): void {
    this.attribute.set(update);
  }
  get on() {
    return this.events.on;
  }
  trigger(eventName: string) {
    this.events.trigger(eventName);
  }
  fetch(id: number): AxiosPromise<T> {
    return this.syncs.fetch(id);
  }
  save(data: T): AxiosPromise<T> {
    return this.syncs.save(data);
  }
}
