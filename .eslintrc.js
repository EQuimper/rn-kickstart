const OFF = 0;
const WARN = 1;
const ERROR = 2;

const reactRules = {
  'react/jsx-curly-brace-presence': OFF,
  'react/self-closing-comp': OFF,
  'react/no-array-index-key': OFF,
  'react/no-unescaped-entities': OFF,
  'react/jsx-filename-extension': [OFF, { extensions: ['.js', '.jsx'] }],
  'react/no-unused-prop-types': OFF,
  'react/require-default-props': OFF,
};

const flowTypeRules = {
  'flowtype/boolean-style': [ERROR, 'boolean'],
  'flowtype/generic-spacing': [ERROR, 'never'],
  'flowtype/no-primitive-constructor-types': ERROR,
  'flowtype/no-types-missing-file-annotation': ERROR,
  'flowtype/object-type-delimiter': [ERROR, 'comma'],
  'flowtype/require-parameter-type': OFF,
  'flowtype/require-valid-file-annotation': [ERROR, 'always'],
  'flowtype/semi': [ERROR, 'always'],
  'flowtype/no-weak-types': OFF,
  'flowtype/space-after-type-colon': [ERROR, 'always'],
  'flowtype/space-before-generic-bracket': [ERROR, 'never'],
  'flowtype/space-before-type-colon': [ERROR, 'never'],
  'flowtype/union-intersection-spacing': [ERROR, 'always'],
  'flowtype/define-flow-type': WARN,
  'flowtype/use-flow-type': WARN,
  'flowtype/valid-syntax': WARN,
  'flowtype/delimiter-dangle': OFF,
  'flowtype/require-return-type': OFF,
  'flowtype/type-id-match': OFF,
};

const importRules = {
  'import/export': OFF,
  'import/prefer-default-export': OFF,
  'import/no-extraneous-dependencies': [
    ERROR,
    {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false,
    },
  ],
};

const reactNativeRules = {
  'react-native/no-unused-styles': ERROR,
};

const rules = Object.assign(
  {
    'class-methods-use-this': OFF,
    'no-underscore-dangle': OFF,
    'no-use-before-define': OFF,
    'no-return-assign': OFF,
    'global-require': OFF,
    'no-param-reassign': OFF,
    'func-names': OFF,
  },
  reactRules,
  flowTypeRules,
  importRules,
  reactNativeRules,
);

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  plugins: ['react-native', 'flowtype'],
  rules,
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
  globals: {
    fetch: false,
    __DEV__: false,
    XMLHttpRequest: false,
    FormData: false,
  },
};