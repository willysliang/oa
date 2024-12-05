module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    es6: true,
  },
  // 配置js全局变量，因为是uni-app，全局的uni是不需要引入的，还有5+的plus对象
  globals: {
    uni: 'readonly',
    plus: 'readonly',
    wx: 'readonly',
    document: false,
    navigator: false,
    window: false,
  },
  /* 指定如何解析语法 */
  parser: 'vue-eslint-parser',
  /** 优先级低于 parse 的语法解析配置 */
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  /* 继承已有的规则 */
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.vue'],
      rules: {
        'no-undef': 0,
      },
    },
  ],
  rules: {
    'eslint-disable-next-line': 0,
    'eslint-disable': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'comma-dangle': ['off', 'always'],
    quotes: 'off',
    semi: 'off',
    'no-tabs': 0,
    '@typescript-eslint/no-explicit-any': ['off'],
    'vue/no-v-html': 'off', // 关闭 v-html 的校验
    'no-extend-native': 'off', // 原型中可添加属性
    'func-call-spacing': 'off', // 函数存在意外空格
    'space-before-function-paren': 'off',
    '@typescript-eslint/triple-slash-reference': 'off', // 引用路径
    '@typescript-eslint/no-non-null-assertion': 'off', // 可使用断言
    // '@typescript-eslint/no-var-requires': 'off', // 可使用 require
    'no-use-before-define': ['error', { classes: false }], // class可以在定义之前使用变量（防止引用自身报错）
    'prefer-promise-reject-errors': 'off',
    'no-async-promise-executor': 'off',
  },
}
