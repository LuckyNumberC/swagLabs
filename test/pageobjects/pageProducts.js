import { $ } from '@wdio/globals';
import Main from './main.js';

class ProductsPage extends Main {
    
    get titleProducts () {
        return $('.title');
    }

    get buttonLogout () {
        return $('#logout_sidebar_link');
    }

    async logout () {
        await this.buttonBurgerMenu.click();
        await this.buttonLogout.click();
    }
}

export default new ProductsPage();