/**
 * @copyright 2017 Fetch Robotics, Inc.
 * @author Igor Leshchenko
 * @author Andrii Buts
 */

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        'ecmaVersion': 6,
    },
    extends: [
        'react-app',
        'plugin:react/recommended',
    ],
    plugins: [
        'react',
        'brackets',
        'class-property',
    ],
    globals: {
        'jest': false,
        'describe': false,
        'it': false,
        'xit': false,
        'expect': false,
        'beforeEach': false,
        'afterEach': false,
        'beforeAll': false,
        'afterAll': false,
    },
    rules: {
        'no-case-declarations': 'error',
        'no-console': 'error',
        'no-fallthrough': 'error',
        'no-multi-spaces': 'error',
        'no-loop-func': 'error',
        'no-duplicate-imports': 'error',
        'import/no-duplicates': 'error',
        'import/no-unresolved': 'error',
        'import/extensions': ['error', 'never', { 'svg': 'always', 'css': 'always' }],
        'prefer-arrow-callback': 'off',
        'func-names': 'off',
        'strict': 'off',
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'object-shorthand': 'warn',
        'comma-dangle': ['error', {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'always-multiline',
        }],
        'semi': ['error', 'never'],
        'no-extra-semi': 'error',
        'class-property/class-property-semicolon': ['error', 'never'],
        'no-unexpected-multiline': 'error',
        'new-cap': 'off',
        'prefer-template': 'off',
        'no-param-reassign': ['error', { 'props': true }],
        'no-restricted-syntax': 'off',
        'no-alert': 'off',
        'no-multiple-empty-lines': ['error', { 'max': 1 }],
        'no-prototype-builtins': 'off',
        'no-shadow': 'error',
        'eol-last': ['error', 'always'],
        'react/prefer-es6-class': 'warn',
        'react/jsx-indent': ['error', 4],
        'react/jsx-first-prop-new-line': 'off',
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-closing-bracket-location': ['error', 'after-props'],
        'react/jsx-boolean-value': 'off',
        'react/sort-comp': 'off',
        'react/prop-types': 'warn',
        'react/require-default-props': 'off',
        'react/no-unused-prop-types': 'off',
        'react/forbid-prop-types': 'off',
        'react/display-name': 'warn',
        'react/jsx-tag-spacing': ['error', {
            'closingSlash': 'never',
            'afterOpening': 'never',
            'beforeClosing': 'never',
            'beforeSelfClosing': 'always',
        }],
        'arrow-body-style': 'off',
        'arrow-parens': ['error', 'always'],
        'no-underscore-dangle': 'error',
        'prefer-rest-params': 'error',
        'max-len': ['error', { 'code': 120, 'ignoreComments': true }],
        'consistent-return': 'error',
        'default-case': 'off',
        'operator-linebreak': ['error', 'before'],
        'brackets/array-bracket-newline': 'error',
        'brackets/call-parens-newline': 'error',
        'brackets/conditional-parens-newline': 'error',
        'brackets/func-parens-newline': 'error',
        'brackets/object-curly-newline': 'error',
        'camelcase': 'error',
        'jsx-a11y/anchor-has-content': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/href-no-hash': 'off',
        'no-use-before-define': ['error', { 'functions': false }],
        'no-unused-vars': ['error', { "vars": "all", "args": "after-used", "ignoreRestSiblings": true }],
        'key-spacing': 'error',
        'spaced-comment': 'error',
        'space-before-blocks': 'error',
        'arrow-spacing': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': ['error', 'always', { 'objectsInObjects': true }],
    },
    'settings': {
        'import/resolver': {
            'node': {
                'paths': ['./src'],
                'extensions': [
                    '.js',
                    '.jsx',
                    '.json'
                ]
            }
        }
    }
}
