import { User } from './models/User';

let user = new User({ name: 'Kai', age: 28 });
console.log(user.get('name'));
console.log(user.get('age'));

user.set({ name: 'Ryan' });
console.log(user.get('name'));
console.log(user.get('age'));

user.on('change', () => {
  console.log('clicked1');
});

user.on('change', () => {
  console.log('clicked2');
});

console.log(user);
user.trigger('change');
