export abstract class View<T> {
  constructor(public parent: Element, public model: T) {}
  abstract template(): string;
  abstract eventsMap(): { [key: string]: () => void };

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
