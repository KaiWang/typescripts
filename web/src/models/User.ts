import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

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
}
