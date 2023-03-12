module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  rules: {
    'no-console': 'off',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: ['coverage', 'dist', 'node_modules'],
};
