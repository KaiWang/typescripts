import { User } from './models/User';

let user = new User({ id: 2, age: 40 });
user.set({ id: 2, age: 41 });
user.fetch();
console.log(user);

user.save();
console.log(user);
