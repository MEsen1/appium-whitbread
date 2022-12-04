import { config } from './wdio.conf';
import path from 'path';
import 'dotenv/config';

config.specs = ['../tests/specs/example.test.e2e.js'];

config.capabilities = [
  {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    /**
     * app capability doesn't needed if appPackage and Activity are declared
     */
    // 'appium:appPackage': 'com.whitbread.premierinn',
    // 'appium:appActivity':
    //   'com.whitbread.premierinn.loading.LoadingActivity',
    'appium:platformVersion': `${process.env.DEVICE_NAME}`,
    'appium:deviceName': `${process.env.OS}`,
    'appium:appWaitForLaunch': false,
    /**
     *  udid can be used instead platformVersion and deviceName, known as serial number
     *  adb devices to fetch connected devices udid
     */
    //'appium:udid': `${process.env.UDID}`,
    'appium:app': path.resolve('./app/com.whitbread.premierinn.apk'),
  },
];

exports.config = config;
