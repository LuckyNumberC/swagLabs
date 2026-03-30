import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/pageLogin.js'
import ProductsPage from '../pageobjects/pageProducts.js'

describe('My Login application', () => {

    // --- for ACCEPTED USERNAMES ---
    for (const user of LoginPage.listUsernamesAccepted) {

        // --- POSITIVE TESTS ---
        if (user !== 'locked_out_user') {
            it(`should log in with "${user}" and then logout`, async () => {
                await LoginPage.open()
                await LoginPage.login(user, 'secret_sauce')
                await expect(ProductsPage.titleProducts).toExist()
                await ProductsPage.logout()
                await expect(LoginPage.fieldUsername).toExist()
            })
        }

        // --- NEGATIVE TESTS: wrong password ---
        if (user !== 'locked_out_user') {
            it(`should fail to log in with "${user}" using a wrong password`, async () => {
                await LoginPage.open()
                await LoginPage.login(user, 'wrong_password')
                await expect(ProductsPage.titleProducts).not.toExist()
                await expect(LoginPage.errorLockedOutUser).toExist()
            })
        }
    }

    // --- NEGATIVE TESTS for UNIQUE STUFF ---
    it('should fail to log in as locked_out_user', async () => {
        await LoginPage.open()
        await LoginPage.login('locked_out_user', 'secret_sauce')
        await expect(ProductsPage.titleProducts).not.toExist()
        await expect(LoginPage.errorLockedOutUser).toExist()
    })

    it('should fail to log in with empty fields', async () => {
        await LoginPage.open()
        await LoginPage.login('', '')
        await expect(ProductsPage.titleProducts).not.toExist()
        await expect(LoginPage.errorLockedOutUser).toExist()
    })

    it('should fail to log in with a new username', async () => {
        await LoginPage.open()
        await LoginPage.login('unregistered_user', 'secret_sauce')
        await expect(ProductsPage.titleProducts).not.toExist()
        await expect(LoginPage.errorLockedOutUser).toExist()
    })
})