import { expect } from '@wdio/globals'
import Login from '../pageobjects/pageLogin.js'
import Products from '../pageobjects/pageProducts.js'

describe('My Login application', () => {
    
    it('should login with valid credentials', async () => {
        await Login.open()

        await Login.login('standard_user', 'secret_sauce')
        await expect(Products.titleProducts).toExist()
        await Login.logout()
        await expect(Login.fieldUsername).toExist()
    })
})
