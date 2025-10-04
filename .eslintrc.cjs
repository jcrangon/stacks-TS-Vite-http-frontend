/* eslint-disable no-undef */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: false,
  },
  plugins: ['@typescript-eslint', 'import', 'prettier', 'vitest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  settings: {
    // ✅ Ne garde que le resolver TypeScript (évite les interférences de "node")
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.json'],
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    // On laisse TS/Vite gérer les extensions → coupe la règle globale
    'import/extensions': 'off',
    // Tu peux garder cette règle si tu veux, le resolver TS sait résoudre "@"
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'prettier/prettier': 'warn',
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      // Si tu préfères seulement désactiver sur TS/TSX (et pas sur JS) :
      rules: {
        'import/extensions': 'off',
      },
    },
    {
      files: ['tests/**/*.{test,spec}.ts'],
      env: { node: true },
      globals: {
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        vi: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
      rules: {
        'vitest/no-focused-tests': 'error',
        'vitest/no-disabled-tests': 'warn',
      },
    },
  ],
  ignorePatterns: ['dist', 'coverage', 'node_modules'],
}
