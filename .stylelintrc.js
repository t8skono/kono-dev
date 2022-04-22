module.exports = {
  extends: [
    'stylelint-config-html/vue',
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-prettier/recommended',
    'stylelint-config-recess-order',
    // 'stylelint-config-recommended-scss',
  ],
  plugin: ['stylelint-order', 'stylelint-scss'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'for', 'each', 'include', 'mixin', 'content', 'return', 'use'],
      },
    ],
    // 'custom-property-no-missing-var-function': null,
    'no-descending-specificity': null,
    // 'scss/at-rule-no-unknown': true,
    'selector-class-pattern': null,
    'number-max-precision': 12,
    'no-empty-source': null,
    'declaration-block-no-redundant-longhand-properties': null,
  },
  ignoreFiles: ['dist/*'],
}
