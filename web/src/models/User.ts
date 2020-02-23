import { Eventing, Callback } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { AxiosPromise } from 'axios';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public syncs = new Sync<UserProps>();
  public attribute: Attributes<UserProps>;

  constructor(data: UserProps) {
    this.attribute = new Attributes<UserProps>(data);
  }

  get(key: keyof UserProps) {
    return this.attribute.get(key);
  }
  set(update: UserProps): void {
    this.attribute.set(update);
  }
  get on() {
    return this.events.on;
  }
  trigger(eventName: string) {
    this.events.trigger(eventName);
  }
  fetch(id: number): AxiosPromise<UserProps> {
    return this.syncs.fetch(id);
  }
  save(data: UserProps): AxiosPromise<UserProps> {
    return this.syncs.save(data);
  }
}
