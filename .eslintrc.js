module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@nuxtjs', 'prettier', 'prettier/vue', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    semi: [2, 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 0,
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always'
        }
      }
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'prettier/prettier': ['error', { semi: false, endOfLine: 'auto', printWidth: 120, arrowParens: 'always' }],
    'max-len': [2, { code: 120, ignoreStrings: true, ignoreUrls: true }]
  }
}
