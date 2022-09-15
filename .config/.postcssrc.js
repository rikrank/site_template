module.exports = (ctx) => ({
  map: false,
  plugins: {
    'postcss-flexbugs-fixes': true,
    'postcss-combine-media-query': true,
    'autoprefixer': {
      grid: "autoplace",
    },
    'cssnano': ctx.env === 'production' ? { preset: 'default' } : false
  },
  autoprefixer: {
    browsers: "last 2 versions"
  }
})