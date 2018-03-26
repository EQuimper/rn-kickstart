// @noflow

import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

import CenterView from './CenterView';

describe('<CenterView />', () => {
  it('should renders correctly', () => {
    const tree = shallow(
      <CenterView>
        <Text>Hello World</Text>
      </CenterView>,
    );

    expect(tree).toMatchSnapshot();
  });
});
