import { $ } from '@wdio/globals'
import Main from './main.js';

class LoginPage extends Main {
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    async logout() {
        await // this.~hamburgerMenuSelector~.click(); == reference a pre-made selector here (one that appears after user is logged in)
        await this.logout.click(); 
    }
    open () {
        return super.open('login');
    }
}

export default new LoginPage();