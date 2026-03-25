import { $ } from '@wdio/globals';
import Main from './main.js';

class LoginPage extends Main {

    get fieldUsername () {
        return $('#user-name');
    }

    get fieldPassword () {
        return $('#password');
    }

    get buttonLogin () {
        return $('#login-button');
    }

    get buttonBurgerMenu () {
        return $('#react-burger-menu-btn');
    }

    async login (username, password) {
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(password);
        await this.buttonLogin.click();
    }

    open () {
        return super.open('login');
    }
}

export default new LoginPage();