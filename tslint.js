// https://palantir.github.io/tslint/rules/
module.exports = {
  extends: [
    // https://github.com/jonaskello/tslint-immutable
    'tslint-immutable',
    // https://github.com/buzinas/tslint-eslint-rules
    'tslint-eslint-rules',
    // https://github.com/blakeembrey/tslint-config-standard
    'tslint-config-standard',
    // https://github.com/prettier/tslint-plugin-prettier
    'tslint-plugin-prettier',
    // https://github.com/prettier/tslint-config-prettier
    'tslint-config-prettier',
  ],
  rules: {
    prettier: [true],
    // --- additional ---
    // "dot-location": [true, "object"],
    'linebreak-style': [true, 'LF'],
    'no-null-keyword': [true],
    'only-arrow-functions': [true],
    // --- overridden ---
    quotemark: [true, 'single', 'avoid-escape', 'jsx-double'],
    'space-before-function-paren': [
      true,
      {
        anonymous: 'always',
        asyncArrow: 'always',
        constructor: 'never',
        method: 'never',
        named: 'never',
      },
    ],
    'trailing-comma': [
      true,
      {
        multiline: {
          arrays: 'always',
          objects: 'always',
          imports: 'always',
          exports: 'always',
          functions: 'always',
        },
      },
    ],
  },
}
