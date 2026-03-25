import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/pageLogin.js'
import ProductsPage from '../pageobjects/pageProducts.js'

const listUsernames = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'];

describe('My Login application', () => {
    for (let i = 0; i < listUsernames.length; i++) {
        it(`should log in with "` + listUsernames[i] + `" and then logout`, async () => {
            await LoginPage.open()
            await LoginPage.login(listUsernames[i], 'secret_sauce')
            await expect(ProductsPage.titleProducts).toExist()
            await LoginPage.logout()
            await expect(LoginPage.fieldUsername).toExist()
        })
    }
})
