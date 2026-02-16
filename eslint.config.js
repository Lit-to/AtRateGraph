import stylistic from '@stylistic/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/space-infix-ops': ['error'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/brace-style': ['error', 'allman']
    }
  },
  {
    files: ['**/*.js'],
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/space-infix-ops': ['error'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/brace-style': ['error', 'allman']
    }
  }

];
