import { browser } from '@wdio/globals';

export default class Main {
    
    open () {
        return browser.url(`https://www.saucedemo.com`)
    }
}