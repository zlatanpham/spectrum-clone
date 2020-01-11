module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['client', 'api']],
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', ['lower-case']],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'release',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'ci',
        'build',
      ],
    ],
  },
};
