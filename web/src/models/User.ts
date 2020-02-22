type UserProps = {
  name?: string;
  age?: number;
};

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};
  constructor(private data: UserProps) {}
  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventNmae: string, callback: Callback): void {
    const handlers = this.events[eventNmae] || [];
    handlers.push(callback);
    this.events[eventNmae] = handlers;
  }

  trigger(eventNmae: string): void {
    const handlers = this.events[eventNmae];
    handlers.map(callback => {
      callback();
    });
  }

  // fetch(): Promise {
  //   return;
  // }
}
