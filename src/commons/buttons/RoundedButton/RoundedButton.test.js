// @noflow

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { ActivityIndicator } from 'react-native';

import RoundedButton from './RoundedButton';

describe('<RoundedButton />', () => {
  it('should renders correctly', () => {
    const props = {
      onPress: () => null,
      variant: 'primary',
    };

    const tree = renderer
      .create(<RoundedButton {...props}>Hello World</RoundedButton>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should handle press event', () => {
    const spy = jest.fn();
    const text = 'Hello World';

    const props = {
      onPress: spy,
      variant: 'primary',
    };

    const button = shallow(<RoundedButton {...props}>{text}</RoundedButton>);

    button.simulate('press');
    expect(spy).toHaveBeenCalled();
  });

  it('should contain the text pass as children', () => {
    const text = 'Hello World';

    const props = {
      onPress: () => null,
      variant: 'primary',
    };

    const button = shallow(<RoundedButton {...props}>{text}</RoundedButton>);
    expect(button.contains(text)).toBeTruthy();
  });

  it('should be able to change textStyle', () => {
    const text = 'Hello World';

    const props = {
      onPress: () => null,
      variant: 'primary',
      textStyle: {
        color: 'red',
        fontSize: 20,
      },
    };

    const button = renderer
      .create(<RoundedButton {...props}>{text}</RoundedButton>)
      .toJSON();
    expect(button).toMatchSnapshot();
  });

  it('should be in disabled mode if disabled true', () => {
    const text = 'Hello World';

    const props = {
      onPress: () => null,
      variant: 'primary',
    };

    const buttonDisabled = renderer
      .create(
        <RoundedButton {...props} disabled>
          {text}
        </RoundedButton>,
      )
      .toJSON();
    expect(buttonDisabled).toMatchSnapshot();
  });

  it('should be in disabled mode if loading true and show ActivityIndicator', () => {
    const text = 'Hello World';

    const props = {
      onPress: () => null,
      variant: 'primary',
    };

    const buttonLoading = shallow(
      <RoundedButton {...props} loading>
        {text}
      </RoundedButton>,
    );

    expect(buttonLoading.find(ActivityIndicator)).toHaveLength(1);
    expect(buttonLoading).toMatchSnapshot();
  });

  it('should throw error if variant or color not passed as props', () => {
    const text = 'Hello World';

    const props = {
      onPress: () => null,
    };

    const buttonWithError = () =>
      shallow(<RoundedButton {...props}>{text}</RoundedButton>);

    expect(buttonWithError).toThrow(
      'RoundedButton: You must provided at least one of variant or color',
    );
    expect(buttonWithError).toThrowErrorMatchingSnapshot();
  });
});
