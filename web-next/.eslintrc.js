module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-unresolved': 0,
    'arrow-body-style': 0,
    // 'import/no-unresolved': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['components', './components'],
          ['@/components', './components'],
          ['lib', './lib'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
}
