import { User } from './models/User';

let user = new User({ id: 2, age: 40 });
user.set({ id: 2, age: 41 });

console.log(user);

user.events.on('change', () => {
  console.log('change');
});
user.events.trigger('change');
console.log(user.syncs.fetch(1));
console.log(user);
