import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/pageLogin.js'
import ProductsPage from '../pageobjects/pageProducts.js'

const listUsernames = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'];

describe('My Login application', () => {
    for (let i = 0; i < listUsernames.length; i++) {
        if (listUsernames[i] !== 'locked_out_user') {
            it(`should log in with "` + listUsernames[i] + `" and then logout`, async () => {
                await LoginPage.open()
                await LoginPage.login(listUsernames[i], 'secret_sauce')
                await expect(ProductsPage.titleProducts).toExist()
                await ProductsPage.logout()
                await expect(LoginPage.fieldUsername).toExist()
            })
        }
        else {
            it(`should fail to log in using "` + listUsernames[i] + `" and receive an error message`, async () => {
                await LoginPage.open()
                await LoginPage.login(listUsernames[i], 'secret_sauce')
                await expect(ProductsPage.titleProducts).not.toExist()
                await expect(LoginPage.errorLockedOutUser).toExist()
            })
        }
    }
})
