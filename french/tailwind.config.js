module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    extend: {},
  },
  variants: {
    display: ['children', 'default', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwindcss-children'),
  ],
}
