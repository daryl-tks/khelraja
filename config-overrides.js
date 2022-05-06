const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addLessLoader
} = require("customize-cra");

const path = require("path");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),

  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: {
  //     "ant-theme-file":
  //       "; @import '" + path.resolve(__dirname, "./src/styles/theme.less") + "'"
  //   }
  // }),

  addWebpackAlias({
    ["src"]: path.resolve(__dirname, "src"),
    ["@utils"]: path.resolve(__dirname, "src/utils"),
    ["@assets"]: path.resolve(__dirname, "src/assets"),
    ["@commons"]: path.resolve(__dirname, "src/commons"),
    ["@lender"]: path.resolve(__dirname, "src/modules/Lender"),
    ["@landing"]: path.resolve(__dirname, "src/modules/Landing"),
    ["@distributor"]: path.resolve(__dirname, "src/modules/Distributor")
  })
);
