import { $ } from '@wdio/globals'
import Main from './main.js';

class Login extends Main {

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

    get buttonLogout () {
        return $('#logout_sidebar_link')
    }

    async login (username, password) {
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(password);
        await this.buttonLogin.click();
    }

    listUsernames = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'];

    async loginRecurring () {
        for (let i = 0; i < listUsernames.length; i++) {
            login (listUsernames[i]);
        }
    }

    async logout () {
        await this.buttonBurgerMenu.click();
        await this.buttonLogout.click();
    }

    open () {
        return super.open('login');
    }
}

export default new Login();