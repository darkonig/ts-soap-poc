module.exports = {
  extends: 'eslint-config-neo/config-backend',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.eslint.json'],
  },
  rules: {
    jest: 'off',
    '@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true }],
    'import/no-default-export': 1,
    'import/no-restricted-paths': [
      'error',
      {
        basePath: './src',
        zones: [
          {
            target: 'domain',
            from: 'infrastructure',
            message: 'Hex: Cannot import from infrastructure in the domain layer',
          },
          {
            target: 'domain',
            from: 'application',
            message: 'Hex: Cannot import from application in the domain layer',
          },
          {
            target: 'domain',
            from: 'configuration',
            message: 'Hex: Cannot import from configuration in the domain layer',
          },
          {
            target: 'application',
            from: 'infrastructure',
            message: 'Hex: Cannot import from infrastructure in the application layer',
          },
          {
            target: 'infrastructure',
            from: 'application',
            message: 'Hex: Cannot import from application in the infrastructure layer',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['./src/domain/**/*.ts'],
      rules: {
        '@typescript-eslint/no-empty-interface': 'off',
      },
    },
  ],
};
