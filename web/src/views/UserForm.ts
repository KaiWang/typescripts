export class UserForm {
  constructor(public parent: Element) {}

  onButtonClick(): void {
    console.log('Hi There');
  }
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick
    };
  }

  template(): string {
    return `
        <div>
            <h1>User Form</h1>
            <input/>
            <button>Click Me</button>
        </div>
        `;
  }

  bindEvent(fragment: DocumentFragment): void {
    const eventMap = this.eventsMap();
    for (let eventKey in eventMap) {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach(element => {
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
