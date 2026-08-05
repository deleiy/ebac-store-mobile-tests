import { $ } from '@wdio/globals'

class HomePage {

    async openMenu(menu){

        const source = await driver.getPageSource()
        console.log(source)

        await $(`id:tab-${menu}`).click()
    }

}

export default new HomePage();