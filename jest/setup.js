// @flow

jest.mock('@appandflow/touchable', () => {
  const mockComponent = require('react-native/jest/mockComponent');

  return mockComponent('TouchableOpacity');
});
