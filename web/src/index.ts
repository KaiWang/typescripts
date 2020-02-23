import { User } from './models/User';

let user = new User({ id: 2, age: 40 });

console.log(user);

user.events.on('change', () => {
  console.log('change');
});
user.trigger('change');

console.log(user.fetch(1));
console.log(user);

console.log('=======================');
const color = {
  color: 'red',
  printColor() {
    console.log(this.color);
  }
};
color.printColor();
const p = color.printColor;
p();
console.log('=======================');
