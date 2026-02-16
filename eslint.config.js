import stylistic from '@stylistic/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import markdown from 'eslint-plugin-markdown';
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
      '@stylistic/brace-style': ['error', 'allman'],
      '@stylistic/quotes': ['error', 'single'] 
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
      '@stylistic/brace-style': ['error', 'allman'],
      '@stylistic/quotes': ['error', 'single'] 
    }
  },  // Markdown
  {
    files: ['**/*.md'],
    plugins: {
      markdown
    },
    processor: 'markdown/markdown'
  },

  // Markdown内のコードブロック
  {
    files: ['**/*.md/*.js'],
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/indent': ['error', 2]
    }
  }

];
