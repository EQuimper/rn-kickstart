// @noflow

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { ActivityIndicator } from 'react-native';

import Button from './Button';

describe('<Button />', () => {
  it('should renders correctly', () => {
    const props = {
      onPress: jest.fn(),
      variant: 'primary',
    };

    const tree = renderer
      .create(<Button {...props}>Hello World</Button>)
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

    const button = shallow(<Button {...props}>{text}</Button>);

    button.simulate('press');
    expect(spy).toHaveBeenCalled();
  });

  it('should contain the text pass as children', () => {
    const text = 'Hello World';

    const props = {
      onPress: jest.fn(),
      variant: 'primary',
    };

    const button = shallow(<Button {...props}>{text}</Button>);
    expect(button.contains(text)).toBeTruthy();
  });

  it('should be able to change textStyle', () => {
    const text = 'Hello World';

    const props = {
      onPress: jest.fn(),
      variant: 'primary',
      textStyle: {
        color: 'red',
        fontSize: 20,
      },
    };

    const button = renderer.create(<Button {...props}>{text}</Button>).toJSON();
    expect(button).toMatchSnapshot();
  });

  it('should be in disabled mode if disabled true', () => {
    const text = 'Hello World';

    const props = {
      onPress: jest.fn(),
      variant: 'primary',
    };

    const buttonDisabled = renderer
      .create(
        <Button {...props} disabled>
          {text}
        </Button>,
      )
      .toJSON();
    expect(buttonDisabled).toMatchSnapshot();
  });

  it('should be in disabled mode if loading true and show ActivityIndicator', () => {
    const text = 'Hello World';

    const props = {
      onPress: jest.fn(),
      variant: 'primary',
    };

    const buttonLoading = shallow(
      <Button {...props} loading>
        {text}
      </Button>,
    );

    expect(buttonLoading.find(ActivityIndicator)).toHaveLength(1);
    expect(buttonLoading).toMatchSnapshot();
  });

  it('should throw error if variant or color not passed as props', () => {
    const text = 'Hello World';

    const props = {
      onPress: jest.fn(),
    };

    const buttonWithError = () => shallow(<Button {...props}>{text}</Button>);

    expect(buttonWithError).toThrow(
      'Button: You must provided at least one of variant or color',
    );
    expect(buttonWithError).toThrowErrorMatchingSnapshot();
  });
});
