import { User } from '../models/User';

export class UserForm {
  constructor(public parent: Element, public model: User) {}

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

  bindEvent(fragment: DocumentFragment): void {
    const eventMap = this.eventsMap();
    for (let eventKey in eventMap) {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach((element: Element) => {
        element.addEventListener(eventName, eventMap[eventKey]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvent(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
