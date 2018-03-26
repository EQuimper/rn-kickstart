// @flow

import {
  StackNavigator,
  SwitchNavigator,
} from 'react-navigation';

const AuthNavigator = StackNavigator(
  {
    Login: {
      getScreen: () => require('./LoginScreen').LoginScreen,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

const AppNavigator = SwitchNavigator({
  Auth: AuthNavigator,
});

export default AppNavigator;
