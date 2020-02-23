export type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};
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
}
