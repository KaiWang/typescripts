import { User } from '../models/User';

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  onSetAgeButtonClick = () => {
    console.log('age update');
    this.model.setRandomAge();
    console.log(this.model);
  };

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeButtonClick
    };
  }

  template(): string {
    return `
        <div>
            <h1>User Form</h1>
            <div>User Name: ${this.model.get('name')}</div>
            <div>User Name: ${this.model.get('age')}</div>
            <input/>
            <button>Click Me</button>
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
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvent(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
