// @noflow

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'react-native';

configure({
  adapter: new Adapter(),
});

/**
|--------------------------------------------------
| MOCKING LIBRARY
|--------------------------------------------------
*/

jest.mock('react-native-device-info', () => ({
  isEmulator: jest.fn(),
  getBuildNumber: jest.fn(),
}));

jest.mock('@appandflow/touchable', () => {
  const mockComponent = require('react-native/jest/mockComponent');

  return mockComponent('TouchableOpacity');
});
