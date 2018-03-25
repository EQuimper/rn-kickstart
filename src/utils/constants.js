// @flow

import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const isIOS = Platform.OS === 'ios';

export const isAndroid = Platform.OS === 'android';

export const isEmulator = DeviceInfo.isEmulator();

export const buildNumber = DeviceInfo.getBuildNumber();

export const appName = DeviceInfo.getApplicationName();
