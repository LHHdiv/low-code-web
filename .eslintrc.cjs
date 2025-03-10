/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  // eslint规则
  rules: {
    'no-console': 'off', //【off,error】
    'no-debugger': 'off', //【off,error】
    '@typescript-eslint/no-explicit-any': 'error', // TS中禁止使用any
    '@typescript-eslint/no-empty-interface': 'error' // 不允许有空的interface导出
  },
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
