const {
  override,
  fixBabelImports,
  addLessLoader,
  addPostcssPlugins,
  addDecoratorsLegacy,
} = require("customize-cra");

module.exports = {
  webpack: override(
    addDecoratorsLegacy(),
    fixBabelImports("import", {
      libraryName: "antd",
      libraryDirectory: "es",
      // !style设为true需要安装less和less-loader
      style: "css",
    }),
    addLessLoader({
      javascriptEnabled: true,
      // !下面是自定义主题颜色
      modifyVars: { "@primary-color": "#d31f1a" },
    }),
    // !px自动转为rem，依赖postcss-pxtorem，index.js还得再引入lib-flexible依赖
    addPostcssPlugins([
      require("autoprefixer"),
      require("postcss-pxtorem")({
        rootValue: 75,
        propList: ["*"],
        minPixelValue: 2,
        selectorBlackList: ["toast-"],
      }),
    ])
  ),
};
