// @noflow

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'react-native';

configure({
  adapter: new Adapter(),
});

jest.mock('@appandflow/touchable', () => {
  const mockComponent = require('react-native/jest/mockComponent');

  return mockComponent('TouchableOpacity');
});
