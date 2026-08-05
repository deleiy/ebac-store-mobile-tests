import { generalConf } from './general.conf.js'

export const browserstackConf = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    hostname: 'hub.browserstack.com',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',

    capabilities: [
        {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:app': process.env.BROWSERSTACK_APP_ID,

            'bstack:options': {
                deviceName: 'Samsung Galaxy S23',
                osVersion: '13.0',
                projectName: 'EBAC Mobile',
                buildName: 'GitHub Actions Build'
            }
        }
    ],

    ...generalConf
}