import { User } from '../models/User';
import { View } from './View';

export class UserForm extends View<User> {
  onSetAgeButtonClick = () => {
    this.model.setRandomAge();
    this.render();
  };

  onSetNameButtonClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      this.model.set({ name: input.value });
      this.render();
    }
  };

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeButtonClick,
      'click:.set-name': this.onSetNameButtonClick
    };
  }

  template(): string {
    return `
        <div>
            <h1>User Form</h1>
            <div>User Name: ${this.model.get('name')}</div>
            <div>User Name: ${this.model.get('age')}</div>
            <input/>
            <button class='set-name'>Change Name</button>
            <button class='set-age'>Set Random Age</button>
        </div>
        `;
  }
}
