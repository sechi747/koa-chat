module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'vue/attribute-hyphenation': 0,
    'vue/no-v-html': 0,
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  globals: {
    defineProps: true,
    defineEmits: true,
    defineExpose: true,
  },
};
