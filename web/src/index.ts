import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: 'Ryan', age: 10 });
const root = document.getElementById('root');
if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
}
