module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    extend: {},
    colors: {
      "primary": {
        DEFAULT: '#AA0601',
        dark: '#650300'
      },
      "secondary":'#FBF2F2',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}