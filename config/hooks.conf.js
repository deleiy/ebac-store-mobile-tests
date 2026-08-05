export let hooksConf = {
    afterTest: async function () {
        await driver.takeScreenshot();
    },

    beforeTest: async function () {
        let state = await driver.queryAppState('br.com.lojaebac')
    }
}