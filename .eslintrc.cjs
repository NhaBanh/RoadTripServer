module.exports = {
  root: true,
  env: {
    'es2021': true,
    'node': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  plugins: [
    '@typescript-eslint',
    '@stylistic/js',
    'import',
  ],
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    //===//
    quotes: ['error', 'single'],
    'no-trailing-spaces': ['error'],
    'indent': ['error', 2],
    //===//
    //https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      'error',
      //Require blank lines before all return statements
      {blankLine: 'always', prev: '*', next: 'return'},
      //Require blank lines after every sequence of variable declarations
      {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      //Require blank lines before after function declarations
      {blankLine: 'always', prev: 'block-like', next: '*'},
    ],

    //===//
    //https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        'newlines-between': 'always',
      },
    ],


  },
}
