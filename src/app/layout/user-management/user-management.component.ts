import { Component } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  passwordInputType = 'password';
  users: { username: string; email: string; password: string, passwordHidden: boolean }[] = [];

  addUser() {
    if (this.username && this.email && this.password) {
      this.users.push({ username: this.username, email: this.email, password: this.password,passwordHidden: true});
      this.username = '';
      this.email = '';
      this.password = '';
      this.passwordInputType = 'password';

      localStorage.setItem('userManagementData', JSON.stringify(this.users));
    }
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);

    localStorage.setItem('userManagementData', JSON.stringify(this.users));
  }
  togglePasswordVisibility(index: number) {
    this.users[index].passwordHidden = !this.users[index].passwordHidden;
    this.passwordInputType = this.users.some(user => !user.passwordHidden) ? 'text' : 'password';
  }
  ngOnInit() {
    const storedData = localStorage.getItem('userManagementData');
    if (storedData) {
      this.users = JSON.parse(storedData);
    }
  }
}

