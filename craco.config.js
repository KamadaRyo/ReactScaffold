module.exports = {
  style: {
    postcss: {
      "plugins": [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  "babel": {
    "plugins": [
      [
        "module:babel-root-import",
        {
          "rootPathPrefix": "@",
          "rootPathSuffix": "./src"
        }
      ]
    ]
  }
}
