module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2021,
    parser: "@typescript-eslint/parser",
  },

  globals: {
    defineProps: "readonly",
    withDefaults: "readonly",
  },

  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/prettier",
    "@vue/typescript",
  ],

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/no-deprecated-slot-attribute": "off",

    // 推奨設定（eslint:recommended）からeslint標準のruleを無効化
    //   https://eslint.org/docs/user-guide/configuring/rules
    "no-irregular-whitespace": ["off"],
    // vue.js拡張の方で設定
    "vue/no-irregular-whitespace": [
      "error",
      {
        // 共通 https://eslint.org/docs/rules/no-irregular-whitespace#skipregexps
        // skipStrings: true, // 初期値true 変数の文字列に全角スペース許可
        skipTemplates: true, // 変数のtemplate文字列の中で全角スペース許可  例：const tmp = `あ  い
        skipRegExps: true, // 正規表現に全角スペース可
        // Vue.js専用 https://eslint.vuejs.org/rules/no-irregular-whitespace.html
        skipHTMLAttributeValues: true, // 属性の中で全角スペース許可  例：placeholder="あ  い"
      },
    ],
  },
};
