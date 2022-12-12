module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'airbnb',
    'airbnb-typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  plugins: ['react', 'react-hooks', 'unused-imports', '@typescript-eslint'],
  rules: {
    // prefer named arrow-function components
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function' },
    ],
    // prefer not referencing React in scope
    'react/react-in-jsx-scope': 'off',
    // airbnb is using .jsx
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    // enforces premature optimization
    'react/jsx-no-bind': 'off',
    // Great for raising awareness; however, sometimes not needed
    // if data is never expected to change (i.e. non-state data)
    'react/no-array-index-key': 'off',
    // this is an extensible component library after all ;¬)
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 'error',
    'react/no-direct-mutation-state': 'error',
    // use ES6+ deconstructed inner props instead of defaultProps
    'react/require-default-props': 'off',
    'react/sort-prop-types': 'error',
    'react/destructuring-assignment': 'off',
    // enforces react hook rules
    'react-hooks/rules-of-hooks': 'error',

    // clutter out unused imports
    'unused-imports/no-unused-imports': 'error',

    // enforces single quotes where appropriate
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    // some cases using ternary isn't so "bad" for code readability
    // - use your own judgement for this one
    'no-nested-ternary': 'off',
    // being explicit can be helpful when reading calculations
    'prefer-exponentiation-operator': 'off',

    // rule may produce incorrect errors
    '@typescript-eslint/indent': 'warn',
    indent: 'off',
    // disabled type-aware linting due to performance considerations
    '@typescript-eslint/dot-notation': 'off',
    'dot-notation': 'error',
    // disabled type-aware linting due to performance considerations
    '@typescript-eslint/no-implied-eval': 'off',
    'no-implied-eval': 'error',
    // disabled type-aware linting due to performance considerations
    '@typescript-eslint/no-throw-literal': 'off',
    'no-throw-literal': 'error',
    // disabled type-aware linting due to performance considerations
    '@typescript-eslint/return-await': 'off',
    'no-return-await': 'error',

    // doesn't work well with nested/custom components
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
  },
};
