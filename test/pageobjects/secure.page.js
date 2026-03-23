import { $ } from '@wdio/globals'
import Main from './main.js';

class SecurePage extends Main {
    get inventoryPage () {
        return $('.title');
    }
}

export default new SecurePage();