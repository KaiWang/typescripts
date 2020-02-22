import axiso, { AxiosResponse } from 'axios';
type UserProps = {
  id?: number;
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

  fetch(): void {
    axiso.get(`http://localhost:3000/users/${this.get('id')}`).then((response: AxiosResponse<UserProps>): void => {
      this.set(response.data);
    });
  }

  save(): void {
    this.get('id') ? axiso.put(`http://localhost:3000/users/${this.get('id')}`, this.data) : axiso.post(`http://localhost:3000/users`, this.data);
  }

  static async fetch(id: number): Promise<UserProps> {
    return await axiso.get(`http://localhost:3000/users/${id}`);
  }
}
