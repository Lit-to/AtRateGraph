# 開発メモ

- 2026-02-16 23:09:34
- EslintでAllmanにするのにてこずったのでメモ  
  ``.vscode/settings.json``
  ```json
  {
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    },
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  }
  ```
  
  ``eslint.config.js``
  ```js
  import stylistic from "@stylistic/eslint-plugin";
  import tsParser from "@typescript-eslint/parser";
  import tsPlugin from "@typescript-eslint/eslint-plugin";
  import markdown from "eslint-plugin-markdown";
  export default [
    {
      files: ["**/*.{ts,tsx}"],
      languageOptions: {
        parser: tsParser
      },
      plugins: {
        "@typescript-eslint": tsPlugin,
        "@stylistic": stylistic
      },
      rules: {
        "@stylistic/indent": ["error", 2],
        "@stylistic/space-infix-ops": ["error"],
        "@stylistic/semi": ["error", "always"],
        "@stylistic/brace-style": ["error", "allman"],
        "@stylistic/quotes": ["error", "single"] 
      }
    },
    {
      files: ["**/*.js"],
      plugins: {
        "@stylistic": stylistic
      },
      rules: {
        "@stylistic/indent": ["error", 2],
        "@stylistic/space-infix-ops": ["error"],
        "@stylistic/semi": ["error", "always"],
        "@stylistic/brace-style": ["error", "allman"],
        "@stylistic/quotes": ["error", "single"] 
      }
    },
    {
      files: ["**/*.md"],
      plugins: {
        markdown
      },
      processor: "markdown/markdown"
    },
    {
      files: ["**/*.md/*.js"],
      plugins: {
        "@stylistic": stylistic
      },
      rules: {
        "@stylistic/indent": ["error", 2]
      }
    }
  ];

  ```
- githubactionへのデプロイ登録
  - 忘れそうなのでメモ。
  1.  ``.github/workflows``にymlファイルとして登録する
  2.  ``https://github.com/Lit-to/AtRateGraph/settings/pages``を有効化する
