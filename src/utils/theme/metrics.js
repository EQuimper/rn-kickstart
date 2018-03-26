// @flow

import { Dimensions, Platform } from 'react-native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const tinySize = 8;
const smallSize = 16;
const largeSize = 24;

export const metrics = {
  tinySize,
  smallSize,
  largeSize,
  shadow: {
    basic: {
      shadowOffset: {
        width: 0,
        height: 13,
      },
      shadowRadius: 25,
      shadowColor: '#000000',
      shadowOpacity: 0.12,
      elevation: 2,
    },
  },
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  radius: {
    tinySize,
    smallSize,
    largeSize,
  },
  padding: {
    tinySize,
    smallSize,
    largeSize,
  },
  screenWidth: WIDTH < HEIGHT ? WIDTH : HEIGHT,
  screenHeight: WIDTH < HEIGHT ? HEIGHT : WIDTH,
};
