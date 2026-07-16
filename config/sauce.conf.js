import { generalConf } from './general.conf.js'

export const sauceConf = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,

    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',

    capabilities: process.env.PLATFORM === 'android'
        ? [
            {
                platformName: 'Android',
                'appium:app': 'storage:filename=ebacshop.aab',
                'appium:deviceName': 'Samsung Galaxy S22.*',
                'appium:platformVersion': '13',
                'appium:automationName': 'UiAutomator2',
                'appium:disableIdLocatorAutocompletion': true,
                'sauce:options': {
                    build: 'appium-build-teste-ebacshop-android',
                    name: 'Ebac Shop Teste',
                    deviceOrientation: 'PORTRAIT',
                    appiumVersion: '2.0.0'
                }
            }
        ]
        : [
            {
                platformName: 'iOS',
                'appium:app': 'storage:filename=LojaEBAC.ipa',
                'appium:deviceName': 'iPhone 15',
                'appium:platformVersion': '17',
                'appium:automationName': 'XCUITest',
                'sauce:options': {
                    'sauce:options': {
                        build: 'appium-build-teste-ebacshop-ios',
                        name: 'Ebac Shop Teste',
                        deviceOrientation: 'PORTRAIT',
                        appiumVersion: 'latest'
                    }
                }
            }
        ],

    ...generalConf
}