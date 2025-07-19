import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Add padding line before return statements
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
      ],

      // Disable rules that conflict with Biome
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-undef': 'off',
      'prefer-const': 'off',
      'no-var': 'off',
      quotes: 'off',
      semi: 'off',
      'comma-dangle': 'off',
      indent: 'off',
      'max-len': 'off',
      'object-curly-spacing': 'off',
      'array-bracket-spacing': 'off',
      'space-before-blocks': 'off',
      'keyword-spacing': 'off',
      'space-infix-ops': 'off',
      'eol-last': 'off',
      'no-trailing-spaces': 'off',
      'space-before-function-paren': 'off',
      'brace-style': 'off',
      'comma-spacing': 'off',
      'key-spacing': 'off',
      'no-multi-spaces': 'off',
      'space-in-parens': 'off',
      'space-unary-ops': 'off',
      'spaced-comment': 'off',
      'arrow-spacing': 'off',
      'block-spacing': 'off',
      'computed-property-spacing': 'off',
      'func-call-spacing': 'off',
      'generator-star-spacing': 'off',
      'jsx-quotes': 'off',
      'no-mixed-spaces-and-tabs': 'off',
      'no-multiple-empty-lines': 'off',
      'padded-blocks': 'off',
      'rest-spread-spacing': 'off',
      'semi-spacing': 'off',
      'switch-colon-spacing': 'off',
      'template-curly-spacing': 'off',
      'yield-star-spacing': 'off',
    },
  },
);
