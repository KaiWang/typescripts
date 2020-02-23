import { User } from './models/User';

let user = new User({ id: 2, age: 40 });

console.log(user);

user.events.on('change', () => {
  console.log('change');
});
user.events.trigger('change');
const id = user.attribute.get('id');
console.log(id);
console.log(user.syncs.fetch(1));
console.log(user);
