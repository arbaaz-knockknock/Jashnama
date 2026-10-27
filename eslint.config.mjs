import js from '@eslint/js';
import ts from 'typescript-eslint';

export default ts.config(
  { ignores: ['.next/**', 'node_modules/**', '.pnpm-store/**', '.vercel/**', 'next-env.d.ts', 'docs/**', 'artifacts/**'] },
  js.configs.recommended,
  ...ts.configs.recommended,
  { files: ['**/*.{ts,tsx,mjs}'], languageOptions: { globals: {
    process: 'readonly', console: 'readonly', Buffer: 'readonly', URL: 'readonly', Request: 'readonly', Response: 'readonly', Headers: 'readonly', fetch: 'readonly', AbortSignal: 'readonly', globalThis: 'readonly', setTimeout: 'readonly', clearTimeout: 'readonly',
  } }, rules: { '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }] } },
);
