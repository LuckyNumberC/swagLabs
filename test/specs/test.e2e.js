import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/pageLogin.js'
import ProductsPage from '../pageobjects/pageProducts.js'

describe('My Login application', () => {
    for (const user of LoginPage.listUsernamesAccepted) {

        if (user !== 'locked_out_user') {
            it(`should log in with "` + user + `" and then logout`, async () => {
                await LoginPage.open()
                await LoginPage.login(user, 'secret_sauce')
                await expect(ProductsPage.titleProducts).toExist()
                await ProductsPage.logout()
                await expect(LoginPage.fieldUsername).toExist()
            })
        }
        else {
            it(`should fail to log in using "` + user + `" and receive an error message`, async () => {
                await LoginPage.open()
                await LoginPage.login(user, 'secret_sauce')
                await expect(ProductsPage.titleProducts).not.toExist()
                await expect(LoginPage.errorLockedOutUser).toExist()
            })
        }
    }
})
