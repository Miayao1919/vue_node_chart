const path = require("path");
const dotenv = require("dotenv")
const dotenvExpand = require("dotenv-expand")
var myEnv = dotenv.config({path: "../.env"})
dotenvExpand.expand(myEnv)

module.exports = {
  pages: {
    index: {
      entry: "client/src/main.js",
      template: "client/public/index.html"
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client/src")
      }
    }
  }
}
